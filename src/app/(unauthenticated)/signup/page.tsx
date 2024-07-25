import { Metadata } from "next";

import Header from "@/components/_layout/Header";
import SignUp from "@/components/signup/SignUp";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Sign Up`,
  description: `${SITE_TITLE} - Sign Up`
};

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <SignUp />
    </main>
  );
}
