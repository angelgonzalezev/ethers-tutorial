const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider("https://go.getblock.io/74d52d7334a04fca8d70bd305d497157");

const main = async () => {
  const network = await provider.getNetwork();
  const gas = await provider.getGasPrice();
  const gasFormatted = ethers.utils.formatEther(gas);
  const feeData = await provider.getFeeData();
  const ready = await provider.ready;
  console.log("🚀 ~ main ~ ready:", ready);
};

main();
