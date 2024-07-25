import { Metadata } from "next";

import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";
import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Privacy`,
  description: `${SITE_TITLE} - Privacy`
};

export default function Privacy() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Header />

      <section className="mb-[100px] mt-[150px] flex w-full flex-col px-5 md:px-10">
        <h1 className="font-lbv mb-10 text-center text-[20px] font-[700] md:text-[30px] lg:text-[40px]">
          PRIVACY POLICY
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
          This privacy notice for Kneeshaw Developments llc ("we," "us," or
          "our"), describes how and why we might collect, store, use, and/or
          share ("process") your information when you use our services
          ("Services"), such as when you: • Visit our website at , or any
          website of ours that links to this privacy notice • Engage with us in
          other related ways, including any sales, marketing, or events
          Questions or concerns? Reading this privacy notice will help you
          understand your privacy rights and choices. If you do not agree with
          our policies and practices, please do not use our Services. If you
          still have any questions or concerns, please contact us at
          help@kneeshaw.dev. SUMMARY OF KEY POINTS This summary provides key
          points from our privacy notice, but you can find out more details
          about any of these topics by clicking the link following each key
          point or by using our table of contents below to find the section you
          are looking for. What personal information do we process? When you
          visit, use, or navigate our Services, we may process personal
          information depending on how you interact with us and the Services,
          the choices you make, and the products and features you use. Learn
          more about personal information you disclose to us. Do we process any
          sensitive personal information? We do not process sensitive personal
          information. Do we receive any information from third parties? We do
          not receive any information from third parties. How do we process your
          information? We process your information to provide, improve, and
          administer our Services, communicate with you, for security and fraud
          prevention, and to comply with law. We may also process your
          information for other purposes with your consent. We process your
          information only when we have a valid legal reason to do so. Learn
          more about how we process your information. In what situations and
          with which parties do we share personal information? We may share
          information in specific situations and with specific third parties.
          Learn more about when and with whom we share your personal
          information. How do we keep your information safe? We have
          organizational and technical processes and procedures in place to
          protect your personal information. However, no electronic transmission
          over the internet or information storage technology can be guaranteed
          to be 100% secure, so we cannot promise or guarantee that hackers,
          cybercriminals, or other unauthorized third parties will not be able
          to defeat our security and improperly collect, access, steal, or
          modify your information. Learn more about how we keep your information
          safe. What are your rights? Depending on where you are located
          geographically, the applicable privacy law may mean you have certain
          rights regarding your personal information. Learn more about your
          privacy rights. How do you exercise your rights? The easiest way to
          exercise your rights is by visiting , or by contacting us. We will
          consider and act upon any request in accordance with applicable data
          protection laws. Want to learn more about what we do with any
          information we collect? Review the privacy notice in full.
        </p>

        <div className="mb-10 flex flex-col items-center text-[#AFD275]">
          <h2 className="font-lbv mb-5 text-[16px] md:text-[18px] lg:text-[20px]">
            TABLE OF CONTENTS
          </h2>

          <ol className="list-inside list-decimal text-[14px] md:text-[16px] lg:text-[18px]">
            <li>
              <a href="#toc-01" className="text-[16px] font-[500]">
                WHAT INFORMATION DO WE COLLECT?
              </a>
            </li>
            <li>
              <a href="#toc-02" className="text-[16px] font-[500]">
                HOW DO WE PROCESS YOUR INFORMATION?
              </a>
            </li>
            <li>
              <a href="#toc-03" className="text-[16px] font-[500]">
                WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
                INFORMATION?
              </a>
            </li>
            <li>
              <a href="#toc-04" className="text-[16px] font-[500]">
                WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
              </a>
            </li>
            <li>
              <a href="#toc-05" className="text-[16px] font-[500]">
                DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
              </a>
            </li>
            <li>
              <a href="#toc-06" className="text-[16px] font-[500]">
                HOW DO WE HANDLE YOUR SOCIAL LOGINS?
              </a>
            </li>
            <li>
              <a href="#toc-07" className="text-[16px] font-[500]">
                HOW LONG DO WE KEEP YOUR INFORMATION?
              </a>
            </li>
            <li>
              <a href="#toc-08" className="text-[16px] font-[500]">
                HOW DO WE KEEP YOUR INFORMATION SAFE?
              </a>
            </li>
            <li>
              <a href="#toc-09" className="text-[16px] font-[500]">
                DO WE COLLECT INFORMATION FROM MINORS?
              </a>
            </li>
            <li>
              <a href="#toc-10" className="text-[16px] font-[500]">
                WHAT ARE YOUR PRIVACY RIGHTS?
              </a>
            </li>
            <li>
              <a href="#toc-11" className="text-[16px] font-[500]">
                CONTROLS FOR DO-NOT-TRACK FEATURES
              </a>
            </li>
            <li>
              <a href="#toc-12" className="text-[16px] font-[500]">
                DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
              </a>
            </li>
            <li>
              <a href="#toc-13" className="text-[16px] font-[500]">
                DO WE MAKE UPDATES TO THIS NOTICE?
              </a>
            </li>
            <li>
              <a href="#toc-14" className="text-[16px] font-[500]">
                HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </a>
            </li>
            <li>
              <a href="#toc-15" className="text-[16px] font-[500]">
                HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
                YOU?
              </a>
            </li>
          </ol>
        </div>

        <div className="mb-5 rounded-md border p-5">
          <h3
            id="toc-01"
            className="font-lbv mb-2.5 text-[14px] md:text-[16px] lg:text-[18px]"
          >
            1. WHAT INFORMATION DO WE COLLECT?
          </h3>
          <p className="text-justify text-[12px] md:text-[14px] lg:text-[16px]">
            Personal information you disclose to us In Short: We collect
            personal information that you provide to us. We collect personal
            information that you voluntarily provide to us when you register on
            the Services, express an interest in obtaining information about us
            or our products and Services, when you participate in activities on
            the Services, or otherwise when you contact us. Personal Information
            Provided by You. The personal information that we collect depends on
            the context of your interactions with us and the Services, the
            choices you make, and the products and features you use. The
            personal information we collect may include the following: • email
            addresses • usernames • contact preferences • contact or
            authentication data{" "}
            <b>
              Sensitive Information. We do not process sensitive information.
            </b>{" "}
            Payment Data. We may collect data necessary to process your payment
            if you make purchases, such as your payment instrument number, and
            the security code associated with your payment instrument. All
            payment data is stored by Paypal. You may find their privacy notice
            link(s) here: .Social Media Login Data. We may provide you with the
            option to register with us using your existing social media account
            details, like your Facebook, Twitter, or other social media account.
            If you choose to register in this way, we will collect the
            information described in the section called "HOW DO WE HANDLE YOUR
            SOCIAL LOGINS?" below. All personal information that you provide to
            us must be true, complete, and accurate, and you must notify us of
            any changes to such personal information. Information automatically
            collectedIn Short: Some information — such as your Internet Protocol
            (IP) address and/or browser and device characteristics — is
            collected automatically when you visit our Services. We
            automatically collect certain information when you visit, use, or
            navigate the Services. This information does not reveal your
            specific identity (like your name or contact information) but may
            include device and usage information, such as your IP address,
            browser and device characteristics, operating system, language
            preferences, referring URLs, device name, country, location,
            information about how and when you use our Services, and other
            technical information. This information is primarily needed to
            maintain the security and operation of our Services, and for our
            internal analytics and reporting purposes.Like many businesses, we
            also collect information through cookies and similar technologies.
            The information we collect includes: • Log and Usage Data. Log and
            usage data is service-related, diagnostic, usage, and performance
            information our servers automatically collect when you access or use
            our Services and which we record in log files. Depending on how you
            interact with us, this log data may include your IP address, device
            information, browser type, and settings and information about your
            activity in the Services (such as the date/time stamps associated
            with your usage, pages and files viewed, searches, and other actions
            you take such as which features you use), device event information
            (such as system activity, error reports (sometimes called "crash
            dumps"), and hardware settings). • Device Data. We collect device
            data such as information about your computer, phone, tablet, or
            other device you use to access the Services. Depending on the device
            used, this device data may include information such as your IP
            address (or proxy server), device and application identification
            numbers, location, browser type, hardware model, Internet service
            provider and/or mobile carrier, operating system, and system
            configuration information. • Location Data. We collect location data
            such as information about your device's location, which can be
            either precise or imprecise. How much information we collect depends
            on the type and settings of the device you use to access the
            Services. For example, we may use GPS and other technologies to
            collect geolocation data that tells us your current location (based
            on your IP address). You can opt out of allowing us to collect this
            information either by refusing access to the information or by
            disabling your Location setting on your device. However, if you
            choose to opt out, you may not be able to use certain aspects of the
            Services.
          </p>
        </div>

        <div className="mb-5 rounded-md border p-5">
          <h3
            id="toc-02"
            className="font-lbv mb-2.5 text-[14px] md:text-[16px] lg:text-[18px]"
          >
            2. HOW DO WE PROCESS YOUR INFORMATION?
          </h3>
          <p className="text-justify text-[12px] md:text-[14px] lg:text-[16px]">
            In Short: We process your information to provide, improve, and
            administer our Services, communicate with you, for security and
            fraud prevention, and to comply with law. We may also process your
            information for other purposes with your consent. We process your
            personal information for a variety of reasons, depending on how you
            interact with our Services, including: • To facilitate account
            creation and authentication and otherwise manage user accounts. We
            may process your information so you can create and log in to your
            account, as well as keep your account in working order. • To deliver
            and facilitate delivery of services to the user. We may process your
            information to provide you with the requested service. • To fulfill
            and manage your orders. We may process your information to fulfill
            and manage your orders, payments, returns, and exchanges made
            through the Services. • To save or protect an individual's vital
            interest. We may process your information when necessary to save or
            protect an individual’s vital interest, such as to prevent harm.
          </p>
        </div>

        <div className="mb-5 rounded-md border p-5">
          <h3
            id="toc-03"
            className="font-lbv mb-2.5 text-[14px] md:text-[16px] lg:text-[18px]"
          >
            3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
          </h3>
          <p className="text-justify text-[12px] md:text-[14px] lg:text-[16px]">
            In Short: We only process your personal information when we believe
            it is necessary and we have a valid legal reason (i.e., legal basis)
            to do so under applicable law, like with your consent, to comply
            with laws, to provide you with services to enter into or fulfill our
            contractual obligations, to protect your rights, or to fulfill our
            legitimate business interests. If you are located in the EU or UK,
            this section applies to you.The General Data Protection Regulation
            (GDPR) and UK GDPR require us to explain the valid legal bases we
            rely on in order to process your personal information. As such, we
            may rely on the following legal bases to process your personal
            information: • Consent. We may process your information if you have
            given us permission (i.e., consent) to use your personal information
            for a specific purpose. You can withdraw your consent at any time.
            Learn more about withdrawing your consent. • Performance of a
            Contract. We may process your personal information when we believe
            it is necessary to fulfill our contractual obligations to you,
            including providing our Services or at your request prior to
            entering into a contract with you. • Legal Obligations. We may
            process your information where we believe it is necessary for
            compliance with our legal obligations, such as to cooperate with a
            law enforcement body or regulatory agency, exercise or defend our
            legal rights, or disclose your information as evidence in litigation
            in which we are involved. • Vital Interests. We may process your
            information where we believe it is necessary to protect your vital
            interests or the vital interests of a third party, such as
            situations involving potential threats to the safety of any
            person.If you are located in Canada, this section applies to you.We
            may process your information if you have given us specific
            permission (i.e., express consent) to use your personal information
            for a specific purpose, or in situations where your permission can
            be inferred (i.e., implied consent). You can withdraw your consent
            at any time.In some exceptional cases, we may be legally permitted
            under applicable law to process your information without your
            consent, including, for example: • If collection is clearly in the
            interests of an individual and consent cannot be obtained in a
            timely way • For investigations and fraud detection and prevention •
            For business transactions provided certain conditions are met • If
            it is contained in a witness statement and the collection is
            necessary to assess, process, or settle an insurance claim • For
            identifying injured, ill, or deceased persons and communicating with
            next of kin • If we have reasonable grounds to believe an individual
            has been, is, or may be victim of financial abuse • If it is
            reasonable to expect collection and use with consent would
            compromise the availability or the accuracy of the information and
            the collection is reasonable for purposes related to investigating a
            breach of an agreement or a contravention of the laws of Canada or a
            province • If disclosure is required to comply with a subpoena,
            warrant, court order, or rules of the court relating to the
            production of records • If it was produced by an individual in the
            course of their employment, business, or profession and the
            collection is consistent with the purposes for which the information
            was produced • If the collection is solely for journalistic,
            artistic, or literary purposes • If the information is publicly
            available and is specified by the regulations.
          </p>
        </div>

        <div className="mb-5 rounded-md border p-5">
          <h3
            id="toc-04"
            className="font-lbv mb-2.5 text-[14px] md:text-[16px] lg:text-[18px]"
          >
            4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </h3>
          <p className="text-justify text-[12px] md:text-[14px] lg:text-[16px]">
            In Short: We may share information in specific situations described
            in this section and/or with the following third parties. We may need
            to share your personal information in the following situations: •
            Business Transfers. We may share or transfer your information in
            connection with, or during negotiations of, any merger, sale of
            company assets, financing, or acquisition of all or a portion of our
            business to another company. • When we use Google Analytics. We may
            share your information with Google Analytics to track and analyze
            the use of the Services. The Google Analytics Advertising Features
            that we may use include: Google Display Network Impressions
            Reporting. To opt out of being tracked by Google Analytics across
            the Services, visit . You can opt out of Google Analytics
            Advertising Features through Ads Settings and Ad Settings for mobile
            apps. Other opt out means include and . For more information on the
            privacy practices of Google, please visit the Google Privacy & Terms
            page.
          </p>
        </div>

        <div className="mb-5 rounded-md border p-5">
          <h3
            id="toc-05"
            className="font-lbv mb-2.5 text-[14px] md:text-[16px] lg:text-[18px]"
          >
            5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
          </h3>
          <p className="text-justify text-[12px] md:text-[14px] lg:text-[16px]">
            In Short: We may use cookies and other tracking technologies to
            collect and store your information. We may use cookies and similar
            tracking technologies (like web beacons and pixels) to access or
            store information. Specific information about how we use such
            technologies and how you can refuse certain cookies is set out in
            our Cookie Notice.
          </p>
        </div>

        <div className="mb-5 rounded-md border p-5">
          <h3
            id="toc-06"
            className="font-lbv mb-2.5 text-[14px] md:text-[16px] lg:text-[18px]"
          >
            6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
          </h3>
          <p className="text-justify text-[12px] md:text-[14px] lg:text-[16px]">
            In Short: If you choose to register or log in to our Services using
            a social media account, we may have access to certain information
            about you.Our Services offer you the ability to register and log in
            using your third-party social media account details (like your
            Facebook or Twitter logins). Where you choose to do this, we will
            receive certain profile information about you from your social media
            provider. The profile information we receive may vary depending on
            the social media provider concerned, but will often include your
            name, email address, friends list, and profile picture, as well as
            other information you choose to make public on such a social media
            platform. We will use the information we receive only for the
            purposes that are described in this privacy notice or that are
            otherwise made clear to you on the relevant Services. Please note
            that we do not control, and are not responsible for, other uses of
            your personal information by your third-party social media provider.
            We recommend that you review their privacy notice to understand how
            they collect, use, and share your personal information, and how you
            can set your privacy preferences on their sites and apps.
          </p>
        </div>

        <div className="mb-5 rounded-md border p-5">
          <h3
            id="toc-07"
            className="font-lbv mb-2.5 text-[14px] md:text-[16px] lg:text-[18px]"
          >
            7. HOW LONG DO WE KEEP YOUR INFORMATION?
          </h3>
          <p className="text-justify text-[12px] md:text-[14px] lg:text-[16px]">
            In Short: We keep your information for as long as necessary to
            fulfill the purposes outlined in this privacy notice unless
            otherwise required by law. We will only keep your personal
            information for as long as it is necessary for the purposes set out
            in this privacy notice, unless a longer retention period is required
            or permitted by law (such as tax, accounting, or other legal
            requirements). No purpose in this notice will require us keeping
            your personal information for longer than the period of time in
            which users have an account with us. When we have no ongoing
            legitimate business need to process your personal information, we
            will either delete or anonymize such information, or, if this is not
            possible (for example, because your personal information has been
            stored in backup archives), then we will securely store your
            personal information and isolate it from any further processing
            until deletion is possible.
          </p>
        </div>

        <div className="mb-5 rounded-md border p-5">
          <h3
            id="toc-08"
            className="font-lbv mb-2.5 text-[14px] md:text-[16px] lg:text-[18px]"
          >
            8. HOW DO WE KEEP YOUR INFORMATION SAFE?
          </h3>
          <p className="text-justify text-[12px] md:text-[14px] lg:text-[16px]">
            In Short: We aim to protect your personal information through a
            system of organizational and technical security measures. We have
            implemented appropriate and reasonable technical and organizational
            security measures designed to protect the security of any personal
            information we process. However, despite our safeguards and efforts
            to secure your information, no electronic transmission over the
            Internet or information storage technology can be guaranteed to be
            100% secure, so we cannot promise or guarantee that hackers,
            cybercriminals, or other unauthorized third parties will not be able
            to defeat our security and improperly collect, access, steal, or
            modify your information. Although we will do our best to protect
            your personal information, transmission of personal information to
            and from our Services is at your own risk. You should only access
            the Services within a secure environment.
          </p>
        </div>

        <div className="mb-5 rounded-md border p-5">
          <h3
            id="toc-09"
            className="font-lbv mb-2.5 text-[14px] md:text-[16px] lg:text-[18px]"
          >
            9. DO WE COLLECT INFORMATION FROM MINORS?
          </h3>
          <p className="text-justify text-[12px] md:text-[14px] lg:text-[16px]">
            In Short: We do not knowingly collect data from or market to
            children under 18 years of age. We do not knowingly solicit data
            from or market to children under 18 years of age. By using the
            Services, you represent that you are at least 18 or that you are the
            parent or guardian of such a minor and consent to such minor
            dependent’s use of the Services. If we learn that personal
            information from users less than 18 years of age has been collected,
            we will deactivate the account and take reasonable measures to
            promptly delete such data from our records. If you become aware of
            any data we may have collected from children under age 18, please
            contact us at{" "}
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

        <div className="mb-5 rounded-md border p-5">
          <h3
            id="toc-10"
            className="font-lbv mb-2.5 text-[14px] md:text-[16px] lg:text-[18px]"
          >
            10. WHAT ARE YOUR PRIVACY RIGHTS?
          </h3>
          <p className="text-justify text-[12px] md:text-[14px] lg:text-[16px]">
            In Short: In some regions, such as the European Economic Area (EEA),
            United Kingdom (UK), Switzerland, and Canada, you have rights that
            allow you greater access to and control over your personal
            information. You may review, change, or terminate your account at
            any time.In some regions (like the EEA, UK, Switzerland, and
            Canada), you have certain rights under applicable data protection
            laws. These may include the right (i) to request access and obtain a
            copy of your personal information, (ii) to request rectification or
            erasure; (iii) to restrict the processing of your personal
            information; (iv) if applicable, to data portability; and (v) not to
            be subject to automated decision-making. In certain circumstances,
            you may also have the right to object to the processing of your
            personal information. You can make such a request by contacting us
            by using the contact details provided in the section "HOW CAN YOU
            CONTACT US ABOUT THIS NOTICE?" below. We will consider and act upon
            any request in accordance with applicable data protection laws. If
            you are located in the EEA or UK and you believe we are unlawfully
            processing your personal information, you also have the right to
            complain to your Member State data protection authority or UK data
            protection authority. If you are located in Switzerland, you may
            contact the Federal Data Protection and Information Commissioner.
            Withdrawing your consent: If we are relying on your consent to
            process your personal information, which may be express and/or
            implied consent depending on the applicable law, you have the right
            to withdraw your consent at any time. You can withdraw your consent
            at any time by contacting us by using the contact details provided
            in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below or
            updating your preferences.However, please note that this will not
            affect the lawfulness of the processing before its withdrawal nor,
            when applicable law allows, will it affect the processing of your
            personal information conducted in reliance on lawful processing
            grounds other than consent.Opting out of marketing and promotional
            communications: You can unsubscribe from our marketing and
            promotional communications at any time by clicking on the
            unsubscribe link in the emails that we send, or by contacting us
            using the details provided in the section "HOW CAN YOU CONTACT US
            ABOUT THIS NOTICE?" below. You will then be removed from the
            marketing lists. However, we may still communicate with you — for
            example, to send you service-related messages that are necessary for
            the administration and use of your account, to respond to service
            requests, or for other non-marketing purposes.Account Information If
            you would at any time like to review or change the information in
            your account or terminate your account, you can: • Log in to your
            account settings and update your user account. Upon your request to
            terminate your account, we will deactivate or delete your account
            and information from our active databases. However, we may retain
            some information in our files to prevent fraud, troubleshoot
            problems, assist with any investigations, enforce our legal terms
            and/or comply with applicable legal requirements.Cookies and similar
            technologies: Most Web browsers are set to accept cookies by
            default. If you prefer, you can usually choose to set your browser
            to remove cookies and to reject cookies. If you choose to remove
            cookies or reject cookies, this could affect certain features or
            services of our Services. If you have questions or comments about
            your privacy rights, you may email us at{" "}
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

        <div className="mb-5 rounded-md border p-5">
          <h3
            id="toc-11"
            className="font-lbv mb-2.5 text-[14px] md:text-[16px] lg:text-[18px]"
          >
            11. CONTROLS FOR DO-NOT-TRACK FEATURES
          </h3>
          <p className="text-justify text-[12px] md:text-[14px] lg:text-[16px]">
            Most web browsers and some mobile operating systems and mobile
            applications include a Do-Not-Track ("DNT") feature or setting you
            can activate to signal your privacy preference not to have data
            about your online browsing activities monitored and collected. At
            this stage no uniform technology standard for recognizing and
            implementing DNT signals has been finalized. As such, we do not
            currently respond to DNT browser signals or any other mechanism that
            automatically communicates your choice not to be tracked online. If
            a standard for online tracking is adopted that we must follow in the
            future, we will inform you about that practice in a revised version
            of this privacy notice.
          </p>
        </div>

        <div className="mb-5 rounded-md border p-5">
          <h3
            id="toc-12"
            className="font-lbv mb-2.5 text-[14px] md:text-[16px] lg:text-[18px]"
          >
            12. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
          </h3>
          <p className="text-justify text-[12px] md:text-[14px] lg:text-[16px]">
            In Short: If you are a resident of California, Colorado,
            Connecticut, Utah or Virginia, you are granted specific rights
            regarding access to your personal information.What categories of
            personal information do we collect? We have collected the following
            categories of personal information in the past twelve (12)
            months:CategoryExamplesCollected A. Identifiers,Contact details,
            such as real name, alias, postal address, telephone or mobile
            contact number, unique personal identifier, online identifier,
            Internet Protocol address, email address, and account name - YES B.
            Personal information as defined in the California Customer Records
            statute:Name, contact information, education, employment, employment
            history, and financial information - YES C. Protected classification
            characteristics under state or federal law:Gender and date of birth
            - NO D. Commercial information:Transaction information, purchase
            history, financial details, and payment information - YES E.
            Biometric information:Fingerprints and voiceprints - NO F. Internet
            or other similar network activity:Browsing history, search history,
            online behavior, interest data, and interactions with our and other
            websites, applications, systems, and advertisements - NO G.
            Geolocation dataDevice location - NO H. Audio, electronic, visual,
            thermal, olfactory, or similar informationImages and audio, video or
            call recordings created in connection with our business activities -
            NO I. Professional or employment-related information:Business
            contact details in order to provide you our Services at a business
            level or job title, work history, and professional qualifications if
            you apply for a job with us - NO J. Education Information:Student
            records and directory information - NO K. Inferences drawn from
            collected personal information:Inferences drawn from any of the
            collected personal information listed above to create a profile or
            summary about, for example, an individual’s preferences and
            characteristics - NO L. Sensitive personal Information - NO We will
            use and retain the collected personal information as needed to
            provide the Services or for: • Category A - As long as the user has
            an account with us • Category B - As long as the user has an account
            with us • Category D - As long as the user has an account with us We
            may also collect other personal information outside of these
            categories through instances where you interact with us in person,
            online, or by phone or mail in the context of: • Receiving help
            through our customer support channels; • Participation in customer
            surveys or contests; and • Facilitation in the delivery of our
            Services and to respond to your inquiries. How do we use and share
            your personal information? Learn about how we use your personal
            information in the section, "HOW DO WE PROCESS YOUR INFORMATION?
            "Will your information be shared with anyone else? We may disclose
            your personal information with our service providers pursuant to a
            written contract between us and each service provider. Learn more
            about how we disclose personal information to in the section, "WHEN
            AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"We may use your
            personal information for our own business purposes, such as for
            undertaking internal research for technological development and
            demonstration. This is not considered to be "selling" of your
            personal information.We have not disclosed, sold, or shared any
            personal information to third parties for a business or commercial
            purpose in the preceding twelve (12) months. We will not sell or
            share personal information in the future belonging to website
            visitors, users, and other consumers. California Residents
            California Civil Code Section 1798.83, also known as the "Shine The
            Light" law permits our users who are California residents to request
            and obtain from us, once a year and free of charge, information
            about categories of personal information (if any) we disclosed to
            third parties for direct marketing purposes and the names and
            addresses of all third parties with which we shared personal
            information in the immediately preceding calendar year. If you are a
            California resident and would like to make such a request, please
            submit your request in writing to us using the contact information
            provided below.If you are under 18 years of age, reside in
            California, and have a registered account with the Services, you
            have the right to request removal of unwanted data that you publicly
            post on the Services. To request removal of such data, please
            contact us using the contact information provided below and include
            the email address associated with your account and a statement that
            you reside in California. We will make sure the data is not publicly
            displayed on the Services, but please be aware that the data may not
            be completely or comprehensively removed from all our systems (e.g.,
            backups, etc.).CCPA Privacy NoticeThis section applies only to
            California residents. Under the California Consumer Privacy Act
            (CCPA), you have the rights listed below. The California Code of
            Regulations defines a "residents" as: (1) every individual who is in
            the State of California for other than a temporary or transitory
            purpose and (2) every individual who is domiciled in the State of
            California who is outside the State of California for a temporary or
            transitory purpose All other individuals are defined as
            "non-residents." If this definition of "resident" applies to you, we
            must adhere to certain rights and obligations regarding your
            personal information. Your rights with respect to your personal
            dataRight to request deletion of the data — Request to delete You
            can ask for the deletion of your personal information. If you ask us
            to delete your personal information, we will respect your request
            and delete your personal information, subject to certain exceptions
            provided by law, such as (but not limited to) the exercise by
            another consumer of his or her right to free speech, our compliance
            requirements resulting from a legal obligation, or any processing
            that may be required to protect against illegal activities.Right to
            be informed — Request to know Depending on the circumstances, you
            have a right to know: • whether we collect and use your personal
            information; • the categories of personal information that we
            collect; • the purposes for which the collected personal information
            is used; • whether we sell or share personal information to third
            parties; • the categories of personal information that we sold,
            shared, or disclosed for a business purpose; • the categories of
            third parties to whom the personal information was sold, shared, or
            disclosed for a business purpose; • the business or commercial
            purpose for collecting, selling, or sharing personal information;
            and • the specific pieces of personal information we collected about
            http://you. In accordance with applicable law, we are not obligated
            to provide or delete consumer information that is de-identified in
            response to a consumer request or to re-identify individual data to
            verify a consumer request. Right to Non-Discrimination for the
            Exercise of a Consumer’s Privacy RightsWe will not discriminate
            against you if you exercise your privacy rights. Right to Limit Use
            and Disclosure of Sensitive Personal InformationWe do not process
            consumer's sensitive personal information.Verification process Upon
            receiving your request, we will need to verify your identity to
            determine you are the same person about whom we have the information
            in our system. These verification efforts require us to ask you to
            provide information so that we can match it with information you
            have previously provided us. For instance, depending on the type of
            request you submit, we may ask you to provide certain information so
            that we can match the information you provide with the information
            we already have on file, or we may contact you through a
            communication method (e.g., phone or email) that you have previously
            provided to us. We may also use other verification methods as the
            circumstances dictate. We will only use personal information
            provided in your request to verify your identity or authority to
            make the request. To the extent possible, we will avoid requesting
            additional information from you for the purposes of verification.
            However, if we cannot verify your identity from the information
            already maintained by us, we may request that you provide additional
            information for the purposes of verifying your identity and for
            security or fraud-prevention purposes. We will delete such
            additionally provided information as soon as we finish verifying
            you.Other privacy rights • You may object to the processing of your
            personal information. • You may request correction of your personal
            data if it is incorrect or no longer relevant, or ask to restrict
            the processing of the information. • You can designate an authorized
            agent to make a request under the CCPA on your behalf. We may deny a
            request from an authorized agent that does not submit proof that
            they have been validly authorized to act on your behalf in
            accordance with the CCPA. • You may request to opt out from future
            selling or sharing of your personal information to third parties.
            Upon receiving an opt-out request, we will act upon the request as
            soon as feasibly possible, but no later than fifteen (15) business
            days from the date of the request submission. To exercise these
            rights, you can contact us by visiting , by email at
            help@kneeshaw.dev, or by referring to the contact details at the
            bottom of this document. If you have a complaint about how we handle
            your data, we would like to hear from you. Colorado Residents: This
            section applies only to Colorado residents. Under the Colorado
            Privacy Act (CPA), you have the rights listed below. However, these
            rights are not absolute, and in certain cases, we may decline your
            request as permitted by law. • Right to be informed whether or not
            we are processing your personal data • Right to access your personal
            data • Right to correct inaccuracies in your personal data • Right
            to request deletion of your personal data • Right to obtain a copy
            of the personal data you previously shared with us • Right to opt
            out of the processing of your personal data if it is used for
            targeted advertising, the sale of personal data, or profiling in
            furtherance of decisions that produce legal or similarly significant
            effects ("profiling")To submit a request to exercise these rights
            described above, please email help@kneeshaw.dev. If we decline to
            take action regarding your request and you wish to appeal our
            decision, please email us at help@kneeshaw.dev. Within forty-five
            (45) days of receipt of an appeal, we will inform you in writing of
            any action taken or not taken in response to the appeal, including a
            written explanation of the reasons for the decisions. Connecticut
            Residents: This section applies only to Connecticut residents. Under
            the Connecticut Data Privacy Act (CTDPA), you have the rights listed
            below. However, these rights are not absolute, and in certain cases,
            we may decline your request as permitted by law. • Right to be
            informed whether or not we are processing your personal data • Right
            to access your personal data • Right to correct inaccuracies in your
            personal data • Right to request deletion of your personal data •
            Right to obtain a copy of the personal data you previously shared
            with us • Right to opt out of the processing of your personal data
            if it is used for targeted advertising, the sale of personal data,
            or profiling in furtherance of decisions that produce legal or
            similarly significant effects ("profiling")To submit a request to
            exercise these rights described above, please email
            help@kneeshaw.dev. If we decline to take action regarding your
            request and you wish to appeal our decision, please email us at
            help@kneeshaw.dev. Within sixty (60) days of receipt of an appeal,
            we will inform you in writing of any action taken or not taken in
            response to the appeal, including a written explanation of the
            reasons for the decisions.Utah Residents This section applies only
            to Utah residents. Under the Utah Consumer Privacy Act (UCPA), you
            have the rights listed below. However, these rights are not
            absolute, and in certain cases, we may decline your request as
            permitted by law. • Right to be informed whether or not we are
            processing your personal data • Right to access your personal data •
            Right to request deletion of your personal data • Right to obtain a
            copy of the personal data you previously shared with us • Right to
            opt out of the processing of your personal data if it is used for
            targeted advertising or the sale of personal dataTo submit a request
            to exercise these rights described above, please email
            help@kneeshaw.dev. Virginia Residents: Under the Virginia Consumer
            Data Protection Act (VCDPA):"Consumer" means a natural person who is
            a resident of the Commonwealth acting only in an individual or
            household context. It does not include a natural person acting in a
            commercial or employment context."Personal data" means any
            information that is linked or reasonably linkable to an identified
            or identifiable natural person. "Personal data" does not include
            de-identified data or publicly available information."Sale of
            personal data" means the exchange of personal data for monetary
            consideration. If this definition of "consumer" applies to you, we
            must adhere to certain rights and obligations regarding your
            personal data.Your rights with respect to your personal data • Right
            to be informed whether or not we are processing your personal data •
            Right to access your personal data • Right to correct inaccuracies
            in your personal data • Right to request deletion of your personal
            data • Right to obtain a copy of the personal data you previously
            shared with us • Right to opt out of the processing of your personal
            data if it is used for targeted advertising, the sale of personal
            data, or profiling in furtherance of decisions that produce legal or
            similarly significant effects ("profiling")Exercise your rights
            provided under the Virginia VCDPA You may contact us by email at
            help@kneeshaw.dev. If you are using an authorized agent to exercise
            your rights, we may deny a request if the authorized agent does not
            submit proof that they have been validly authorized to act on your
            behalf. Verification processWe may request that you provide
            additional information reasonably necessary to verify you and your
            consumer's request. If you submit the request through an authorized
            agent, we may need to collect additional information to verify your
            identity before processing your request. Upon receiving your
            request, we will respond without undue delay, but in all cases,
            within forty-five (45) days of receipt. The response period may be
            extended once by forty-five (45) additional days when reasonably
            necessary. We will inform you of any such extension within the
            initial 45-day response period, together with the reason for the
            extension.Right to appealIf we decline to take action regarding your
            request, we will inform you of our decision and reasoning behind it.
            If you wish to appeal our decision, please email us at
            help@kneeshaw.dev. Within sixty (60) days of receipt of an appeal,
            we will inform you in writing of any action taken or not taken in
            response to the appeal, including a written explanation of the
            reasons for the decisions. If your appeal is denied, you may contact
            the Attorney General to submit a complaint.
          </p>
        </div>

        <div className="mb-5 rounded-md border p-5">
          <h3
            id="toc-13"
            className="font-lbv mb-2.5 text-[14px] md:text-[16px] lg:text-[18px]"
          >
            13. DO WE MAKE UPDATES TO THIS NOTICE?
          </h3>
          <p className="text-justify text-[12px] md:text-[14px] lg:text-[16px]">
            In Short: Yes, we will update this notice as necessary to stay
            compliant with relevant laws.We may update this privacy notice from
            time to time. The updated version will be indicated by an updated
            "Revised" date and the updated version will be effective as soon as
            it is accessible. If we make material changes to this privacy
            notice, we may notify you either by prominently posting a notice of
            such changes or by directly sending you a notification. We encourage
            you to review this privacy notice frequently to be informed of how
            we are protecting your information.
          </p>
        </div>

        <div className="mb-5 rounded-md border p-5">
          <h3
            id="toc-14"
            className="font-lbv mb-2.5 text-[14px] md:text-[16px] lg:text-[18px]"
          >
            14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </h3>
          <p className="text-justify text-[12px] md:text-[14px] lg:text-[16px]">
            If you have questions or comments about this notice, you may email
            us at{" "}
            <a
              className="text-[#AFD275]"
              href="mailto:help@kneeshaw.dev"
              target="_blank"
            >
              help@kneeshaw.dev
            </a>
          </p>
        </div>

        <div className="mb-5 rounded-md border p-5">
          <h3
            id="toc-15"
            className="font-lbv mb-2.5 text-[14px] md:text-[16px] lg:text-[18px]"
          >
            15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
            YOU?
          </h3>
          <p className="text-justify text-[12px] md:text-[14px] lg:text-[16px]">
            None
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
