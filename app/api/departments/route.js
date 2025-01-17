import connectMongoDB from "@/libs/mongodb";
import Departments from "@/models/departments";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { departmentName, departmentHead} = await request.json();
  await connectMongoDB();
  await Departments.create({ departmentName, departmentHead });
  return NextResponse.json({ message: "Department Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const departments = await Departments.find();
  return NextResponse.json({ departments });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Departments.findByIdAndDelete(id);
  return NextResponse.json({ message: "Departments deleted" }, { status: 200 });
}
