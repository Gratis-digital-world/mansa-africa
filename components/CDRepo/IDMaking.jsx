import Image from "next/image";
import React from "react";
import CustomNavigator from "./CustomNavigator";

function IDMaking() {
  return (
    <div className="rounded-2xl bg-[#EFEFEF] text-[#1B1D29]">
      <div className="cd-repo lg:px-12 px-4 lg:py-8 py-4">
        <div className="lg:grid grid-cols-2 gap-8">
          <div class="main_container lg:px-8 px-4 lg:py-8 py-4 rounded-lg bg-[#0062E4] text-white lg:mb-0 mb-6">
            <div className="">
              <p className="font-semibold text-lg pb-2">
                Comprehensive Data Repository
              </p>
              <p className="opacity-60 text-base leading-6">
                Mansa Africa has invested significant efforts in collecting,
                organizing, and updating data related to African businesses,
                industries, and market dynamics. This repository is a goldmine
                of information that can be utilized by SMEs and investors alike
                to gain a deeper understanding of the African business
                landscape.
              </p>
            </div>

            {/* <CustomNavigator /> */}
          </div>

          <div class="rounded-lg xbg-[#ffffff] w-full">
            <img src="/images/ch3.png" className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IDMaking;
