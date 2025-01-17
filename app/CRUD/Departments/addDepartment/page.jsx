"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [departmentName, setDepartmentName] = useState("")
    const [departmentHead, setDepartmentHead] = useState("");
    const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!departmentName|| !departmentHead) {
      alert("Department Name and Department Head are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/department", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ departmentName, departmentHead}),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a department");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
            onChange={(e) => setDepartmentName(e.target.value)}
            value={departmentName}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Department Name"
        />

        <input
            onChange={(e) => setDepartmentHead(e.target.value)}
            value={departmentHead}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Department Head"
        />
    

        <button
            type="submit"
            className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
        >
          Add Department
        </button>
      </form>
  );
}
