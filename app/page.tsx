import Post from "@/components/posts/PostCard";
import { PostTypes } from "@/types";
import getPosts from "@/util/getPosts";
import React, { ReactElement } from "react";

export default async function Home() {

  const data = await getPosts(0)
  let content: ReactElement[] = [];

  if (data && data.length > 0) {

    const sortedData = data.sort(function (a, b) {
      return b.id - a.id
    });

    sortedData.map((post: PostTypes) => {
      content.push(<Post key={post.id} data={post} />);
    });
  }


  return <div className="mt-6 flex flex-col gap-6">
    {content}
  </div>;
}

export const dynamic = 'force-dynamic'