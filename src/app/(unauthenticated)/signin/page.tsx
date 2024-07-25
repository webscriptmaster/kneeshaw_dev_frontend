import { Metadata } from "next";

import Header from "@/components/_layout/Header";
import SignIn from "@/components/signin/SignIn";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Sign In`,
  description: `${SITE_TITLE} - Sign In`
};

export default function SignInPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <SignIn />
    </main>
  );
}
