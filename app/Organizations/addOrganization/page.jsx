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
        throw new Error("Failed to create a Organization");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
            onChange={(e) => setCompanyName(e.target.value)}
            value={companyName}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Company Name"
        />

        <input
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Company Address"
        />
        <input
            onChange={(e) => setMissionStatement(e.target.value)}
            value={missionStatement}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Mission Statement"
        />
        <input
            onChange={(e) => setVisionStatement(e.target.value)}
            value={visionStatement}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Vision Statement"
        />
        <input
            onChange={(e) => setAwards(e.target.value)}
            value={awards}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Awards"
        />
        <button
            type="submit"
            className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
        >
          Add Organization
        </button>
      </form>
  );
}
