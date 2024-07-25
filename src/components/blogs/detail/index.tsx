"use client";

import { useEffect, useState } from "react";

import LoadingOverlay from "@/components/_layout/LoadingOverlay";

import { IBlog } from "@/types/interfaces";
import useBlogListStore from "@/zustand/BlogList";

import Title from "./Title";
import Features from "./Features";
import Detail from "./Detail";
import MoreScreen from "./MoreScreen";
import Feedback from "./Feedback";

interface Props {
  id: string;
}

export default function BlogDetail({ id }: Props) {
  const blogStore = useBlogListStore();
  const [blog, setBlog] = useState<IBlog | null>(null);

  const initialize = async () => {
    const newBlog = await blogStore.getAction(id);
    setBlog(newBlog);
  };

  useEffect(() => {
    initialize();
  }, [id]);

  return (
    <>
      {!blog && <LoadingOverlay loading />}

      {blog && (
        <>
          <Title {...blog} />
          <Features {...blog} />
          <Detail {...blog} />
          <MoreScreen {...blog} />
          <Feedback />
        </>
      )}
    </>
  );
}
