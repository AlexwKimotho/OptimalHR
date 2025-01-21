"use client";

import Link from "next/link";
import DataTable from "react-data-table-component";
import RemoveBtn from "../app/CRUD/Organizations/RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const truncateText = (text, wordLimit = 10) => {
  const words = text.split(' ');
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(' ') + '...';
};

const getOrganizations = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/organizations", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch organizations");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading organizations: ", error);
  }
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

export default async function OrganizationsList() {
  const { organizations } = (await getOrganizations()) || { organizations: [] };

  const columns = [
    {
      name: 'Company Name',
      selector: row => truncateText(row.companyName),
      sortable: true,
    },
    {
      name: 'Address',
      selector: row => truncateText(row.address),
      sortable: true,
    },
    {
      name: 'Mission',
      selector: row => truncateText(row.missionStatement),
      sortable: true,
      wrap: true,
    },
    {
      name: 'Vision',
      selector: row => truncateText(row.visionStatement),
      sortable: true,
      wrap: true,
    },
    {
      name: 'Awards',
      selector: row => truncateText(row.awards),
      sortable: true,
    },
    {
      name: 'Actions',
      cell: row => <ActionButtons id={row._id} />,
      button: true,
    },
  ];



  return (
    <div className="bg-white rounded-lg shadow-md p-6"> 
        <div className="mb-4">
          <Link
            href={`/CRUD/Organizations/addOrganization`}
            className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-200"
          >
            Add Account
          </Link>
        </div>
        
        <DataTable
          title="Business Accounts"
          columns={columns}
          data={organizations}
          pagination
          responsive
          highlightOnHover
        />
      </div>
   
  );
}