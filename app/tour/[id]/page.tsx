import StarsRating from "@/components/create/StarsRating";
import CopyLink from "@/components/posts/CopyLink";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {

  const data = await getData(params.id)
  

  return (
    <section className="flex flex-col gap-6">
      <div className="py-8 px-6 bg-white rounded-3xl flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h1 className="text-black font-bold text-2xl">{data?.title}</h1>
          <p className="text-neutral-400">{data?.description}</p>
        </div>

        <div className="flex items-center justify-between w-full h-9">
          <figure className="flex items-center gap-1.5">
            <Image
              src={data?.authorphoto as string}
              width={34}
              height={34}
              className="rounded-full"
              alt="User photo"
            />
            <p>{data?.author}</p>
          </figure>

          <CopyLink id={data?.id as string} />
        </div>
      </div>

      {data.places.map((place : any) => (
        <div key={data.id + place.place_id} className="bg-white w-full rounded-3xl shadow-md relative">
          <div className="relative">
            <Image
              className="rounded-t-3xl object-cover"
              src={place.photo}
              sizes="100vw"
              style={{
                width: "100%",
                minHeight: "348px",
              }}
              height={348}
              width={400}
              alt="City Image"
            />
          </div>

          <div className="px-4 pt-5 pb-6 flex flex-col gap-1">
            <h1 className="title">{place.name}</h1>
            <p className="text-neutral-400 text-sm">{place.editorial_summary}</p>

            <div className="flex gap-2 items-center mt-2">

              <div className="flex items-center">
                <StarsRating rating={place.rating} />
              </div>
              <p className="text-sm">{place.user_ratings_total} Reviews</p>
            </div>

            <Link href={place.url} target="_blank" className="px-4 py-2 text-sm bg-indigo-500 bg-opacity-70 rounded-full text-white flex justify-center w-fit absolute top-4 right-4 items-center gap-1.5">
              See it on maps
              <ArrowOutwardIcon fontSize="small" />
            </Link>

          </div>
        </div>
      ))}

    </section>
  )
}

async function getData(id: string) {
  const response = await fetch(process.env.NEXT_PUBLIC_VERCEL_URL + '/api/getPostDetails/' +id, { cache: 'no-cache' })

  if (response.status === 200) {
    const data = await response.json()
    return data
  } else {
    throw new Error('Failed to fetch data')
  }

}