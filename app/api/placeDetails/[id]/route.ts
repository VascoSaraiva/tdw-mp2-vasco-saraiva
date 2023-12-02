import { PlaceTextSearchResult } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const url = new URL(
      "https://maps.googleapis.com/maps/api/place/details/json",
    );
    url.searchParams.append(
      "fields",
      "place_id,name,editorial_summary,user_ratings_total,rating,photos,url",
    );
    url.searchParams.append("place_id", params.id);
    url.searchParams.append(
      "key",
      process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
    );

    const response = await fetch(`${url}`);

    const data = await response.json();

    const handlePhotoUrl = () => {
      return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${data.result.photos[0].photo_reference}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`;
    };

    const handleEditorialSummary = () => {
      return data.result.editorial_summary.overview;
    };

    let photoURL;
    if (data.result.photos) {
      photoURL = handlePhotoUrl();
    } else {
      photoURL = "https://i.ibb.co/fN9Y1Dn/1490.png";
    }

    let summary;
    if (data.result.editorial_summary) {
      summary = handleEditorialSummary();
    } else {
      summary = "../../public/default_place_image.png";
    }

    let placeDetails = {
      place_id: data.result.place_id,
      name: data.result.name,
      rating: data.result.rating,
      url: data.result.url,
      user_ratings_total: data.result.user_ratings_total,
      photo: photoURL,
      editorial_summary: summary,
    };

    return NextResponse.json(placeDetails, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
