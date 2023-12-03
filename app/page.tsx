import Post from "@/components/posts/PostCard";
import { PostTypes } from "@/types";
import getPosts from "@/util/getPosts";
import React, { ReactElement } from "react";

export default async function Home() {

  const data = await getPosts(0)
  let content: ReactElement[] = [];

  if (data && data.length > 0) {
    data.map((post: PostTypes) => {
      content.push(<Post key={post.id} data={post} />);
    });
  }


  return <div className="mt-6 flex flex-col gap-6">
    {content}
    </div>;
}
