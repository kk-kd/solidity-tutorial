import { useState } from "react";
import { ethers } from "ethers";
import SecondaryButton from "./secondary-button";
import abi from "../artifacts/contracts/Keyboards.sol/Keyboards.json";

export default function TipButton({ ethereum, index }) {
  const contractAddress = "0x3D106aF7D0e04CAfE8CA63fDd9112CE34FD184a4";
  const contractABI = abi.abi;

  const [mining, setMining] = useState(false);

  const submitTip = async (e) => {
    if (!ethereum) {
      console.log("Ethereum object is required to submit a tip!");
      return;
    }

    setMining(true);
    try {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const keyboardsContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      const tipTxn = await keyboardsContract.tip(index, {
        value: ethers.utils.parseEther("0.01"),
      });
      console.log("Tip transaction started...", tipTxn.hash);

      await tipTxn.wait();
      console.log("Sent tip!", tipTxn.hash);
    } finally {
      setMining(false);
    }
  };

  return (
    <SecondaryButton onClick={submitTip} disabled={mining}>
      {mining ? "Tipping..." : "Tip 0.01 eth!"}
    </SecondaryButton>
  );
}
