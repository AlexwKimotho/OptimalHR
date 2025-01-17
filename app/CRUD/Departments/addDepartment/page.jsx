"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [departmentName, setDepartmentName] = useState("");
  const [departmentHead, setDepartmentHead] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!departmentName || !departmentHead) {
      alert("Department Name and Department Head are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/departments", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ departmentName, departmentHead }),
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
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full space-y-6"
      >
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Add Department
        </h1>

        {/* Department Name Input */}
        <div className="flex flex-col">
          <label htmlFor="departmentName" className="text-gray-700 font-medium">
            Department Name
          </label>
          <input
            id="departmentName"
            onChange={(e) => setDepartmentName(e.target.value)}
            value={departmentName}
            className="mt-2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            placeholder="Enter department name"
          />
        </div>

        {/* Department Head Input */}
        <div className="flex flex-col">
          <label htmlFor="departmentHead" className="text-gray-700 font-medium">
            Department Head
          </label>
          <input
            id="departmentHead"
            onChange={(e) => setDepartmentHead(e.target.value)}
            value={departmentHead}
            className="mt-2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            placeholder="Enter department head"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-200"
        >
          Add Department
        </button>
      </form>
    </div>
  );
}
