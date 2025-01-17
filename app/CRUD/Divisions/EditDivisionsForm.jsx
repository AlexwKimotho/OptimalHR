"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditDivisionsForm({ id,  companyName, address, missionStatement, visionStatement, awards }) {

  const [newCompanyName, setNewCompanyName] = useState(companyName);
  const [newAddress, setNewAddress] = useState(address);
  const [newMissionStatement, setNewMissionStatement] = useState(missionStatement);
  const [newVisionStatement, setNewVisionStatement] = useState(visionStatement);
  const [newAward, setNewAward] = useState(awards);

    const [newDivisionName, setNewDivisionName] = useState("")
    const [newDivisionHead, setNewDivisionHead] = useState("");
    const [newAdditionalInfo, setNewAdditionalInfo] = useState("");
    const [newCreatedOn, setNewCreatedOn] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/divisions/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newDivisionName, newDivisionHead, newAdditionalInfo, newCreatedOn }),
      });

      if (!res.ok) {
        throw new Error("Failed to update Divisions");
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
            onChange={(e) => setNewDivisionName(e.target.value)}
            value={newDivisionName}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Name"
        />

        <input
            onChange={(e) => setNewDivisionHead(e.target.value)}
            value={newDivisionHead}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Address"
        />
        <input
            onChange={(e) => setNewAdditionalInfo(e.target.value)}
            value={newAdditionalInfo}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Mission Statemen"
        />
        <input
            onChange={(e) => setNewCreatedOn(e.target.value)}
            value={newCreatedOn}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Vision Statement"
        />

        <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
          Update Division
        </button>
      </form>
  );
}
