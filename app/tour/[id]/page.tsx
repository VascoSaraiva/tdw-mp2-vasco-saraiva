import CopyLink from "@/components/posts/CopyLink";
import { mockData } from "@/constants";
import Image from "next/image";

export default function Page({ params }: { params: { id: string } }) {
  let data = mockData.find((obj) => obj.id === params.id);

  return (
    <div className="py-8 px-6 bg-white rounded-3xl flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h1 className="text-black font-bold text-2xl">{data?.title}</h1>
        <p className="text-neutral-400">{data?.desc}</p>
      </div>

      <div className="flex items-center justify-between w-full h-9">
        <figure className="flex items-center gap-1.5">
          <Image
            src={data?.authorPhoto as string}
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
  );
}
