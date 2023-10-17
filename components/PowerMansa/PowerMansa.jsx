import React from "react";
import Profile1 from "@/public/images/profile-1.png";
import Profile2 from "@/public/images/profile-2.png";
import Profile3 from "@/public/images/profile-3.png";

function PowerMansa() {
  return (
    // <div className="bg-white bg-cover blue-slant">
    <div className="text-[#18181B] bg-white text-[1.1rem] pb-4">
      <div className="text-3xl font-semibold pb-4 pt-12 px-12">
        Discover the Power of MANSA Africa
      </div>

      <div className="bg-cover bl-sln-div text-[1.1rem] px-12">
        <div className="bg-white">
          <div className="lg:grid grid-cols-3 gap-8">
            <div className="bg-cover profile-1 shadow-lg rounded-lg px-4 mb-6">
              <div className="pt-[8.3rem] pb-2 font-semibold">
                Streamlined Due Diligence Intelligence
              </div>
              <div className="text-sm leading-6">
                <p className="pb-2 opacity-70">
                  MANSA Africa offers a comprehensive repository of primary data
                  crucial for conducting due diligence on African entities. Be
                  discoverable, catch the eye of prospective investors looking
                  to diversify their portfolios across the African market.
                </p>
              </div>
            </div>
            <div className="bg-cover profile-2 shadow-lg rounded-lg  px-4 mb-6">
              <div className="pt-[8.3rem] pb-2 font-semibold">
                Connect and Network
              </div>
              <div className="text-sm leading-6">
                <p className="pb-2 opacity-70">
                  Join a vibrant community of SMEs, investors, and industry
                  experts. Network, collaborate, and establish valuable
                  connections that could transform your SME&#39;s trajectory.
                  Mansa Africa is more than a platform; it&#39;s a supportive
                  ecosystem for your business aspirations.
                </p>
              </div>
            </div>
            <div className="bg-cover profile-3 shadow-lg rounded-lg  px-4 mb-6">
              <div className="pt-[8.3rem] pb-2 font-semibold">
                Enhance Regulatory Compliance
              </div>
              <div className="text-sm leading-6">
                <p className="pb-2 opacity-70">
                  By sharing your SME&#39;s data through our platform, you not
                  only gain visibility but also enhance regulatory compliance.
                  Present your business information in a standardized and
                  credible manner, aligning with global best practices and
                  making compliance seamless.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default PowerMansa;
