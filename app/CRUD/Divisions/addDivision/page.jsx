"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [divisionName, setDivisionName] = useState("")
    const [divisionHead, setDivisionHead] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState("");
    const [createdOn, setCreatedOn] = useState("");
    const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!divisionName|| !divisionHead) {
      alert("Division Name and Division Head are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/divisions", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ divisionName, divisionHead, additionalInfo, createdOn }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a division");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
            onChange={(e) => setDivisionName(e.target.value)}
            value={divisionName}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Division Name"
        />

        <input
            onChange={(e) => setDivisionHead(e.target.value)}
            value={divisionHead}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Division Head"
        />
        <input
            onChange={(e) => setAdditionalInfo(e.target.value)}
            value={additionalInfo}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Additional info"
        />
        <input
            onChange={(e) => setCreatedOn(e.target.value)}
            value={createdOn}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Created On"
        />

        <button
            type="submit"
            className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
        >
          Add Division
        </button>
      </form>
  );
}
