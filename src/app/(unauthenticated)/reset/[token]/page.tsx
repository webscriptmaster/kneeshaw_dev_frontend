import { Metadata } from "next";

import Header from "@/components/_layout/Header";
import ResetToken from "@/components/reset/ResetToken";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Reset Password`,
  description: `${SITE_TITLE} - Reset Password`
};

interface Props {
  params: {
    token: string;
  };
}

export default function ResetPasswordPage({ params }: Props) {
  const { token } = params;

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <ResetToken token={token} />
    </main>
  );
}
