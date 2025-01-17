"use client";

import React from "react";
import Link from "next/link";
import RemoveBtn from "../app/CRUD/Divisions/RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import DataTable from "react-data-table-component";
import Papa from "papaparse";

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

const exportToCSV = (data) => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("download", "divisions.csv");
    a.click();
};

const handleFileUpload = (event, setDivisions) => {
    const file = event.target.files[0];
    if (file) {
        Papa.parse(file, {
            complete: (result) => {
                const importedDivisions = result.data;
                setDivisions((prevDivisions) => [
                    ...prevDivisions,
                    ...importedDivisions,
                ]);
            },
            header: true,
        });
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
            <div className="mb-4 flex gap-4">
                <Link
                    className="bg-blue-600 text-amber-50 py-2 px-6 rounded-md shadow-md hover:bg-blue-700 transition duration-200"
                    href={`/CRUD/Divisions/addDivision`}
                >
                    Add Division
                </Link>
                
                {/* Bulk Export Button */}
                <button
                    className="bg-green-600 text-amber-50 py-2 px-6 rounded-md shadow-md hover:bg-green-700 transition duration-200"
                    onClick={() => exportToCSV(divisions)}
                >
                    Export CSV
                </button>

                {/* Bulk Import Input */}
                <input
                    type="file"
                    accept=".csv"
                    className="py-2 px-6 border border-gray-300 rounded-md"
                    onChange={(e) => handleFileUpload(e, setDivisions)}
                />
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
