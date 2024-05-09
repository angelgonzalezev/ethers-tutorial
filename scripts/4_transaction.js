const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider("https://go.getblock.io/f23b2c2d9c7e48ef8f54ef9937b67e8f");

const acc2 = "0xCaefB42461fA2eCd61B9187CDF5bf285383a74f9";
const main = async () => {
  const transaction = {
    to: acc2,
    value: ethers.utils.parseEther("0.0015"),
  };
  const estimatedGas = await provider.estimateGas(transaction);
  console.log("🚀 ~ main ~ estimatedGas:", estimatedGas);
  const estimatedGasGwei = ethers.utils.formatUnits(estimatedGas, "gwei");
  console.log("🚀 ~ main ~ estimatedGasGwei:", estimatedGasGwei);

  const tx = await provider.getTransaction("0x1d2cd05965840e5dfda068220cb174f854696141a3d1deac828f4e29aae6f690");
  console.log("🚀 ~ main ~ tx:", tx);
  console.log("Tx value", ethers.utils.formatEther(tx.value));
};

main();
