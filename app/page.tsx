import Post from "@/components/posts/PostCard";
import { mockData } from "@/constants";
import React, { ReactElement } from "react";

export default function Home() {
  let content: ReactElement[] = [];

  if (mockData.length > 0) {
    mockData.map((data) => {
      content.push(<Post data={data} />);
    });
  }

  return <div className="mt-6 flex flex-col gap-6">{content}</div>;
}
