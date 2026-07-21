import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Job from "@/models/Job";

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    const job = await Job.create(body);

    return NextResponse.json(job, { status: 201 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to create job" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const jobs = await Job.find().sort({
      createdAt: -1,
    });

    return NextResponse.json(jobs);
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}