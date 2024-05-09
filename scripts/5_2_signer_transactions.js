const { ethers } = require("ethers");

const sepoliaProvider = new ethers.providers.JsonRpcProvider("https://go.getblock.io/74d52d7334a04fca8d70bd305d497157");

// Create Wallet from Private Key
const privateKey = "ffd28363420a429a713dbdb2b26608825afeb8b4a52fb43b76356a7da39ba839";
const walletFromPrivateKey = new ethers.Wallet(privateKey, sepoliaProvider);

const account2 = "0xCaefB42461fA2eCd61B9187CDF5bf285383a74f9";

const txValues = {
  to: account2,
  value: ethers.utils.parseEther("0.02"),
};

const main = async () => {
  const balanceAccount1 = await sepoliaProvider.getBalance(walletFromPrivateKey.address);
  console.log("🚀 ~ main ~ balanceAccount1:", ethers.utils.formatEther(balanceAccount1));
  const balanceAccount2 = await sepoliaProvider.getBalance(account2);
  console.log("🚀 ~ main ~ balanceAccount2:", ethers.utils.formatEther(balanceAccount2));

  const tx = await walletFromPrivateKey.sendTransaction(txValues);
  await tx.wait();
  console.log("🚀 ~ main ~ tx:", tx);

  const balanceAccount1After = await sepoliaProvider.getBalance(walletFromPrivateKey.address);
  console.log("🚀 ~ main ~ balanceAccount1After:", ethers.utils.formatEther(balanceAccount1After));
  const balanceAccount2After = await sepoliaProvider.getBalance(account2);
  console.log("🚀 ~ main ~ balanceAccount2After:", ethers.utils.formatEther(balanceAccount2After));
};

main();
