import { PlaceTextSearchResult } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { query: string } },
) {
  try {
    const url = new URL(
      "https://maps.googleapis.com/maps/api/place/textsearch/json",
    );
    url.searchParams.append("query", params.query);
    url.searchParams.append(
      "key",
      process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
    );
    const response = await fetch(`${url}`);

    const data = await response.json();

    let filteredData = data.results.slice(0, 7);

    filteredData = filteredData.map(
      ({ name, place_id }: PlaceTextSearchResult) => ({ name, place_id }),
    );

    return NextResponse.json(filteredData, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
