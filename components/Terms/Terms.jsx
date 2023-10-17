import React from "react";
import Navbar from "../Navbar/Navbar";

function Terms() {
  return (
    <div className="text-[#18181B] bg-white text-base xtext-[1.1rem] px-12 py-4 text-justify pb-40">
      <div>
        <Navbar />
      </div>
      <div>
        <p className="text-[3rem] font-semibold py-6 pt-12">
          Terms and Conditions
        </p>
      </div>
      <div className="leading-7 opacity-80">
        <p className="pt-4">
          Please read these Terms and Conditions carefully before using our
          website, operated by MANSA Digital System. Your access to and use of
          this service is conditioned upon your acceptance of and compliance
          with these Terms. These Terms apply to all visitors, users, and others
          who access or use our website.
        </p>
        <p className="font-semibold text-xl pt-4">Acceptance of Terms</p>
        <p>
          By accessing or using our website, you agree to be bound by these
          Terms. If you disagree with any part of the Terms, then you may not
          access the service.
        </p>
        <p className="pt-4">Intellectual Property</p>{" "}
        <p>
          The content, features, and functionality of MANSA Africa, including
          but not limited to text, graphics, logos, icons, images, audio, and
          software, are owned by or licensed to MANSA Digital System and are
          protected by copyright, trademark, and other intellectual property
          laws.
        </p>
        <p className="font-semibold text-xl pt-4">Use License</p>{" "}
        <div className="pb-4">
          <ol className="list-decimal pl-4">
            <li>
              Permission:
              <br />
              Permission is granted to temporarily download one copy of the
              materials on MANSA Africa for personal, non-commercial transitory
              viewing only.
            </li>
            <li>
              Prohibited Actions:
              <br />
              <ol className="list-disc pl-4">
                <li>
                  You may not modify or copy the materials. Use the materials
                  for any commercial purpose or for any public display
                  (commercial or non-commercial).
                </li>
                <li>
                  Attempt to decompile or reverse engineer any software
                  contained on MANSA Africa.
                </li>
                <li>
                  Remove any copyright or other proprietary notations from the
                  materials.
                </li>
              </ol>
            </li>
            <li>
              Transfer of Rights: <br />
              This license shall automatically terminate if you violate any of
              these restrictions and may be terminated by MANSA Digital System
              at any time.
            </li>
          </ol>
        </div>{" "}
        <p className="font-semibold text-xl pt-4">User Accounts</p>
        <div className="">
          <ol className="list-decimal pl-4">
            <li>
              Registration:
              <br />
              To access certain features, you may be required to create an
              account by providing accurate, complete, and current information.
            </li>
            <li>
              Account Security:
              <br />
              You are responsible for safeguarding your account information and
              ensuring that your password remains confidential.
            </li>
            <li>
              Account Termination:
              <br />
              MANSA Digital System reserves the right to terminate or suspend
              your account and access to the service for any reason without
              prior notice or liability.
            </li>
          </ol>
        </div>
        <p className="font-semibold text-xl pt-4">User Responsibilities</p>
        <div>
          <ol className="list-decimal pl-4">
            <li>
              Compliance:
              <br />
              You agree to comply with all applicable laws and regulations
              regarding your use of the service.
            </li>
            <li>
              Prohibited Actions:
              <br />
              You may not engage in any unlawful or prohibited use of the
              service.
            </li>
            <li>
              User Content:
              <br />
              Any content you submit or upload to the service, including but not
              limited to text, images, videos, or links, must not violate any
              third-party rights.
            </li>
          </ol>
        </div>
        <p className="font-semibold text-xl pt-4">Limitations</p>
        <div>
          <ol className="list-decimal pl-4">
            <li>
              Accuracy of Information:
              <br />
              The materials on MANSA Africa are provided on an &#39;as is&#39;
              basis and may include technical, typographical, or photographic
              errors.
            </li>
            <li>
              No Liability:
              <br />
              MANSA Digital System shall not be held liable for any damages
              arising from the use or inability to use the materials on MANSA
              Africa.
            </li>
          </ol>
        </div>
        <p className="font-semibold text-xl pt-4">External Links</p>
        <div>
          <ol>
            <li>
              Third-Party Websites:
              <br />
              MANSA Africa may contain links to external websites. These links
              are provided for convenience and do not imply endorsement or
              responsibility for the content of linked sites.
            </li>
          </ol>
        </div>
        <p className="font-semibold text-xl pt-4">Termination</p>
        <div>
          <ol className="list-decimal pl-4">
            <li>
              Termination by User:
              <br />
              You may terminate your account at any time by contacting us.
            </li>
            <li>
              Termination by MANSA Digital System:
              <br />
              We may terminate or suspend your access to the service at any time
              without prior notice or liability.
            </li>
          </ol>
        </div>
        <p className="font-semibold text-xl pt-4">Governing Law</p> These Terms
        shall be governed by and construed in accordance with the laws of
        Nigeria, without regard to its conflict of law provisions.{" "}
        <p className="font-semibold text-xl pt-4">Changes to Terms</p> We
        reserve the right to update or revise these Terms at any time. By using
        this service, you agree to be bound by the current version of these
        Terms. <p className="font-semibold text-xl pt-4">Contact Us</p>If you
        have any questions, concerns, or requests regarding these Terms and
        Conditions, please contact us at mansaafrica.com.
      </div>
    </div>
  );
}

export default Terms;
