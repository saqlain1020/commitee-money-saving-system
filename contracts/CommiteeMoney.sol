//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CommiteeMoney is Ownable {
    uint256 public fixedDepositAmount = 0.01 ether;
    uint256 public totalAllowedParticipants = 2;
    uint256 public commiteeReward = 0.02 ether;
    uint256 public lastCommiteeOpenDate;
    address[] public commiteeMembers;
    mapping(address => uint256) memberToLastpayment;
    address[] public commiteeWinners;
    event OpenCommitee(address indexed winner, uint256 amount, uint256 date);
    event PaymentReceived(
        address indexed from,
        uint256 amount,
        uint256 refunded,
        uint256 date
    );

    // Start comite by owner
    function startCommitee() external onlyOwner {
        require(commiteeMembers.length == 0, "Commitee already started");
        lastCommiteeOpenDate = block.timestamp;
    }

    // open comitee by owner using random hash
    function openCommitee() external onlyOwner returns (address, bool) {
        require(
            commiteeMembers.length == totalAllowedParticipants,
            "Participants not enough"
        );
        require(hasEveryonePaid(), "Not everyone paid");
        // get random from not those who got last opened pay
        address[] memory notWonMembers = getNotWonMembers();
        uint256 randNumForNotWin = uint256(
            keccak256(abi.encodePacked(msg.sender, block.timestamp))
        ) % notWonMembers.length;

        address payable randomAddress = payable(
            notWonMembers[randNumForNotWin]
        );

        // pay that random and update that member received payment.
        randomAddress.transfer(commiteeReward);
        emit OpenCommitee(randomAddress, commiteeReward, block.timestamp);
        commiteeWinners.push(randomAddress);
        memberToLastpayment[randomAddress] = block.timestamp;
        // update last payment date
        if (commiteeWinners.length == totalAllowedParticipants) {
            clearCommitee();
            return (randomAddress, true);
        }
        lastCommiteeOpenDate = block.timestamp;
        return (randomAddress, false);
    }

    // Clear Commitee
    function clearCommitee() public onlyOwner {
        commiteeMembers = new address[](0);
        commiteeWinners = new address[](0);
        lastCommiteeOpenDate = block.timestamp;
    }

    // receive monetary payment from member
    function receivePayment() external payable {
        // if user paid then leave;
        // require(lastCommiteeOpenDate > 0, "Commitee not started");
        require(!hasPaid(msg.sender), "You already paid");
        console.log("amountsent", msg.value);
        require(msg.value >= fixedDepositAmount, "Payment is not enough");
        if (isUserInCommitee(msg.sender)) {
            _userPaymentReceived(msg.sender, msg.value);
        } else {
            require(
                commiteeMembers.length < totalAllowedParticipants,
                "Commitee is full"
            );
            _userPaymentReceived(msg.sender, msg.value);
            commiteeMembers.push(msg.sender);
        }
    }

    function _userPaymentReceived(address _sender, uint256 _amount) private {
        if (_amount > fixedDepositAmount) {
            (bool sent, ) = payable(_sender).call{
                value: msg.value - fixedDepositAmount
            }("");
            require(sent, "Payment not sent");
            emit PaymentReceived(
                _sender,
                _amount,
                msg.value - fixedDepositAmount,
                block.timestamp
            );
        } else {
            emit PaymentReceived(_sender, _amount, 0, block.timestamp);
        }
        memberToLastpayment[msg.sender] = block.timestamp;
    }

    function hasPaid(address _member) public view returns (bool) {
        return memberToLastpayment[_member] > lastCommiteeOpenDate;
    }

    function isUserInCommitee(address _member) public view returns (bool) {
        for (uint256 i = 0; i < commiteeMembers.length; i++) {
            if (commiteeMembers[i] == _member) {
                return true;
            }
        }
        return false;
    }

    function hasEveryonePaid() public view returns (bool) {
        for (uint256 i = 0; i < commiteeMembers.length; i++) {
            if (!hasPaid(commiteeMembers[i])) {
                return false;
            }
        }
        return true;
    }

    function getNotWonMembers()
        public
        view
        returns (address[] memory addresses)
    {
        address[] memory notWonMembers = new address[](
            commiteeMembers.length - commiteeWinners.length
        );
        uint256 counter = 0;
        for (uint256 i = 0; i < commiteeMembers.length; i++) {
            if (!hasWon(commiteeMembers[i])) {
                notWonMembers[counter] = commiteeMembers[i];
                counter++;
            }
        }
        return notWonMembers;
    }

    function hasWon(address _member) public view returns (bool) {
        for (uint256 i = 0; i < commiteeWinners.length; i++) {
            if (commiteeWinners[i] == _member) {
                return true;
            }
        }
        return false;
    }

    function balanceOf() public view returns (uint256) {
        return address(this).balance;
    }

    function setFixedDepositAmount(uint256 _amount) external onlyOwner {
        fixedDepositAmount = _amount;
    }

    function setCommiteeReward(uint256 _amount) external onlyOwner {
        commiteeReward = _amount;
    }

    function setAllowedParticipants(uint256 _amount) external onlyOwner {
        totalAllowedParticipants = _amount;
    }

    function destroyContract() external onlyOwner {
        selfdestruct(payable(msg.sender));
    }
}
