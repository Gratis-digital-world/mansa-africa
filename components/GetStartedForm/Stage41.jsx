import React, { useState } from "react";
import NextButton from "./NextButton";
import Link from "next/link";
import CountryWithCode from "@/components/CountryWithCode/CountryWithCode";

function Stage41() {
  return (
    <div
      data-step
      className="active app-form pt-8 w-full m-[0.05rem] rounded-lg border-[0.025rem] pb-4"
    >
      {/* <div className="h-4"></div> */}

      <div className="contact-profile">
        <div className="text-sm border-[0.025rem] rounded-lg ml-8 mr-8 pb-4">
          <div className="pt-4 px-8 pb-3 w-full">
            <span className="text-xs h-8">Contact Person</span>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
            <div className="lg:pl-8 pl-4 pt-4 w-full">
              <span className="font-semibold">First name </span>
              <span className="text-red-700">*</span>
            </div>
            <div className="w-full pl-4 pt-4 items-end justify-end pr-4">
              <input
                className="w-full"
                type="text"
                name="c_firstname"
                id="c_firstname"
                placeholder=""
              />
            </div>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
            <div className="lg:pl-8 pl-4 pt-4 w-full">
              <span className="font-semibold">Last name </span>
              <span className="text-red-700">*</span>
            </div>
            <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
              <input
                className="w-full"
                type="text"
                name="c_lastname"
                id="c_lastname"
                placeholder=""
              />
            </div>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
            <div className="lg:pl-8 pl-4 pt-4 w-full">
              <span className="font-semibold">Phone number </span>
              <span className="text-red-700">*</span>
            </div>
            <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
              <CountryWithCode select_id={"c_phone_number"} />

              {/* <input
                className="w-full"
                type="text"
                name="c_phone_number"
                id="c_phone_number"
                placeholder=""
              /> */}
            </div>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
            <div className="lg:pl-8 pl-4 pt-4 w-full">
              <span className="font-semibold">Email address </span>
              <span className="text-red-700">*</span>
            </div>
            <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
              <input
                className="w-full"
                type="email"
                name="c_email_address"
                id="c_email_address"
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="text-base mt-4 border-t-[0.025rem] w-full pb-4">
        <div className="px-8 w-full text-center">
          <NextButton caption={"Next"} />
        </div>
      </div> */}

      <div className="text-base mt-4 border-t-[0.025rem] text-center justify-center flex w-full pb-4">
        <div className="lg:flex gap-4 px-8 lg:w-1/2 w-full">
          <NextButton caption={"Next"} />
        </div>
      </div>
    </div>
  );
}

export default Stage41;
