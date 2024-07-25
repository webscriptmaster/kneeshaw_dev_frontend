import { Metadata } from "next";

import Header from "@/components/_layout/Header";
import VerifyToken from "@/components/verify/VerifyToken";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Verify Account`,
  description: `${SITE_TITLE} - Verify Account`
};

interface Props {
  params: {
    token: string;
  };
}

export default function VerifyAccountPage({ params }: Props) {
  const { token } = params;

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <VerifyToken token={token} />
    </main>
  );
}
