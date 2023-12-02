import Post from "@/components/posts/PostCard";
import React, { ReactElement } from "react";

export default async function Home() {

  const data = await getData(0)
  let content: ReactElement[] = [];

  if (data.length > 0) {
    data.map((post: any) => {
      content.push(<Post data={post} />);
    });
  }

  return <div className="mt-6 flex flex-col gap-6">
    {content}
    </div>;
}


async function getData(row : number) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getPosts/${row}`, {cache: 'no-cache'})

  if (response.status === 200) {
    const data = await response.json()
    return data
  }else{
    throw new Error('Failed to fetch data')
  }

}