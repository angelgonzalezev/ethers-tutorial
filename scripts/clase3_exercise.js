const { ethers } = require("ethers");

// Sepolia Provider
const sepoliaProvider = new ethers.providers.JsonRpcProvider("https://go.getblock.io/f796d86f45b54a9aa9892cb9ba79acf8");

// Contract LINK Address
const contractAddress = "0x779877A7B0D9E8603169DdbD7836e478b4624789";

const abi = [
  "function name() public view returns (string)",
  "function symbol() public view returns (string)",
  "function balanceOf(address _owner) public view returns (uint256 balance)",
  "function transfer(address _to, uint256 _value) public returns (bool success)",
];

const contract = new ethers.Contract(contractAddress, abi, sepoliaProvider);

// Account 1
const privateKey = "ffd28363420a429a713dbdb2b26608825afeb8b4a52fb43b76356a7da39ba839";
const wallet = new ethers.Wallet(privateKey, sepoliaProvider);

// Account 2
const address = "0xCaefB42461fA2eCd61B9187CDF5bf285383a74f9";

const main = async () => {
  const contractWithWallet = contract.connect(wallet);

  const account1Balance = await contract.balanceOf(wallet.address);
  console.log("🚀 ~ main ~ account1Balance:", ethers.utils.formatEther(account1Balance));
  const account2Balance = await contract.balanceOf(address);
  console.log("🚀 ~ main ~ account2Balance:", ethers.utils.formatEther(account2Balance));

  const tx = await contractWithWallet.transfer(address, account1Balance);
  await tx.wait();

  const account1BalanceAfter = await contract.balanceOf(wallet.address);
  console.log("🚀 ~ main ~ account1Balance:", ethers.utils.formatEther(account1BalanceAfter));
  const account2BalanceAfter = await contract.balanceOf(address);
  console.log("🚀 ~ main ~ account2Balance:", ethers.utils.formatEther(account2BalanceAfter));

  const receipt = await sepoliaProvider.getTransactionReceipt(tx.hash);

  const events = receipt.logs;
  console.log("🚀 ~ main ~ events:", events);
};
main();
