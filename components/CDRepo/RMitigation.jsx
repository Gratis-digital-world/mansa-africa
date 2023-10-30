import Image from "next/image";
import React from "react";
import CustomNavigator from "./CustomNavigator";

function RMitigation() {
  return (
    <div className="rounded-2xl bg-[#EFEFEF] text-[#1B1D29]">
      <div className="cd-repo px-12 py-8">
        <div className="lg:grid grid-cols-2 gap-8">
          <div class="main_container px-8 py-8 rounded-lg bg-[#F3D31D] lg:mb-0 mb-6">
            <div className="">
              <p className="font-semibold text-lg pb-2">Risk Mitigation</p>
              <p className="opacity-60 text-base leading-6">
                For investors seeking opportunities in the African market,
                mitigating risks is paramount. Mansa Africa&#39;s data-driven
                due diligence process helps investors assess the risks
                associated with potential investments, ultimately leading to
                more secure and profitable decisions.
              </p>
            </div>

            {/* <CustomNavigator /> */}
          </div>

          <div class="rounded-lg xbg-[#ffffff] w-full">
            <img src="/images/ch4.png" className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RMitigation;
