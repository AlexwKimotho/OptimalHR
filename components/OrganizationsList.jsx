"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { HiPencilAlt } from "react-icons/hi";

// Dynamically import DataTable with no SSR to avoid hydration issues
const DataTable = dynamic(() => import("react-data-table-component"), {
  ssr: false
});

// Fixed import path for RemoveBtn
const RemoveBtn = dynamic(() => import("../app/CRUD/Organizations/RemoveBtn"), {
  ssr: false
});

const truncateText = (text, wordLimit = 10) => {
  if (!text) return "";
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
};

const ActionButtons = ({ id }) => (
  <div className="flex items-center gap-4">
    <RemoveBtn id={id} />
    <Link href={`/CRUD/Organizations/editOrganizations/${id}`}>
      <HiPencilAlt
        size={24}
        className="text-blue-500 hover:text-blue-700 cursor-pointer"
      />
    </Link>
  </div>
);

export default function OrganizationsList() {
  const [organizations, setOrganizations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getOrganizations = async () => {
    try {
      const res = await fetch("/api/organizations", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch organizations");
      }

      const data = await res.json();
      setOrganizations(data.organizations || []);
    } catch (error) {
      console.error("Error loading organizations: ", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getOrganizations();
  }, []);

  const columns = [
    {
      name: "Company Name",
      selector: (row) => truncateText(row.companyName),
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => truncateText(row.address),
      sortable: true,
    },
    {
      name: "Mission",
      selector: (row) => truncateText(row.missionStatement),
      sortable: true,
      wrap: true,
    },
    {
      name: "Vision",
      selector: (row) => truncateText(row.visionStatement),
      sortable: true,
      wrap: true,
    },
    {
      name: "Awards",
      selector: (row) => truncateText(row.awards),
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => <ActionButtons id={row._id} />,
      button: true,
    },
  ];

  if (error) {
    return (
      <div className="bg-red-50 text-red-500 p-4 rounded-lg">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-4">
        <Link
          href="/CRUD/Organizations/addOrganization"
          className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-200"
        >
          Add Account
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-48">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <DataTable
          title="Business Accounts"
          columns={columns}
          data={organizations}
          pagination
          responsive
          highlightOnHover
          persistTableHead
          defaultSortFieldId={1}
        />
      )}
    </div>
  );
}