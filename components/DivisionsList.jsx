// components/DivisionsDataGrid.jsx
'use client'
import { DataGrid } from '@mui/x-data-grid'
import Paper from '@mui/material/Paper'
import Link from "next/link"
import { HiPencilAlt } from "react-icons/hi"
import RemoveBtn from "@/app/Divisions/RemoveBtn"

export default function DivisionsDataGrid({ rows, columns }) {
  return (
    <Paper style={{ height: 500, width: '100%' }}>
      <DataGrid 
        rows={rows} 
        columns={columns} 
        pageSize={10} 
        rowsPerPageOptions={[10]} 
        checkboxSelection 
      />
    </Paper>
  )
}

// app/Divisions/page.jsx
import Link from "next/link"
import { HiPencilAlt } from "react-icons/hi"
import RemoveBtn from "@/app/Divisions/RemoveBtn"
import DivisionsDataGrid from "@/components/DivisionsDataGrid"

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

export default async function DivisionsList() {
    const { divisions } = (await getDivisions()) || { divisions: [] };

    const columns = [
        { field: 'divisionName', headerName: 'Division Name', flex: 1 },
        { field: 'divisionHead', headerName: 'Division Head', flex: 1 },
        { field: 'additionalInfo', headerName: 'Additional Info', flex: 1 },
        { field: 'createdOn', headerName: 'Created On', flex: 1 },
        {
            field: 'actions',
            headerName: 'Actions',
            flex: 1,
            renderCell: (params) => (
                <div className="flex items-center gap-4">
                    <RemoveBtn id={params.row.id} />
                    <Link href={`/Divisions/editDivision/${params.row.id}`}>
                        <HiPencilAlt size={24} className="text-blue-500 hover:text-blue-700 cursor-pointer" />
                    </Link>
                </div>
            ),
        },
    ];

    const rows = divisions.map((division) => ({
        id: division._id,
        divisionName: division.divisionName,
        divisionHead: division.divisionHead,
        additionalInfo: division.additionalInfo,
        createdOn: division.createdOn,
    }));

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Divisions</h1>
                    <Link
                        href={`/Divisions/addDivision`}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-200"
                    >
                        Add Division
                    </Link>
                </div>
                <DivisionsDataGrid rows={rows} columns={columns} />
            </div>
        </div>
    );
}