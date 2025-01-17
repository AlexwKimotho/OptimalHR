import EditDivisionsForm from "@/app/CRUD/Divisions/EditDivisionsForm";

const getDivisionsById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/divisions/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Division");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default async function EditDivision({ params }) {
  const { id } = params;
  const { division } = await getDivisionsById(id) || { division: {} };
  const { divisionName, divisionHead, additionalInfo, createdOn } = division ?? {};

  return <EditDivisionsForm id={id} divisionName={divisionName} divisionHead={divisionHead} additionalInfo={additionalInfo} createdOn={createdOn} />;
}
