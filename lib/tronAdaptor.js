import getTron from "./getTron.js";

const contractAddress = "TJDWZArrnGysgJ9143H1q7D3fbRN4bjZRp";

let tron, contract, address;

const initializeTron = async () => {
  try {
    const _tron = await getTron();

    tron = _tron;
    contract = await getContract();
    address = tron.defaultAddress.base58;
    return { _tron };
  } catch (error) {
    console.log(
      `Failed to load tron, accounts, or contract. Check console for details.`
    );
    console.log(error);
  }
};

const getContract = async () => {
  const instance = await tron.contract().at(contractAddress);
  return instance;
};

const getName = async () => {
  console.log("getName");
  try {
    await contract
      .name()
      .call()
      .then((res) => {
        console.log(res);
      });
    console.log("Transaction Successfully");
  } catch (error) {
    console.log(error);
  }
};

export { initializeTron, getName };
