"use client";

import React from "react";
import Link from "next/link";
import RemoveBtn from "../app/CRUD/Departments/RemoveButton";
import { HiPencilAlt } from "react-icons/hi";
import DataTable from "react-data-table-component";

const getDepartments = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/departments", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch Departments");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading Departments: ", error);
    }
};

export default function DepartmentsList() {
    const [departments, setDepartments] = React.useState([]);

    React.useEffect(() => {
        const fetchDepartments = async () => {
            const data = await getDepartments();
            if (data?.departments) {
                setDepartments(data.departments);
            }
        };
        fetchDepartments();
    }, []);

    const columns = [
        {
            name: "Department Name",
            selector: (row) => row.departmentName,
            sortable: true,
        },
        {
            name: "Division Head",
            selector: (row) => row.departmentHead,
            sortable: true,
        },
        {
            name: "Actions",
            cell: (row) => (
                <div className="flex gap-4">
                    <RemoveBtn id={row._id} />
                    <Link href={`/CRUD/Department/editDepartment${row._id}`}>
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
                    href={`/CRUD/Departments/addDepartment`}
                >
                    Add Department
                </Link>
            </div>
            <DataTable
                title="Departments"
                columns={columns}
                data={departments}
                pagination
                highlightOnHover
                responsive
            />
        </div>
    );
}
