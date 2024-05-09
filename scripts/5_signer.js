const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider("https://go.getblock.io/f23b2c2d9c7e48ef8f54ef9937b67e8f");
const sepoliaProvider = new ethers.providers.JsonRpcProvider("https://go.getblock.io/74d52d7334a04fca8d70bd305d497157");

// Create Wallet from Private Key
const privateKey = "ffd28363420a429a713dbdb2b26608825afeb8b4a52fb43b76356a7da39ba839";
const walletFromPrivateKey = new ethers.Wallet(privateKey, provider);

// Create Random Wallet
const randomWallet = new ethers.Wallet.createRandom();

// Create Wallet from Mnemonic
const randomMnemonic = ethers.utils.entropyToMnemonic(ethers.utils.randomBytes(32));
const walletFromMnemonic = new ethers.Wallet.fromMnemonic(randomMnemonic);

const main = async () => {
  const tx = {
    to: "0xCaefB42461fA2eCd61B9187CDF5bf285383a74f9",
    value: ethers.utils.parseEther("0.015"),
  };
  const txSigned = await walletFromPrivateKey.signTransaction(tx);
  console.log("🚀 ~ main ~ txSigned:", txSigned);
};

main();
