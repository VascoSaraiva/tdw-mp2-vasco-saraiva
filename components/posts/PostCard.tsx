import Image from "next/image";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { PostProps } from "@/types";
import Link from "next/link";
import CopyLink from "./CopyLink";

const Post = ({ data }: PostProps) => {
  return (
    <div className="bg-white w-full rounded-3xl shadow-md">
      <Link href={`/tour/${data.id}`} className="relative">
        <Image
          className="rounded-t-3xl object-cover"
          src={data.places[0].photo}
          sizes="100vw"
          style={{
            width: "100%",
            minHeight: "348px",
          }}
          height={348}
          width={500}
          alt="City Image"
        />

        <div className="absolute top-3 px-5 py-2.5 left-4 bg-black bg-opacity-40 text-white rounded-full text-sm font-normal">
          5 Places
        </div>

        <div className="absolute top-3 px-5 py-2.5 right-4 bg-black bg-opacity-40 text-white rounded-full text-sm font-normal gap-1 flex items-center justify-center">
          <FavoriteBorderIcon sx={{ fontSize: 20 }} />
          10
        </div>
      </Link>

      <div className="pt-[18px] px-4 pb-8 flex flex-col gap-y-4">
        <div className="flex justify-between items-center h-9">
          <div className=" flex gap-2 items-center">
            <Image
              className="rounded-full"
              src={data.authorPhoto}
              width={34}
              height={34}
              alt="User photo"
            />

            <p>{data.author}</p>
          </div>
          <CopyLink id={data.id} />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-black text-xl font-bold">{data.title}</h1>
          <p className="line-clamp-2 text-neutral-400 font-normal text-sm">
            {data.desc}
          </p>
        </div>

        {/* <div className='flex gap-3 overflow-scroll'>
                    {tags.map(tag => (
                        <div className='text-sm py-2 px-4 bg-zinc-100 w-fit border-2 border-gray-300 rounded-lg'>
                            {tag}
                        </div>
                    ))}
                </div> */}
      </div>
    </div>
  );
};

export default Post;
