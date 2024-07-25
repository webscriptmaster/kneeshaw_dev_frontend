import { Metadata } from "next";

import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";
import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Cookies`,
  description: `${SITE_TITLE} - Cookies`
};

export default function Cookies() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Header />

      <section className="mb-[100px] mt-[150px] flex w-full flex-col px-5 md:px-10">
        <h1 className="font-lbv mb-10 text-center text-[20px] font-[700] md:text-[30px] lg:text-[40px]">
          COOKIE POLICY
        </h1>

        <div className="mb-10 flex h-1 w-full items-center justify-center">
          <div className="h-0 w-[35px] border border-[#AFD276]" />
          <div className="h-0 w-[30px] border-[2px] border-[#AFD276]" />
          <div className="h-0 w-[35px] border border-[#AFD276]" />
        </div>

        <p className="mb-10 text-center text-[16px] font-[400] md:text-[18px] lg:text-[20px]">
          Last updated March 15, 2024
        </p>

        <p className="mb-10 text-justify text-[16px] md:text-[18px] lg:text-[20px]">
          This Cookie Policy explains how Kneeshaw Developments llc (”Company,"
          "we," "us," and "our") uses cookies and similar technologies to
          recognize you when you visit our website at{" "}
          <a
            className="text-[#AFD275]"
            href="https://www.kneeshaw.dev"
            target="_blank"
          >
            https://www.kneeshaw.dev
          </a>
          . It explains what these technologies are and why we use them, as well
          as your rights to control our use of them. In some cases we may use
          cookies to collect personal information, or that becomes personal
          information if we combine it with other information.
        </p>

        <div className="mb-5 rounded-md border p-5">
          <h3
            id="toc-01"
            className="font-lbv mb-2.5 text-[14px] md:text-[16px] lg:text-[18px]"
          >
            What are cookies?
          </h3>
          <p className="text-justify text-[12px] md:text-[14px] lg:text-[16px]">
            Cookies are small data files that are placed on your computer or
            mobile device when you visit a website. Cookies are widely used by
            website owners in order to make their websites work, or to work more
            efficiently, as well as to provide reporting information. Cookies
            set by the website owner (in this case, Kneeshaw Developments llc)
            are called "first-party cookies." Cookies set by parties other than
            the website owner are called "third-party cookies." Third-party
            cookies enable third-party features or functionality to be provided
            on or through the website (e.g., advertising, interactive content,
            and analytics). The parties that set these third-party cookies can
            recognize your computer both when it visits the website in question
            and also when it visits certain other websites.
          </p>
        </div>

        <div className="mb-5 rounded-md border p-5">
          <h3
            id="toc-02"
            className="font-lbv mb-2.5 text-[14px] md:text-[16px] lg:text-[18px]"
          >
            Why do we use cookies?
          </h3>
          <p className="text-justify text-[12px] md:text-[14px] lg:text-[16px]">
            We use first- and third-party cookies for several reasons. Some
            cookies are required for technical reasons in order for our Website
            to operate, and we refer to these as "essential" or "strictly
            necessary" cookies. Other cookies also enable us to track and target
            the interests of our users to enhance the experience on our Online
            Properties. Third parties serve cookies through our Website for
            advertising, analytics, and other purposes. This is described in
            more detail below.
          </p>
        </div>

        <div className="mb-5 rounded-md border p-5">
          <h3
            id="toc-03"
            className="font-lbv mb-2.5 text-[14px] md:text-[16px] lg:text-[18px]"
          >
            How can I control cookies?
          </h3>
          <p className="text-justify text-[12px] md:text-[14px] lg:text-[16px]">
            You have the right to decide whether to accept or reject cookies.
            You can exercise your cookie rights by setting your preferences in
            the Cookie Consent Manager. The Cookie Consent Manager allows you to
            select which categories of cookies you accept or reject. Essential
            cookies cannot be rejected as they are strictly necessary to provide
            you with services. The Cookie Consent Manager can be found in the
            notification banner and on our website. If you choose to reject
            cookies, you may still use our website though your access to some
            functionality and areas of our website may be restricted. You may
            also set or amend your web browser controls to accept or refuse
            cookies.
          </p>
        </div>

        <div className="mb-5 rounded-md border p-5">
          <h3
            id="toc-04"
            className="font-lbv mb-2.5 text-[14px] md:text-[16px] lg:text-[18px]"
          >
            Where can I get further information?
          </h3>
          <p className="text-justify text-[12px] md:text-[14px] lg:text-[16px]">
            If you have any questions about our use of cookies or other
            technologies, please email us at{" "}
            <a
              className="text-[#AFD275]"
              href="mailto:help@kneeshaw.dev"
              target="_blank"
            >
              help@kneeshaw.dev
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
