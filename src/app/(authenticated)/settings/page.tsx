import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";
import Settings from "@/components/settings";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Settings`,
  description: `${SITE_TITLE} - Settings`
};

export default function SettingsPage() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Header />

      <Settings />

      <Footer />
    </main>
  );
}
