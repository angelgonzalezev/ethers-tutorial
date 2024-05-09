const { ethers } = require("ethers");

const blockNumber = 19748211;

const endpoint = "https://go.getblock.io/f23b2c2d9c7e48ef8f54ef9937b67e8f";
const provider = new ethers.providers.JsonRpcProvider(endpoint);

const main = async () => {
  const { chainId } = await provider.getNetwork();
  const {
    hash: blockHash,
    timestamp,
    gasUsed,
    miner,
    transactions,
  } = await provider.getBlockWithTransactions(blockNumber);
  const _transaction = transactions.slice(transactions.length - 3).map((tx) => {
    const { hash, from, to, value } = tx;
    return {
      hash,
      from,
      to,
      value: ethers.utils.formatEther(value),
    };
  });

  const blockObj = {
    blockHash,
    chainId,
    blockNumber,
    timestamp,
    gasUsed: ethers.utils.formatUnits(gasUsed, "wei"),
    miner,
    transactions: _transaction,
  };
  console.log("Block Obj", blockObj);
};

main();
