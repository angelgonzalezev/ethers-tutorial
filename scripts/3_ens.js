const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider("https://go.getblock.io/f23b2c2d9c7e48ef8f54ef9937b67e8f");

const main = async () => {
  const avatar = await provider.getAvatar("ricmoo.eth");
  console.log("🚀 ~ main ~ avatar:", avatar);
  const resolver = await provider.getResolver("ricmoo.eth");
  console.log("🚀 ~ main ~ resolver:", resolver);
  const ens = await provider.lookupAddress("0x5555763613a12D8F3e73be831DFf8598089d3dCa");
  console.log("🚀 ~ main ~ ens:", ens);
  const address = await provider.resolveName("ricmoo.eth");
  console.log("🚀 ~ main ~ address:", address);
};

main();
