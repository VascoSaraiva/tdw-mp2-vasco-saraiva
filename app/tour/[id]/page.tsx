import StarsRating from "@/components/create/StarsRating";
import CopyLink from "@/components/posts/CopyLink";
import { PlaceDetails, PostTypes } from "@/types";
import getPostDetails from "@/util/getPostDetails";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'; import { db } from "@vercel/postgres";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {

  const data: PostTypes = await getPostDetails(params.id)

  return (
    <section className="flex flex-col gap-6">
      <div className="py-8 px-6 bg-white rounded-3xl flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h1 className="text-black font-bold text-2xl">{data.title}</h1>
          <p className="text-neutral-400">{data.description}</p>
        </div>

        <div className="flex items-center justify-between w-full h-9">
          <figure className="flex items-center gap-1.5">
            <Image
              src={data.authorphoto}
              width={34}
              height={34}
              className="rounded-full"
              alt="User image"
            />
            <p>{data.author}</p>
          </figure>

          <CopyLink id={data.id} />
        </div>
      </div>

      {data.places.map((place: PlaceDetails) => (
        <div key={data.id + place.place_id} className="bg-white w-full rounded-3xl shadow-md relative">
          <div className="relative">
            <Image
              className="rounded-t-3xl object-cover w-full h-[348px] bg-indigo-100"
              src={place.photo}
              sizes="100vw"
              height={0}
              width={0}
              alt="Place Image"
            />
          </div>

          <div className="px-4 pt-5 pb-6 flex flex-col gap-1">
            <h1 className="title">{place.name}</h1>
            {place.editorial_summary.trim() != '' &&
            <p className="text-neutral-400 text-sm">{place.editorial_summary}</p>
            }

            <StarsRating rating={place.rating} totalReviews={place.user_ratings_total} />
          </div>



          <Link href={place.url} target="_blank" className="px-4 py-2 text-sm bg-indigo-500 bg-opacity-70 rounded-full text-white flex justify-center w-fit absolute top-4 right-4 items-center gap-1.5">
            See it on maps
            <ArrowOutwardIcon fontSize="small" />
          </Link>

        </div>
      
  ))
}

    </section >
  )
}

async function getData(id: string) {

  const client = await db.connect()

  try {

    const response: any = await client.sql`
        SELECT *
        FROM posts
        WHERE id = ${id}
        `;


    let completeData = response.rows[0]

    await Promise.all(
      response.rows[0].places.map(async (placeId: string, index: number) => {

        const url = new URL(
          "https://maps.googleapis.com/maps/api/place/details/json",
        );

        url.searchParams.append(
          "fields",
          "place_id,name,editorial_summary,user_ratings_total,rating,photos,url",
        );
        url.searchParams.append("place_id", placeId);
        url.searchParams.append(
          "key",
          process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
        );

        const newResponse = await fetch(`${url}`);

        const data = await newResponse.json();

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


        completeData.places[index] = placeDetails

      })
    )

    return completeData

  } catch (error) {
    console.log(error)
  }


}