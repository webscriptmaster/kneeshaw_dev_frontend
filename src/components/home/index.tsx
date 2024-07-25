"use client";

import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";

import useAuthStore from "@/zustand/Auth";
import { USER_ROLES } from "@/utils/constants";

import GamerCollapsedSearch from "./gamer/CollapsedSearch";
import GamerTitle from "./gamer/Title";
import GamerRoleSwitch from "./gamer/RoleSwitch";
import GamerIntroduction from "./gamer/Introduction";
import GamerLibrary from "./gamer/Library";
import GamerBlogs from "./gamer/Blogs";
import GamerFAQ from "./gamer/FAQ";

import DeveloperTitle from "./developer/Title";
import DeveloperRoleSwitch from "./developer/RoleSwitch";
import DeveloperIntroduction from "./developer/Introduction";
import DeveloperServices from "./developer/Services";
import DeveloperFeedback from "./developer/Feedback";

export default function Home() {
  const authStore = useAuthStore();

  return (
    <main
      className="flex min-h-screen w-full flex-col"
      style={{
        backgroundImage: "url('/images/home/bg.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
      }}
    >
      <Header />

      {authStore.role === USER_ROLES.GAMER && (
        <section className="flex w-full flex-col">
          <GamerCollapsedSearch />
          <GamerTitle />
          <GamerRoleSwitch />
          <GamerIntroduction />
          <GamerLibrary />
          <GamerBlogs />
          <GamerFAQ />
        </section>
      )}

      {authStore.role === USER_ROLES.DEVELOPER && (
        <section className="flex w-full flex-col">
          <DeveloperTitle />
          <DeveloperRoleSwitch />
          <DeveloperIntroduction />
          <DeveloperServices />
          <DeveloperFeedback />
        </section>
      )}

      <Footer />
    </main>
  );
}
