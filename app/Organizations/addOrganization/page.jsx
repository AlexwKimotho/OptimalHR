"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [missionStatement, setMissionStatement] = useState("");
  const [visionStatement, setVisionStatement] = useState("");
  const [awards, setAwards] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!companyName || !address) {
      alert("Company Name and Address are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/organizations", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ companyName, address, missionStatement, visionStatement, awards }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create an organization");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl space-y-6"
      >
        <h1 className="text-3xl font-bold text-gray-800 text-center">Add Organization</h1>
        
        <input
          onChange={(e) => setCompanyName(e.target.value)}
          value={companyName}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
          type="text"
          placeholder="Company Name"
        />

        <input
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
          type="text"
          placeholder="Company Address"
        />

        <input
          onChange={(e) => setMissionStatement(e.target.value)}
          value={missionStatement}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
          type="text"
          placeholder="Mission Statement"
        />

        <input
          onChange={(e) => setVisionStatement(e.target.value)}
          value={visionStatement}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
          type="text"
          placeholder="Vision Statement"
        />

        <input
          onChange={(e) => setAwards(e.target.value)}
          value={awards}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
          type="text"
          placeholder="Awards"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition duration-200"
        >
          Add Organization
        </button>
      </form>
    </div>
  );
}
