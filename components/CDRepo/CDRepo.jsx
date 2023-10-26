import React from "react";

function CDRepo() {
  return (
    <div className="text-[#18181B] bg-white text-[1.1rem] px-12 pb-12">
      <div>
        <div className="rounded-2xl bg-[#EFEFEF] text-[#1B1D29]">
          <div className="px-12 py-8">
            <div className="lg:grid grid-cols-2 gap-8 h-96">
              <div class="xcontainer px-8 py-8 rounded-lg bg-[#ffffff] lg:mb-0 mb-6">
                <div>
                  <p className="font-semibold text-lg pb-2">
                    Comprehensive Data Repository
                  </p>
                  <p className="opacity-60 text-sm leading-6">
                    Comprehensive Data Repository:Mansa Africa has invested
                    significant efforts in collecting, organizing, and updating
                    data related to African businesses, industries, and market
                    dynamics. This repository is a goldmine of information that
                    can be utilized by SMEs and investors alike to gain a deeper
                    understanding of the African business landscape.
                  </p>
                </div>

                {/* <div className="bottom_content mt-auto border-[0.025rem] rounded-full  w-full"> */}
                <div className="xbottom_content">Align bottom</div>
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

export default CDRepo;
