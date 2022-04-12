//SPDX-License-Identifier: MIT
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
    bool public commiteeEnabled = false;
    event OpenCommitee(address indexed winner, uint256 amount, uint256 date);
    event PaymentReceived(
        address indexed from,
        uint256 amount,
        uint256 refunded,
        uint256 date
    );
    event CommiteeClosed(
        uint256 indexed date,
        address[] members,
        uint256 totalWinnings
    );

    // open comitee by owner using random hash
    function openCommitee() external onlyOwner {
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
            _clearCommitee();
        }
        lastCommiteeOpenDate = block.timestamp;
    }

    // close comitee when everyone has been paid
    function _clearCommitee() private onlyOwner {
        emit CommiteeClosed(
            block.timestamp,
            commiteeMembers,
            commiteeReward * totalAllowedParticipants
        );
        disableCommitee();
        commiteeMembers = new address[](0);
        commiteeWinners = new address[](0);
        lastCommiteeOpenDate = block.timestamp;
    }

    // receive commitee payment from member
    function payCommitee() external payable {
        require(commiteeEnabled, "Commitee Disabled...");
        require(!hasPaid(msg.sender), "You already paid");
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

    // Check if user has paid current commitee period
    function hasPaid(address _member) public view returns (bool) {
        return memberToLastpayment[_member] > lastCommiteeOpenDate;
    }

    // Check if user is in commitee
    function isUserInCommitee(address _member) public view returns (bool) {
        for (uint256 i = 0; i < commiteeMembers.length; i++) {
            if (commiteeMembers[i] == _member) {
                return true;
            }
        }
        return false;
    }

    // Check if everyone has paid
    function hasEveryonePaid() public view returns (bool) {
        for (uint256 i = 0; i < commiteeMembers.length; i++) {
            if (!hasPaid(commiteeMembers[i])) {
                return false;
            }
        }
        return true;
    }

    // Get not won members
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

    // Check if user has won
    function hasWon(address _member) public view returns (bool) {
        for (uint256 i = 0; i < commiteeWinners.length; i++) {
            if (commiteeWinners[i] == _member) {
                return true;
            }
        }
        return false;
    }

    // Get current balance of contract
    function balanceOf() public view returns (uint256) {
        return address(this).balance;
    }

    // set amount a commitee member will pay
    function setFixedDepositAmount(uint256 _amount)
        external
        onlyOwner
        canModifyCommitee
    {
        fixedDepositAmount = _amount;
    }

    // Set commitee opening reward
    function setCommiteeReward(uint256 _amount)
        external
        onlyOwner
        canModifyCommitee
    {
        commiteeReward = _amount;
    }

    // Set total allowed participants
    function setAllowedParticipants(uint256 _amount)
        external
        onlyOwner
        canModifyCommitee
    {
        totalAllowedParticipants = _amount;
    }

    function destroyContract() external onlyOwner {
        selfdestruct(payable(msg.sender));
    }

    function enableCommitee() external onlyOwner {
        commiteeEnabled = true;
    }

    function disableCommitee() public onlyOwner canModifyCommitee {
        commiteeEnabled = false;
    }

    modifier canModifyCommitee() {
        require(commiteeMembers.length == 0, "Can't modify commitee now.");
        _;
    }
}
