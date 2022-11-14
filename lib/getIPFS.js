export default (cid) => {
  return `https://superfun.infura-ipfs.io/ipfs/${cid.split("//")[1]}`;
};
