import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";
import ToCartDetail from "@/components/tocart/detail";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Get it now`,
  description: `${SITE_TITLE} - Get it now`
};

interface Props {
  params: {
    id: string;
  };
}

export default function ToCartDetailPage({ params }: Props) {
  const { id } = params;

  return (
    <main className="flex min-h-screen w-full flex-col">
      <Header />

      <section className="mb-[100px] mt-[150px] flex w-full flex-col px-5 md:px-10">
        <ToCartDetail id={id} />
      </section>

      <Footer />
    </main>
  );
}
