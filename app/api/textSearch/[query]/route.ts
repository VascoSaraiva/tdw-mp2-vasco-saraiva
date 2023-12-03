import getSearchResults from "@/util/getSearchResults";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { query: string } },
) {
  try {
    
    let results = await getSearchResults(params.query)

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
