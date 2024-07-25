import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";

import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";
import Title from "@/components/services/Title";
import Service from "@/components/services/Service";
import Contact from "@/components/services/Contact";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Services`,
  description: `${SITE_TITLE} - Services`
};

export default function Services() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Header />

      <section className="mb-[100px] mt-[150px] flex w-full flex-col px-5 md:px-10">
        <Title />
        <Service />
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
