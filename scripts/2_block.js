const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider("https://go.getblock.io/f23b2c2d9c7e48ef8f54ef9937b67e8f");

const main = async () => {
  const blockNumber = await provider.getBlockNumber();
  const block = await provider.getBlockWithTransactions(19760153);
  console.log("🚀 ~ main ~ block:", block);
};

main();
