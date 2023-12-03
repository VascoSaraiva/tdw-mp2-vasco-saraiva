

import Image from "next/image";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { PostProps, Tag } from "@/types";
import Link from "next/link";
import CopyLink from "./CopyLink";

const Post = ({ data }: PostProps) => {
  
  let tags : Tag[] = []

  data.tags.map(tag => tags.push(JSON.parse(tag)))

  return (
    <div className="bg-white w-full rounded-3xl shadow-md">
      <Link href={`/tour/${data.id}`} className="relative">
        <Image
          className="rounded-t-3xl object-cover bg-indigo-100"
          src={data.placePhotoURL}
          width="0"
          height="0"
          sizes="100vw"
          priority={true}
          style={{ width: '100%', height: '300px' }}
          alt="Place image"
        />

        <div className="absolute top-3 px-5 py-2.5 left-4 bg-black bg-opacity-40 text-white rounded-full text-sm font-normal">
          {data.places.length === 1 ? data.places.length + ' Place' : data.places.length + ' Places'}
        </div>

        <div className="absolute top-3 px-5 py-2.5 right-4 bg-black bg-opacity-40 text-white rounded-full text-sm font-normal gap-1 flex items-center justify-center">
          <FavoriteBorderIcon sx={{ fontSize: 20 }} />
          10
        </div>
      </Link>

      <div className="pt-[18px] px-4 pb-8 flex flex-col gap-y-4">
        <div className="flex justify-between items-center h-9">
          <div className=" flex gap-3 items-center">
            <Image
              className="rounded-full"
              src={data.authorphoto}
              width={34}
              height={34}
              alt="User photo"
            />

            <p className="text-sm">{data.author}</p>
          </div>
          <CopyLink id={data.id} />
        </div>

        <div className="flex flex-col gap-2">
          <Link href={`/tour/${data.id}`} className="title">{data.title}</Link>
          <p className="line-clamp-2 text-neutral-400 font-normal text-sm">
            {data.description}
          </p>
        </div>
        

        <div className='flex gap-3 scrollbar-hide overflow-scroll'>
                    {tags.map(tag => (
                        <div key={tag.tagId} className='text-sm whitespace-nowrap py-2 px-4 w-fit bg-indigo-100  text-indigo-400 rounded-lg'>
                            <p>{tag.tagName}</p>
                        </div>
                    ))}
                </div>
      </div>
    </div>
  );
};

export default Post;
