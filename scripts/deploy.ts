// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import hre from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const ContractFactory = await hre.ethers.getContractFactory("CommiteeMoney");
  const contract = await ContractFactory.deploy();

  await contract.deployed();

  console.log("Contract deployed to:", contract.address);

  await contract.deployTransaction.wait();

  hre.network.name === "hardhat" ? console.log("Skipping verify") : await verifyContract(contract.address, []);
  // // ;
  // try {
  //   await hre.run("verify:verify", {
  //     address: contract.address,
  //     constructorArguments: [],
  //   });

  //   console.log("Verifying done.");
  // } catch (error: any) {
  //   // console.log(error)
  //   console.log(Object.entries(error));
  //   console.log("Verifying error.");
  // }
}

const verifyContract = (contractAddress: string, constructorArguments: string[], intervalSec: number = 10) =>
  new Promise<void>(async (res, rej) => {
    (async function verify() {
      try {
        console.log("Verifying Contract");
        await hre.run("verify:verify", {
          address: contractAddress,
          constructorArguments,
        });
        console.log("Verify Success");
        res();
      } catch (error) {
        console.log("Verify Error");
        let timer = intervalSec;
        let int = setInterval(() => {
          console.log("Trying again in " + timer);
          timer--;
          if (timer === 0) {
            clearInterval(int);
            verify();
          }
        }, 1000);
      }
    })();
    setTimeout(rej, 1000 * 60);
  });

// async function getGasEstimate(contractInstance, methodName, ...args) {
//   let gasPriceBigNumberWei = await hre.ethers.provider.getGasPrice();
//   let gasPriceGwei = hre.ethers.utils.formatUnits(gasPriceBigNumberWei, 'gwei');

//   let gasUnitsEstimate = await contractInstance.estimateGas[methodName](...args);
//   let estimate = Number(gasPriceGwei) * Number(gasUnitsEstimate)
//   // gwei to eth
//   estimate = estimate / 1000000000;
//   console.log("Estimated gas eth:", estimate);
// }

// async function verify(){
//   return new Promise(async (resolve, reject) => {
//     await verifying
//   })
// }

// async function verifying(){
//   try {
//     await hre.run("verify:verify", {
//       address: greeter.address,
//       constructorArguments: ["Hello World!"]
//     })
//   } catch (error) {
//     await verifying()
//   }
// }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// main()