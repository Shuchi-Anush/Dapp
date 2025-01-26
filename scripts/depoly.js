const hre = require("hardhat");

async function main() {
  // Get the contract factory for "Twitter"
  const Twitter = await hre.ethers.getContractFactory("Contract");

  // Deploy the contract
  const twitter = await Twitter.deploy();

  // Wait for the contract to be deployed
  await twitter.deployed();

  // Interact with the contract (call the `sayhi` function)


  // Log the contract's address to the console
  console.log("Twitter contract deployed to:", twitter.address);
}

// Handle errors and run the deployment script
main()
  .then(() => process.exit(0)) // Exit cleanly
  .catch((error) => {
    console.error(error);
    process.exit(1); // Exit with error code 1 if something goes wrong
  });
