import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";
import CartDetail from "@/components/cart/detail";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Cart Overview`,
  description: `${SITE_TITLE} - Cart Overview`
};

interface Props {
  params: {
    id: string;
  };
}

export default function CartDetailPage({ params }: Props) {
  const { id } = params;

  return (
    <main className="flex min-h-screen w-full flex-col">
      <Header />

      <section className="mb-[50px] mt-[50px] flex w-full flex-1 flex-col px-5 md:px-10">
        <CartDetail id={id} />
      </section>

      <Footer />
    </main>
  );
}
