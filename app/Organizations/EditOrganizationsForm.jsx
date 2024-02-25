"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditOrganizationsForm({ id,  companyName, address, missionStatement, visionStatement, awards }) {

  const [newCompanyName, setNewCompanyName] = useState(companyName);
  const [newAddress, setNewAddress] = useState(address);
  const [newMissionStatement, setNewMissionStatement] = useState(missionStatement);
  const [newVisionStatement, setNewVisionStatement] = useState(visionStatement);
  const [newAward, setNewAward] = useState(awards);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/organisations/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newCompanyName, newAddress, newMissionStatement, newVisionStatement, newAward }),
      });

      if (!res.ok) {
        throw new Error("Failed to update Organization");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
            onChange={(e) => setNewCompanyName(e.target.value)}
            value={newCompanyName}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Name"
        />

        <input
            onChange={(e) => setNewAddress(e.target.value)}
            value={newAddress}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Address"
        />
        <input
            onChange={(e) => setNewMissionStatement(e.target.value)}
            value={newMissionStatement}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Mission Statemen"
        />
        <input
            onChange={(e) => setNewVisionStatement(e.target.value)}
            value={newVisionStatement}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Vision Statement"
        />
        <input
            onChange={(e) => setNewAward(e.target.value)}
            value={newAward}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Awards"
        />
        <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
          Update Topic
        </button>
      </form>
  );
}
