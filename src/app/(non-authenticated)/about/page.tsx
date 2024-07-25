import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";

import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";

import Title from "@/components/about/Title";
import Creating from "@/components/about/Creating";
import Choose from "@/components/about/Choose";
import Mission from "@/components/about/Mission";
import Team from "@/components/about/Team";
import Contact from "@/components/about/Contact";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - About Us`,
  description: `${SITE_TITLE} - About Us`
};

export default function AboutUsPage() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Header />

      <section className="mb-[100px] mt-[150px] flex w-full flex-col px-5 md:px-10">
        <Title />
        <Creating />
        <Choose />
        <Mission />
        <Team />
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
