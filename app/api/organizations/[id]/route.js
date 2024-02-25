import connectMongoDB from "@/libs/mongodb";
import Organizations from "@/models/organizations";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newCompanyName: companyName, newAddress: address, newMissionStatement: missionStatement, newVisionStatement: visionStatement, newAwards: awards } = await request.json();
  await connectMongoDB();
  await Organizations.findByIdAndUpdate(id, { companyName, address, missionStatement, visionStatement, awards });
  return NextResponse.json({ message: "Organization updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const organizations = await Organizations.findOne({ _id: id });
  return NextResponse.json({ organizations }, { status: 200 });
}