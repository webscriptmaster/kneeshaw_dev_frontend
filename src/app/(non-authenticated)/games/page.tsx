import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";
import Games from "@/components/games";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Games`,
  description: `${SITE_TITLE} - Games`
};

export default function GamesPage() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Header />

      <Games />

      <Footer />
    </main>
  );
}
