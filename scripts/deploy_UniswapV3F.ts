import { ethers } from "hardhat";
import { ContractFactory } from "ethers";

async function main() {
    var deployer:any;
    [deployer] = await ethers.getSigners();
    console.log("Deploying from address :", deployer.address);
    const UniswapV3Factory: ContractFactory = await ethers.getContractFactory("UniswapV3Factory");
    console.log("Deploying UniswapV3Factory...");
    const uniswapV3Factory = await UniswapV3Factory.deploy();
    await uniswapV3Factory.deployed();
    console.log(`UniswapV3Factory deployed at: ${uniswapV3Factory.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});