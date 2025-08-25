import { NextResponse } from "next/server";
import Project from "../../../models/Project";
import { connectToDatabase } from "../../../lib/mongodb";

// ✅ POST: create project
export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const { title, description, link } = await request.json();

    if (!title || !description || !link) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const newProject = await Project.create({ title, description, link });
    return NextResponse.json(newProject, { status: 201 });

  } catch (error: any) {
    console.error("🔥 MongoDB Error:", error); // 👈 log full error
    return NextResponse.json(
      { message: "Failed to add project", error: error.message },
      { status: 500 }
    );
  }
}


// ✅ GET: fetch all projects
export async function GET() {
  try {
    await connectToDatabase();
    const projects = await Project.find().sort({ createdAt: -1 });
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch projects" }, { status: 500 });
  }
}
