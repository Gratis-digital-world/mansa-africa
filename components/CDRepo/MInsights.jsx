import Image from "next/image";
import React from "react";
import CustomNavigator from "./CustomNavigator";

function MInsights() {
  return (
    <div className="rounded-2xl bg-[#EFEFEF] text-[#1B1D29]">
      <div className="cd-repo px-12 py-8">
        <div className="lg:grid grid-cols-2 gap-8">
          <div class="main_container px-8 py-8 rounded-lg bg-[#ffffff] lg:mb-0 mb-6">
            <div className="">
              <p className="font-semibold text-lg pb-2">Market Insights</p>
              <p className="opacity-60 text-base leading-6">
                Understanding market trends and dynamics is essential for
                staying competitive. Mansa Africa&#39;s intelligence provides
                real-time insights into African markets, helping businesses
                adapt and thrive in an ever-changing environment.
              </p>
            </div>

            {/* <CustomNavigator /> */}
          </div>

          <div class="rounded-lg xbg-[#ffffff] w-full">
            <img src="/images/ch5.png" className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MInsights;
