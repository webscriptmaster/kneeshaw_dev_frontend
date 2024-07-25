import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";
import Cart from "@/components/cart";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Cart`,
  description: `${SITE_TITLE} - Cart`
};

export default function CartPage() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Header />

      <Cart />

      <Footer />
    </main>
  );
}
