const { ethers } = require("ethers");

const sepoliaProvider = new ethers.providers.JsonRpcProvider("https://go.getblock.io/74d52d7334a04fca8d70bd305d497157");

const contractAddress = "0x779877A7B0D9E8603169DdbD7836e478b4624789";

const abi = [
  // Read Contract
  "function name() public view returns (string)",
  "function symbol() public view returns (string)",
  "function totalSupply() public view returns (uint256)",
  "function balanceOf(address _owner) public view returns (uint256 balance)",

  // Write Contract
  "function transfer(address _to, uint256 _value) public returns (bool success)",

  // Event
  "event Transfer(address indexed _from, address indexed _to, uint256 _value)",
];

const contract = new ethers.Contract(contractAddress, abi, sepoliaProvider);

// Wallet Account 1
const privateKey = "ffd28363420a429a713dbdb2b26608825afeb8b4a52fb43b76356a7da39ba839";
const wallet = new ethers.Wallet(privateKey, sepoliaProvider);
// Account 2
const account2 = "0xCaefB42461fA2eCd61B9187CDF5bf285383a74f9";

const main = async () => {
  const name = await contract.name();
  console.log("🚀 ~ main ~ name:", name);
  const symbol = await contract.symbol();
  console.log("🚀 ~ main ~ symbol:", symbol);
  const totalSupply = await contract.totalSupply();
  const totalSupplyWei = ethers.utils.formatUnits(totalSupply, "wei");
  console.log("🚀 ~ main ~ totalSupplyWei:", totalSupplyWei);
  const balanceAccout = await contract.balanceOf(wallet.address);
  const balanceAccountEther = ethers.utils.formatEther(balanceAccout);
  console.log("🚀 ~ main ~ balanceAccountEther:", balanceAccountEther);
  const balanceAccount2Ether = await contract.balanceOf(account2);
  console.log("🚀 ~ main ~ balanceAccount2Ether:", ethers.utils.formatEther(balanceAccount2Ether));

  const contractWithWallet = contract.connect(wallet);

  const tx = await contractWithWallet.transfer(account2, balanceAccout);
  await tx.wait();
  console.log("🚀 ~ main ~ tx:", tx);
  const balanceAccoutAfter = await contract.balanceOf(wallet.address);
  +console.log("🚀 ~ main ~ balanceAccoutAfter:", ethers.utils.formatEther(balanceAccoutAfter));
  const balanceAccount2EtherAfter = await contract.balanceOf(account2);
  console.log("🚀 ~ main ~ balanceAccount2Ether:", ethers.utils.formatEther(balanceAccount2EtherAfter));
};
main();
