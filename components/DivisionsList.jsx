"use client";

import React from "react";
import Link from "next/link";
import RemoveBtn from "../app/CRUD/Divisions/RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import DataTable from "react-data-table-component";

const getDivisions = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/divisions", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch Divisions");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading Divisions: ", error);
    }
};

export default function DivisionsList() {
    const [divisions, setDivisions] = React.useState([]);

    React.useEffect(() => {
        const fetchDivisions = async () => {
            const data = await getDivisions();
            if (data?.divisions) {
                setDivisions(data.divisions);
            }
        };
        fetchDivisions();
    }, []);

    // Define columns for the data table
    const columns = [
        {
            name: "Division Name",
            selector: (row) => row.divisionName,
            sortable: true,
        },
        {
            name: "Division Head",
            selector: (row) => row.divisionHead,
            sortable: true,
        },
        {
            name: "Additional Info",
            selector: (row) => row.additionalInfo,
        },
        {
            name: "Created On",
            selector: (row) => row.createdOn,
            sortable: true,
        },
        {
            name: "Actions",
            cell: (row) => (
                <div className="flex gap-4">
                    <RemoveBtn id={row._id} />
                    <Link href={`/Organizations/editOrganizations/${row._id}`}>
                        <HiPencilAlt size={24} className="text-gray-500 hover:text-blue-600 transition duration-200" />
                    </Link>
                </div>
            ),
        },
    ];

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
                <Link
                    className="bg-blue-600 text-amber-50 py-2 px-6 rounded-md shadow-md hover:bg-blue-700 transition duration-200"
                    href={`/Divisions/addDivision`}
                >
                    Add Division
                </Link>
            </div>
            <DataTable
                title="Divisions"
                columns={columns}
                data={divisions}
                pagination
                highlightOnHover
                responsive
            />
        </div>
    );
}
