import EditDepartmentsForm from "@/app/CRUD/Departments/EditDepartmentsForm";

const getDepartmentsById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/departments/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Departments");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default async function EditDepartments({ params }) {
  const { id } = params;
  const { departments } = await getDepartmentsById(id) || { departments: {} };
  const { departmentsName, departmentsHead} = departments ?? {};

  return <EditDepartmentsForm id={id} departmentName={departmentsName} departmentHead={departmentsHead} />;
}
