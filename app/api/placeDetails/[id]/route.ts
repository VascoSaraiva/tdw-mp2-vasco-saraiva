import { PlaceTextSearchResult } from "@/types";
import getPlaceDetails from "@/util/getPlaceDetails";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    
    let placeDetails = await getPlaceDetails(params.id)

    return NextResponse.json(placeDetails, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
