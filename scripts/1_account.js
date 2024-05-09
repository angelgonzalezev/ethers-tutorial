const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider("https://go.getblock.io/f23b2c2d9c7e48ef8f54ef9937b67e8f");

const main = async () => {
  const rowBalance = await provider.getBalance("ricmoo.eth");
  console.log("🚀 ~ main ~ rowBalance:", rowBalance);
  const balance = ethers.utils.formatEther(rowBalance);
  console.log("🚀 ~ main ~ balance:", balance);
  const usdcCode = await provider.getCode("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48");
  console.log("🚀 ~ main ~ usdcCode:", usdcCode);
  const nonce = await provider.getTransactionCount("ricmoo.eth");
  console.log("🚀 ~ main ~ nonce:", nonce);
};

main();
