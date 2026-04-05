import { NextResponse } from "next/server";
import { getAllEntries, addEntry } from "@/lib/knowledge";

export async function GET() {
  const entries = getAllEntries();
  return NextResponse.json({ entries, count: entries.length });
}

export async function POST(req: Request) {
  const body = await req.json();
  const { question, answer, category, tags, source } = body;

  if (!question || !answer) {
    return NextResponse.json(
      { error: "question and answer are required" },
      { status: 400 }
    );
  }

  const entry = await addEntry({
    question,
    answer,
    category: category || "general",
    tags: tags || [],
    source: source || "manual",
  });

  return NextResponse.json({ entry }, { status: 201 });
}
