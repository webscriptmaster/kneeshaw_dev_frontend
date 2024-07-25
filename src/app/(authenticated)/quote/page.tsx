import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";
import Quote from "@/components/quote";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Quote`,
  description: `${SITE_TITLE} - Quote`
};

export default function QuotePage() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Header />

      <Quote />

      <Footer />
    </main>
  );
}
