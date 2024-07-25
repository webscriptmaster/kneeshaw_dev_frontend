import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";

import Header from "@/components/_layout/Header";
import Job from "@/components/job";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Job`,
  description: `${SITE_TITLE} - Job`
};

export default function JobPage() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Header />

      <Job />
    </main>
  );
}
