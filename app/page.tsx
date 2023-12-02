import Post from "@/components/posts/PostCard";
import { db } from "@vercel/postgres";
import React, { ReactElement } from "react";

export default async function Home() {

  const data = await getData(0)
  let content: ReactElement[] = [];

  if (data && data.length > 0) {
    data.map((post: any) => {
      content.push(<Post key={post.id} data={post} />);
    });
  }


  return <div className="mt-6 flex flex-col gap-6">
    {content}
    </div>;
}


async function getData(row : number) {
  
  const client = await db.connect()

  try {
    const response : any = await client.sql`
    SELECT *
    FROM posts
    ORDER BY id DESC
    LIMIT 10 OFFSET ${row};
    `;

    let newResponse: any[] = [];
    if(response.rows){

      await Promise.all(
        response.rows.map(async(row : any) => {
          let placeDetail = await getPlaceDetails(row.places[0])
          if(placeDetail){
            row.placePhotoURL = placeDetail.photo
          }
          newResponse.push(row)
        })
      )
      
    }

    return newResponse

  } catch (error) {
    console.log(error)
  }

}

async function getPlaceDetails(id : any){

  try {
    
    const url = new URL(
      "https://maps.googleapis.com/maps/api/place/details/json",
    );

    url.searchParams.append(
      "fields",
      "place_id,name,editorial_summary,user_ratings_total,rating,photos,url",
    );
    url.searchParams.append("place_id", id);
    url.searchParams.append(
      "key",
      process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
    );

    const response = await fetch(`${url}`);

    const data = await response.json();

    const handlePhotoUrl = () => {
      return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${data.result.photos[0].photo_reference}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`;
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
      summary = "";
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

    return placeDetails

  } catch (error) {
    console.log(error)
  }
  
}