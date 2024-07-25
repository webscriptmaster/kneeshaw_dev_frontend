"use client";

import Link from "next/link";

import { useEffect } from "react";

import useBlogListStore from "@/zustand/BlogList";
import { IBlog } from "@/types/interfaces";

function BlogItem(prop: IBlog) {
  const { _id: id, thumbnail, title, description } = prop;

  return (
    <div className="flex flex-col rounded-3xl border">
      <img
        className="mb-4 h-full w-full object-cover"
        src={`${process.env.NEXT_PUBLIC_API_SERVER}/${thumbnail.small}`}
        alt={title}
      />

      <h3 className="font-lbv mb-5 text-center text-[20px] font-[700] text-[#E7717D]">
        {title}
      </h3>

      <p className="mb-5 px-2.5 text-center text-[14px] font-[400]">
        {description}
      </p>

      <div className="mb-5 flex justify-center">
        <Link
          href={`/blogs/${id}`}
          target="_blank"
          className="w-40 rounded-[16px] border border-[#AFD275] px-4 py-2 text-center text-[16px] font-[700] text-[#AFD275]"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default function Blogs() {
  const blogStore = useBlogListStore();

  const initialize = async () => {
    await blogStore.getListAction();
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="grid w-full grid-cols-1 gap-5 px-5 md:grid-cols-2 md:gap-10 md:px-10 lg:grid-cols-4">
        {blogStore.blogs.map((b) => (
          <BlogItem key={b._id} {...b} />
        ))}
      </div>
    </div>
  );
}
