import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";
import Safety from "@/components/safety";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Privacy & Safety`,
  description: `${SITE_TITLE} - Privacy & Safety`
};

export default function SafetyPage() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Header />

      <Safety />

      <Footer />
    </main>
  );
}
