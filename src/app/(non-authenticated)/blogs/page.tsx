import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";
import Title from "@/components/blogs/Title";
import Blogs from "@/components/blogs/Blogs";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Blog`,
  description: `${SITE_TITLE} - Blog`
};

export default function BlogsPage() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Header />

      <section className="mb-[100px] mt-[150px] flex w-full flex-col px-5 md:px-10">
        <Title />
        <Blogs />
      </section>

      <Footer />
    </main>
  );
}
