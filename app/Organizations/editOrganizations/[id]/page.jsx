import EditOrganizationsForm from "@/app/Organizations/EditOrganizationsForm";

const getOrganizationById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/organizations/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Organization");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null; // Return null if there's an error
  }
};

export default async function EditOrganization({ params }) {
  const { id } = params;
  const { organization } = await getOrganizationById(id) || { organization: {} };
  const { companyName, address, missionStatement, visionStatement, awards } = organization ?? {};

  return <EditOrganizationsForm id={id} companyName={companyName} address={address} missionStatement={missionStatement} visionStatement={visionStatement} awards={awards}/>;
}
