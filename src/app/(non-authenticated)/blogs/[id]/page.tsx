import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";
import BlogDetail from "@/components/blogs/detail";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Blog`,
  description: `${SITE_TITLE} - Blog`
};

interface Props {
  params: {
    id: string;
  };
}

export default function BlogDetailPage({ params }: Props) {
  const { id } = params;

  return (
    <main className="flex min-h-screen w-full flex-col">
      <Header />

      <section className="mb-[100px] mt-[150px] flex w-full flex-col px-5 md:px-10">
        <BlogDetail id={id} />
      </section>

      <Footer />
    </main>
  );
}
