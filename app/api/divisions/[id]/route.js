import connectMongoDB from "@/libs/mongodb";
import Divisions from "@/models/divisions";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newCompanyName: companyName, newAddress: address, newMissionStatement: missionStatement, newVisionStatement: visionStatement, newAwards: awards } = await request.json();
  await connectMongoDB();
  await Divisions.findByIdAndUpdate(id, { companyName, address, missionStatement, visionStatement, awards });
  return NextResponse.json({ message: "Division updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const divisions = await Divisions.findOne({ _id: id });
  return NextResponse.json({ divisions }, { status: 200 });
}