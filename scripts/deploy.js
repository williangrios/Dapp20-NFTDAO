const hre = require("hardhat");

async function main() {
  const Gen = await hre.ethers.getContractFactory("Genesis");
  const gd = await Gen.deploy();
  await gd.deployed();
  console.log(
    `Deployed to ${gd.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
