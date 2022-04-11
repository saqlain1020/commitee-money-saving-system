// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

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

  // TODO: fix for local deployment
  // await verifyContract(contract.address, []);

  try {
    await hre.run("verify:verify", {
      address: contract.address,
      constructorArguments: []
    })

    console.log("Verifying done.");
  } catch (error) {
    console.log("Verifying error.");
  }

  // await greeter.setGreeting("Hola Mundo!");

}

const verifyContract = (contractAddress, constructorArguments) => new Promise(async (res) => {
  console.log("Verifying Contract");
  let int = setInterval(async () => {
    try {
      await hre.run("verify:verify", {
        address: contractAddress,
        constructorArguments,
      })
      clearInterval(int);
      console.log("Verify Success");
      res();
    } catch (error) {
      console.log("Verify Error, trying again...");
    }
  }, 8000)
})

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
