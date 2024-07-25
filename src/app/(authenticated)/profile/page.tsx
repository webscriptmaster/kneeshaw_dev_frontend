import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";
import Profile from "@/components/profile";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Profile`,
  description: `${SITE_TITLE} - Profile`
};

export default function ProfilePage() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Header />

      <Profile />

      <Footer />
    </main>
  );
}
