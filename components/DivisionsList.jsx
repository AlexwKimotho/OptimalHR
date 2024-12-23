import Link from "next/link";
import RemoveBtn from "../app/Divisions/RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

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
            <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 text-left text-sm text-gray-600">
                <thead>
                    <tr className="bg-gray-100 border-b">
                        <th className="px-4 py-3 border text-left text-sm font-medium text-gray-600">Division Name</th>
                        <th className="px-4 py-3 border text-left text-sm font-medium text-gray-600">Division Head</th>
                        <th className="px-4 py-3 border text-left text-sm font-medium text-gray-600">Additional Info</th>
                        <th className="px-4 py-3 border text-left text-sm font-medium text-gray-600">Created On</th>
                        <th className="px-4 py-3 border text-left text-sm font-medium text-gray-600">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {divisions.map((t) => (
                        <tr key={t._id} className="border-b hover:bg-gray-50 transition duration-200">
                            <td className="px-6 py-4 text-sm font-medium text-gray-700">{t.divisionName}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{t.divisionHead}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{t.additionalInfo}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{t.createdOn}</td>
                            <td className="px-6 py-4 text-sm flex gap-4">
                                <RemoveBtn id={t._id} />
                                <Link href={`/Organizations/editOrganizations/${t._id}`}>
                                    <HiPencilAlt size={24} className="text-gray-500 hover:text-blue-600 transition duration-200" />
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>  
        </div>
    );
}
