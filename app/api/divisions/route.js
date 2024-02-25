import connectMongoDB from "@/libs/mongodb";
import Divisions from "@/models/divisions";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { divisionName, divisionHead, additionalInfo, createdOn } = await request.json();
  await connectMongoDB();
  await Divisions.create({ divisionName, divisionHead, additionalInfo, createdOn });
  return NextResponse.json({ message: "Division Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const divisions = await Divisions.find();
  return NextResponse.json({ divisions });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Divisions.findByIdAndDelete(id);
  return NextResponse.json({ message: "Divisions deleted" }, { status: 200 });
}
