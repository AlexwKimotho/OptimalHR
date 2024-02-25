import connectMongoDB from "@/libs/mongodb";
import Organizations from "@/models/organizations";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { companyName, address, missionStatement, visionStatement, awards } = await request.json();
  await connectMongoDB();
  await Organizations.create({ companyName, address, missionStatement, visionStatement, awards });
  return NextResponse.json({ message: "Organization Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const organizations = await Organizations.find();
  return NextResponse.json({ organizations });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Organizations.findByIdAndDelete(id);
  return NextResponse.json({ message: "Organization deleted" }, { status: 200 });
}
