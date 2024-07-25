import { Metadata } from "next";

import Header from "@/components/_layout/Header";
import ForgotByEmail from "@/components/forgot/ForgotByEmail";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Forgot`,
  description: `${SITE_TITLE} - Forgot`
};

export default function ForgotByEmailPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <ForgotByEmail />
    </main>
  );
}
