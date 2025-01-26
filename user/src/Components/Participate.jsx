import React, { useState } from "react";
import { ethers } from "ethers";

const Participate = ({ contract }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [successRate, setSuccessRate] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");
  const [winner, setWinner] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!contract) {
      setStatus("Contract not loaded.");
      return;
    }

    try {
      const tx = await contract.partipate(
        name,
        ethers.utils.parseUnits(amount || "0", "ether"),
        parseInt(successRate || "0"),
        address
      );
      await tx.wait();
      setStatus("Participation successful!");
    } catch (error) {
      console.error(error);
      setStatus("Error: " + error.message);
    }
  };

  const handleWinner = async () => {
    if (!contract) {
      setStatus("Contract not loaded.");
      return;
    }

    try {
      const winnerData = await contract.winner();
      setWinner(winnerData); // Store the winner's data
      setStatus("Winner fetched successfully!");
    } catch (error) {
      console.error(error);
      setStatus("Error: " + error.message);
    }
  };

  return (
    <div>
      <h2>Participate</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount in Ether"
          required
        />
        <input
          type="text"
          value={successRate}
          onChange={(e) => setSuccessRate(e.target.value)}
          placeholder="Success Rate"
          required
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
          required
        />
        <button type="submit">Participate</button>
      </form>
      <button onClick={handleWinner}>Get Winner</button>
      {winner && (
        <div>
          <h3>Winner Details:</h3>
          <p>Name: {winner.name}</p>
          <p>Budget: {ethers.utils.formatEther(winner.budget.toString())} ETH</p>
          <p>Success Rate: {winner.success_rate}</p>
        </div>
      )}
      {status && <p>{status}</p>}
    </div>
  );
};

export default Participate;