import Image from "next/image";
import React from "react";
import CustomNavigator from "./CustomNavigator";

function AADiscovery() {
  return (
    <div className="rounded-2xl bg-[#EFEFEF] text-[#1B1D29]">
      <div className="cd-repo px-12 py-8">
        <div className="lg:grid grid-cols-2 gap-8">
          <div class="main_container px-8 py-8 rounded-lg bg-[#1B222D] text-white lg:mb-0 mb-6">
            <div className="">
              <p className="font-semibold text-lg pb-2">
                Accessibility and Discoverability{" "}
              </p>
              <p className="opacity-60 text-base leading-6">
                For African SMEs, being discoverable is the first step towards
                attracting investment. Mansa Africa provides a platform where
                SMEs can showcase their potential to a global audience of
                investors. This accessibility facilitates meaningful
                connections, making it easier for SMEs to catch the eye of
                prospective investors.
              </p>
            </div>

            {/* <CustomNavigator /> */}
          </div>

          <div class="rounded-lg xbg-[#ffffff] w-full">
            <img src="/images/ch2.png" className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AADiscovery;
