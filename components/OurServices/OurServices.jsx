import React from "react";
import BlueSlant from "@/public/images/blue-slant.png";
import YellowSlant from "@/public/images/yellow-slant.png";

function OurServices() {
  return (
    <div className="text-[#18181B] bg-white text-[1.1rem] px-4 lg:px-12">
      <div className="text-[#0161E1] text-xl pb-4">OUR SERVICES</div>
      <div className="lg:grid grid-cols-2 gap-8 pb-8">
        <div className="rounded-2xl bg-[#1B222D] text-white lg:mb-0 mb-6">
          <div className="px-4 lg:px-12 pt-8">
            <p className="pb-2 lg:text-3xl text-2xl font-semibold">
              Due Diligence Made Easy
            </p>
            <p className="text-base leading-6 opacity-70">
              Discover all the essential information you need about African
              businesses in one place. Our MANSA repository offers a
              comprehensive database of African companies. They share their key
              information, which is carefully verified and presented in
              easy-to-read summaries. Subscribe to access their full profiles
              and detailed reports whenever you need, it&#39;s that simple!
            </p>
          </div>
          <div className="pb-12">
            <img src={BlueSlant.src} />
          </div>
        </div>
        <div className="rounded-2xl bg-[#1B222D] text-white">
          <div className="pb-4 pt-8">
            <img src={YellowSlant.src} />
          </div>

          <div className="px-4 lg:px-12">
            <p className="pb-2 lg:text-3xl text-2xl font-semibold">
              Building Bridges to Investment
            </p>
            <p className="text-base leading-6 opacity-70 lg:pb-0 pb-6">
              Connecting with potential investors is a vital step for SMEs.
              Mansa Africa acts as a bridge, allowing you to showcase your
              business to a wide network of investors seeking opportunities in
              African enterprises. Strengthen investor relations and open doors
              to funding and partnerships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
