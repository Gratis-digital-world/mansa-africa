import React from "react";
import Navbar from "../Navbar/Navbar";

function Privacy() {
  return (
    <div className="text-[#18181B] bg-white text-base xtext-[1.1rem] px-12 py-4 text-justify pb-40">
      <div>
        <Navbar />
      </div>
      <div>
        <p className="text-[3.625rem] font-semibold py-6 pt-12">
          Privacy Policy
        </p>
      </div>
      <div className="leading-7 opacity-80">
        <p className="font-semibold text-xl pt-4">Introduction</p>
        <p>
          Welcome to MANSA Africa, operated by MANSA Digital System. This
          Privacy Policy governs the collection, use, and disclosure of your
          personal information when you use our website and services. We are
          committed to protecting your privacy and ensuring the security of your
          personal information. This Privacy Policy explains how we collect,
          use, disclose, and protect your data.
        </p>
        <p className="font-semibold text-xl pt-4">Consent</p>
        <p>
          By using our website, you consent to the terms outlined in this
          Privacy Policy and agree to the collection, processing, and storage of
          your personal information as described herein. If you do not agree
          with any terms, please refrain from using our services.
        </p>
        <p className="font-semibold text-xl pt-4">Definitions</p>
        <div>
          <ol className="list-decimal pl-6">
            <li>
              Personal Information: Information that can be used to identify an
              individual, including but not limited to name, email address,
              phone number, and organization details.
            </li>
            <li>
              Non-Personal Information: Data that cannot be used to identify a
              specific individual.
            </li>
          </ol>
        </div>
        <p className="font-semibold text-xl pt-4">Information We Collect</p>
        <p className="font-semibold">Personal Information</p>
        <div>
          We collect personal information when you create an account, subscribe
          to our services, participate in surveys, or contact us. The
          information collected may include, but is not limited to:
          <ol className="list-disc pl-6 py-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Organization details</li> <li>Phone number</li> <li>Address</li>
          </ol>
        </div>
        <p className="font-semibold">Usage Information</p>
        <div>
          We may collect non-personal information related to your visit and
          interaction with our website. This includes data such as:
          <ol className="list-disc px-6 pt-4">
            <li>Pages viewed</li>
            <li>Links clicked</li>
            <li>Duration of visit</li>
            <li>Device information</li>
          </ol>
        </div>
        <p>
          We use this information to analyze user behavior, improve our
          services, and enhance the user experience.
        </p>
        <p className="font-semibold pt-2">Cookies and Tracking</p>
        <p>
          We use cookies and similar tracking technologies to enhance your
          browsing experience. Cookies are small files stored on your device
          that help us understand your preferences and customize our website for
          you. You can manage your cookie preferences through your browser
          settings.
        </p>
        <p className="font-semibold text-xl pt-4">
          How We Use Your Information
        </p>
        <p>
          We use the information collected for various purposes, including but
          not limited to:
        </p>
        <p className="font-semibold pt-2">User Account Management</p>
        <p>
          We use your personal information to create and manage your account,
          provide customer support, and communicate with you about our services,
          updates, and promotional offers.
        </p>
        <p className="font-semibold pt-2">Service Improvement</p>
        <p>
          The data collected allows us to analyze user behavior and preferences,
          helping us optimize our website, tailor content, and enhance the
          overall user experience.
        </p>
        <p className="font-semibold pt-2">Communications</p>
        <p>
          We may use your email address to send you newsletters, updates, or
          other relevant information about our services. You have the option to
          unsubscribe from these communications at any time.
        </p>
        <p className="font-semibold pt-2">Legal Compliance</p>
        <p>
          We may use your information to comply with applicable laws,
          regulations, and legal obligations, including responding to law
          enforcement or regulatory requests.
        </p>
        <p className="font-semibold pt-2">Research and Analytics</p>
        <p>
          We use the collected data for research, analysis, and business
          intelligence purposes, with the aim of improving our services and
          making informed business decisions.
        </p>
        <p className="font-semibold pt-2">Data Security</p>
        <p>
          We prioritize the security of your personal information and employ
          industry-standard security measures to protect it from unauthorized
          access, alteration, disclosure, or destruction. Despite our efforts to
          safeguard your data, no method of data transmission over the internet
          is completely secure. Therefore, we cannot guarantee its absolute
          security.
        </p>
        <p className="font-semibold pt-2">Sharing of Information</p>
        <p>
          We do not sell, trade, or rent your personal information to third
          parties. However, we may share aggregated or anonymized data for
          analytical purposes.
        </p>
        <p className="font-semibold pt-2">Third-Party Links</p>
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or content of these websites.
          Please review their respective privacy policies before providing any
          personal information.
        </p>
        <p className="font-semibold pt-2">Children&#39;s Privacy</p>
        <p>
          Our services are not intended for children under 13. We do not
          knowingly collect personal information from children. If you believe a
          child has provided us with personal information, please contact us,
          and we will promptly delete such data.
        </p>
        <p className="font-semibold pt-2">Changes to This Policy</p>
        <p>
          We reserve the right to update and revise this Privacy Policy
          periodically to reflect changes in our practices and services. We
          encourage you to review this Policy for any updates.
        </p>
        <p className="font-semibold pt-2">Your Rights and Choices</p>
        <div>
          You have the right to:{" "}
          <ol className="list-disc px-6 py-2">
            <li>Access and rectify your personal information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications</li>
          </ol>{" "}
          To exercise these rights or for any inquiries regarding your personal
          information, please contact us at [contact email].
        </div>
        <p className="font-semibold pt-2">Contact Us</p>
        <p>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or our privacy practices, please contact us at
          mansaafrica.com
        </p>
      </div>
    </div>
  );
}

export default Privacy;
