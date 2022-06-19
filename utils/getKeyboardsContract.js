import { ethers } from "ethers";
import abi from "../artifacts/contracts/Keyboards.sol/Keyboards.json";

const contractAddress = "0x8D92CA2092e47D43e64A32d5985fFc01B5Cf35D6";
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
