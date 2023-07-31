import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

const contractAddress = "0x..."; 
const contractABI = [...]; 

const MusicMarketComponent = () => {
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const connectToProvider = async () => {
      if (window.ethereum) {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
      } else {
        console.log("Please install MetaMask or use a compatible Ethereum browser.");
      }
    };

    connectToProvider();
  }, []);

  useEffect(() => {
    const getContractInstance = async () => {
      if (provider) {
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        setContract(contract);
      }
    };

    getContractInstance();
  }, [provider]);

  const addMusic = async () => {
    try {
      if (contract) {
        const transaction = await contract.addMusic("My Music", 100, "fileCID", 10);
        await transaction.wait();
        console.log("Music added successfully!");
      } else {
        console.log("Contract not initialized yet. Please check your Ethereum connection.");
      }
    } catch (error) {
      console.error("Error adding music:", error);
    }
  };

  // More functions for interacting with the contract can be added here

  return (
    <div>
      <h1>Music Market</h1>
      <button onClick={addMusic}>Add Music</button>
      
    </div>
  );
};

export default MusicMarketComponent;
