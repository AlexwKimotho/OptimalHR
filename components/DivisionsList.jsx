import Link from "next/link";
import RemoveBtn from "../app/Divisions/RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

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
        <div className="bg-white rounded-3 p-4">
            <div>
                <Link className="bg-black text-amber-50" href={`/Divisions/addDivision`}>
                    Add Division
                </Link>
            </div>
            <table className="w-full table-auto">
                <thead>
                <tr className="bg-gray-200 ">
                    <th className="px-4 py-2">Division Name</th>
                    <th className="px-4 py-2">Division Head</th>
                    <th className="px-4 py-2">Additional Info</th>
                    <th className="px-4 py-2">Created on</th>

                </tr>
                </thead>
                <tbody>
                {divisions.map((t) => (
                    <tr key={t._id} className="bg-white">
                        <td className="px-4 py-2">{t.divisionName}</td>
                        <td className="px-4 py-2">{t.divisionHead}</td>
                        <td className="px-4 py-2">{t.additionalInfo}</td>
                        <td className="px-4 py-2">{t.createdOn}</td>
                        <td className="px-4 py-2">
                            <div className="flex gap-2">
                                <RemoveBtn id={t._id} />
                                <Link href={`/Organizations/editOrganizations/${t._id}`}>
                                    <HiPencilAlt size={24} />
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}