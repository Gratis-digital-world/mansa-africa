"use client";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Script from "next/script";

import Stage1 from "../GetStartedForm/Stage1";
import Stage2 from "../GetStartedForm/Stage2";
import Stage3 from "../GetStartedForm/Stage3";

function GetStartedForm() {
  return (
    <div className="bg-white">
      <div className="lg:px-12 px-4 pt-4">
        <Navbar />
      </div>
      <div className="lg:px-48 px-2 pt-8 pb-16">
        <div className="text-center pb-8">
          <p className="font-semibold text-3xl text-center">Get Started</p>
          <p className="text-xs opacity-70 pt-2">
            Provide all necessary information and documents to get started.
          </p>
        </div>

        <Script src="/scripts/progress.js" strategy="lazyOnload" />

        <form id="mansa_form_main" name="mansa_form_main" data-multi-step>
          <div className="shadow-lg w-full rounded-lg border-[0.025rem]">
            {/* <div className="w-full m-[0.05rem] rounded-lg border-[0.025rem]"> */}
            <Stage1 />
            <Stage2 />
            {/* <Stage3 /> */}

            {/* <div className="w-full m-[0.05rem] rounded-lg border-[0.025rem] pb-4">
              <FormProgress2 />

              <div className="text-sm border-t-[0.025rem] w-full flex pb-4">
                <div className="pl-8 pt-4 w-full">
                  <span className="font-semibold">Upload Logo </span>
                  <span className="italic">
                    (Upload your company’s logo)
                  </span>{" "}
                  <span className="text-red-700">*</span>
                </div>
                <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
                  <Image src={UploadLogo.src} width={150} height={100} alt="" />
                </div>
              </div>

              <div className="text-sm border-t-[0.025rem] w-full flex pb-4">
                <div className="pl-8 pt-4 w-full font-semibold">
                  Certificate of Incorporation{" "}
                  <span className="text-red-700">*</span>
                </div>
                <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
                  <Image
                    src={ClickToUpload.src}
                    width={150}
                    height={100}
                    alt=""
                  />
                </div>
              </div>

              <div className="text-sm border-t-[0.025rem] w-full flex pb-4">
                <div className="pl-8 pt-4 w-full font-semibold">
                  Memorandum & Articles of Association
                </div>
                <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
                  <Image src={Uploading.src} width={150} height={100} alt="" />
                </div>
              </div>

              <div className="text-sm border-t-[0.025rem] w-full flex pb-24">
                <div className="pl-8 pt-4 w-full font-semibold">
                  Tax certificate
                </div>
                <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
                  <Image src={Uploading.src} width={150} height={100} alt="" />
                </div>
              </div>

              <div className="text-base border-t-[0.025rem] w-full flex items-center justify-center pb-4">
                <button className="bg-[#010DFF] rounded-lg text-white  w-1/2 p-2 py-4 mt-6">
                  Next
                </button>
              </div>
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default GetStartedForm;
