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
    <div className="min-h-screen bg-gray-100 py-10 w-full">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Organizations</h1>
          <Link
            href={`/Organizations/addOrganization`}
            className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-200"
          >
            Add Organization
          </Link>
        </div>
        <div className="flex flex-col gap-6">
          {organizations.map((organization) => (
            <div
              key={organization._id}
              className="bg-gray-50 rounded-lg shadow-lg p-6 w-full"
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {organization.companyName}
                </h2>
                <p className="text-gray-600 mb-1">
                  <strong>Address:</strong> {organization.address}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Mission:</strong> {organization.missionStatement}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Vision:</strong> {organization.visionStatement}
                </p>
                <p className="text-gray-600">
                  <strong>Awards:</strong> {organization.awards}
                </p>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <RemoveBtn id={organization._id} />
                <Link href={`/Organizations/editOrganizations/${organization._id}`}>
                  <HiPencilAlt
                    size={24}
                    className="text-blue-500 hover:text-blue-700 cursor-pointer"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
