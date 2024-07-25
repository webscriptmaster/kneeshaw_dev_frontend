import { Metadata } from "next";

import Home from "@/components/home";
import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Landing`,
  description: `${SITE_TITLE} - Landing`
};

export default function HomePage() {
  return <Home />;
}
