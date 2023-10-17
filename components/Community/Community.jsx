import React from "react";

function Community() {
  return (
    <div className="text-[#18181B] bg-white text-[1.1rem] px-12 pb-12">
      <div>
        <div className="rounded-2xl bg-[#1B222D] text-white">
          <div className="px-12 py-8">
            <p className="pb-2 text-3xl font-semibold">
              Want to be part of our <br />
              community?
            </p>
            <p className="text-base leading-6 opacity-60 pb-4">
              Join Mansa Africa today to unlock a world of investment prospects,
              broaden your network, and establish your SME&#39;s presence on a
              platform dedicated to connecting African businesses with global
              opportunities.
            </p>
            <div className="lg:grid grid-cols-2 gap-8">
              <div className="px-4 py-4 rounded-lg border-r-0 border-b-0 border-[0.05rem] border-slate-700 bg-[#171D26] lg:mb-0 mb-6">
                <p className="font-semibold text-2xl pb-2">Agent</p>
                <p className="opacity-60 text-sm leading-6">
                  Agents are like helpers on the platform. They assist
                  contributors in sharing their data on MANSA Africa. They can
                  be individuals or organizations that act on behalf of others
                  to ensure the right information is properly presented on the
                  platform. Agents help in the process of getting data onto
                  MANSA Africa in a smooth and accurate manner.
                </p>
              </div>

              <div className="px-4 py-4 rounded-lg border-r-0 border-b-0 border-[0.05rem] border-slate-700 bg-[#171D26]">
                <p className="font-semibold text-2xl pb-2">Verifier</p>
                <p className="opacity-60 text-sm leading-6">
                  Verifiers play a crucial role in ensuring the accuracy and
                  reliability of the information available on MANSA Africa. They
                  are often organizations that have the expertise and authority
                  to validate the data. Verifiers confirm that the shared
                  information is correct, adding a layer of credibility to the
                  platform and fostering trust among its users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
