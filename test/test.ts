import { expect } from "chai";
import { ethers } from "hardhat";
import JsonData from "../artifacts/contracts/CommiteeMoney.sol/CommiteeMoney.json"

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const ContractFactory = await ethers.getContractFactory("CommiteeMoney");
    const contract = await ContractFactory.deploy();
    await contract.deployed();
    const [owner, add1, add2] = await ethers.getSigners();
    // console.log("Fixed amount", ethers.utils.formatEther(await contract.fixedDepositAmount()));
    // await contract.setFixedDepositAmount(ethers.utils.parseEther("0.01"));
    // console.log("Fixed amount after", ethers.utils.formatEther(await contract.fixedDepositAmount()));
    // await contract.startCommitee();
    console.log("Acc balance", ethers.utils.formatEther(await owner.getBalance()));
    await contract.receivePayment({ value: ethers.utils.parseEther("1") });
    await contract.connect(add1).receivePayment({ value: ethers.utils.parseEther("1") });
    console.log("Acc balance after", ethers.utils.formatEther(await owner.getBalance()));
    // console.log("Contract balance", ethers.utils.formatEther(await contract.balanceOf()));
    // console.log("Not won members", await contract.hasEveryonePaid());
    // console.log("Not won members", await contract.getNotWonMembers());
    const receipt = await (await contract.openCommitee()).wait()
    console.log("Receipt Logs", receipt.logs);

    const iface = new ethers.utils.Interface(JsonData.abi);
    const [winner,amount,date] = iface.parseLog(receipt.logs[0]).args
    console.log("Parsed", winner,ethers.utils.formatEther(amount),date.toString());
    
    // expect(await greeter.greet()).to.equal("");

    // const setGreetingTx = await greeter.setGreeting("");

    // // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await greeter.greet()).to.equal("");

    // let gasPriceBigNumberWei = await ethers.provider.getGasPrice();
    //   let gasPriceGwei = hre.ethers.utils.formatUnits(gasPriceBigNumberWei, 'gwei');
    
    //   let gasUnitsEstimate = await contract.estimateGas["openCommitee"]();
    //   let estimate = Number(gasPriceGwei) * Number(gasUnitsEstimate)
    //   // gwei to eth
    //   estimate = estimate / 1000000000;
    //   console.log("Estimated gas eth:", estimate);

  });
});
