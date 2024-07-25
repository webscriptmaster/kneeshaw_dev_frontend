import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";
import PressDetail from "@/components/press/detail";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Press`,
  description: `${SITE_TITLE} - Press`
};

interface Props {
  params: {
    id: string;
  };
}

export default function PressDetailPage({ params }: Props) {
  const { id } = params;

  return (
    <main className="flex min-h-screen w-full flex-col">
      <Header />

      <section className="flex w-full flex-col">
        <PressDetail id={id} />
      </section>

      <Footer />
    </main>
  );
}
