const hre = require("hardhat");

let isSuccess = false;

async function main2() {
  try {
    /**
     * @dev make sure the first argument has the same name as your contract in the Hello_swtr.sol file
     * @dev the second argument must be the message we want to set in the contract during the deployment process
     */
    const contract = await hre.ethers.deployContract("Swisstronik", [
      "Hello Swisstronik!!",
    ]);
    await contract.waitForDeployment();

    console.log(`Swisstronik contract deployed to ${contract.target}`);
    isSuccess = true;
    return true;
  } catch (e) {
    console.log(e.message, "error");

    return false;
  }
}
async function main() {
  try {
    /**
     * @dev make sure the first argument has the same name as your contract in the Hello_swtr.sol file
     * @dev the second argument must be the message we want to set in the contract during the deployment process
     */

    for (let i = 0; i <= 100; i++) {
      let isDone = await main2();
      console.log(i, isDone);
      if (isDone) break;
    }

    return true;
  } catch (e) {
    console.log(e, "error");

    return false;
  }
}

//DEFAULT BY HARDHAT:
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main();
