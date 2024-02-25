import Link from "next/link";
import RemoveBtn from "../app/Organizations/RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

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

export default async function OrganizationsList() {
  const { organizations } = (await getOrganizations()) || { organizations: [] };

  return (
      <div className="bg-white rounded-3 p-4">
        <div>
          <Link className="bg-black text-amber-50" href={`/Organizations/addOrganization`}>
            Add Organization
          </Link>
        </div>
        <table className="w-full table-auto">
          <thead>
          <tr className="bg-gray-200 ">
            <th className="px-4 py-2">Company Name</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">Mission Statement</th>
            <th className="px-4 py-2">Vision Statement</th>
            <th className="px-4 py-2">Awards</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
          </thead>
          <tbody>
          {organizations.map((t) => (
              <tr key={t._id} className="bg-white">
                <td className="px-4 py-2">{t.companyName}</td>
                <td className="px-4 py-2">{t.address}</td>
                <td className="px-4 py-2">{t.missionStatement}</td>
                <td className="px-4 py-2">{t.visionStatement}</td>
                <td className="px-4 py-2">{t.awards}</td>
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