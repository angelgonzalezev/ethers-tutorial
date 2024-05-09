const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider("https://go.getblock.io/f23b2c2d9c7e48ef8f54ef9937b67e8f");

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

const contractAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";

const contract = new ethers.Contract(contractAddress, abi, provider);

const main = async () => {
  const blockNumber = await provider.getBlockNumber();
  const events = await contract.queryFilter("Transfer", blockNumber, blockNumber);
  console.log("🚀 ~ main ~ events:", events);
};

main();
