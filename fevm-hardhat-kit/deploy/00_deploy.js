require("hardhat-deploy")
require("hardhat-deploy-ethers")

const { networkConfig } = require("../helper-hardhat-config")

const private_key = network.config.accounts[0]
const wallet = new ethers.Wallet(private_key, ethers.provider)

module.exports = async ({ deployments }) => {
    console.log("Wallet Ethereum Address:", wallet.address)
    const chainId = network.config.chainId
    const tokensToBeMinted = networkConfig[chainId]["tokensToBeMinted"]

    //deploy BitcoinBTCF
    const BitcoinBTCF = await ethers.getContractFactory("BitcoinBTCF", wallet)
    console.log("Deploying BitcoinBTCF...")
    const bitcoinBTCF = await BitcoinBTCF.deploy(tokensToBeMinted)
    await bitcoinBTCF.deployed()
    console.log("BitcoinBTCF deployed to:", bitcoinBTCF.address)

    //deploy BNB
    const BNB = await ethers.getContractFactory("BNB", wallet)
    console.log("Deploying BNB...")
    const bNB = await BNB.deploy(tokensToBeMinted)
    await bNB.deployed()
    console.log("BNB deployed to:", bNB.address)

    //deploy DAIF
    const DAIF = await ethers.getContractFactory("DAIF", wallet)
    console.log("Deploying DAIF...")
    const dAIF = await DAIF.deploy()
    await dAIF.deployed()
    console.log("DAIF deployed to:", dAIF.address)

    //deploy EthereumETHF
    const EthereumETHF = await ethers.getContractFactory("EthereumETHF", wallet)
    console.log("Deploying EthereumETHF...")
    const ethereumETHF = await EthereumETHF.deploy(tokensToBeMinted)
    await ethereumETHF.deployed()
    console.log("EthereumETHF deployed to:", ethereumETHF.address)

    //deploy FilecoinFIL
    const FilecoinFIL = await ethers.getContractFactory("FilecoinFIL", wallet)
    console.log("Deploying FilecoinFIL...")
    const filecoinFIL = await FilecoinFIL.deploy(tokensToBeMinted)
    await filecoinFIL.deployed()
    console.log("FilecoinFIL deployed to:", filecoinFIL.address)

    //deploy LinkF
    const LinkF = await ethers.getContractFactory("LinkF", wallet)
    console.log("Deploying LinkF...")
    const linkF = await LinkF.deploy(tokensToBeMinted)
    await linkF.deployed()
    console.log("LinkF deployed to:", linkF.address)

    //deploy TenderSwap
    const TenderSwap = await ethers.getContractFactory("TenderSwap", wallet)
    console.log("Deploying TenderSwap...")
    const tenderSwap = await TenderSwap.deploy(tokensToBeMinted)
    await tenderSwap.deployed()
    console.log("TenderSwap deployed to:", tenderSwap.address)

    //deploy TetherUSDT
    const TetherUSDT = await ethers.getContractFactory("TetherUSDT", wallet)
    console.log("Deploying TetherUSDT...")
    const tetherUSDT = await TetherUSDT.deploy(tokensToBeMinted)
    await tetherUSDT.deployed()
    console.log("TetherUSDT deployed to:", tetherUSDT.address)

    //deploy UniswapUNI
    const UniswapUNI = await ethers.getContractFactory("UniswapUNI", wallet)
    console.log("Deploying UniswapUNI...")
    const uniswapUNI = await UniswapUNI.deploy(tokensToBeMinted)
    await uniswapUNI.deployed()
    console.log("UniswapUNI deployed to:", uniswapUNI.address)

    //deploy USDC
    const USDC = await ethers.getContractFactory("USDC", wallet)
    console.log("Deploying USDC...")
    const uSDC = await USDC.deploy(tokensToBeMinted)
    await uSDC.deployed()
    console.log("USDC deployed to:", uSDC.address)
}
