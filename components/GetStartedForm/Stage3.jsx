import React from "react";
import Image from "next/image";
import AddCircle from "@/public/images/add-circle.png";
import FormProgress3 from "../GetStartedForm/FormProgress3";
import EMProfiles from "../GetStartedForm/EMProfiles";

function Stage3() {
  return (
    <div
      data-step
      className="app-form w-full m-[0.05rem] rounded-lg border-[0.025rem] pb-4"
    >
      <FormProgress3 />

      <div className="text-sm border-t-[0.025rem] w-full pb-4">
        <div className="px-8 pt-4 w-full">
          <span className="font-semibold">
            Declaration of Ultimate Beneficial Owners (UBO’s)
          </span>{" "}
          <span className="italic">
            (If your organization owns shares in another company, please provide
            the names of the individuals who own or control that company for
            transparency and compliance)
          </span>
        </div>
      </div>

      <div className="profile-of-beneficial-1">
        <div className="text-sm border-[0.025rem] rounded-lg ml-8 mr-8 pb-4">
          <div className="pt-4 px-4 pb-3 w-full">
            <span className="text-xs opacity-70" id="ubo_1" name="ubo_1">
              John Doe
            </span>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full flex py-2 pb-6">
            <div className="pl-8 pt-4 w-full">
              <span className="font-semibold">Legal First Name </span>
            </div>
            <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
              <input
                className="w-full"
                type="text"
                name="ubo_firstname_1"
                id="ubo_firstname_1"
                placeholder=""
              />
            </div>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full flex py-2 pb-6">
            <div className="pl-8 pt-4 w-full">
              <span className="font-semibold">Legal Last Name </span>
            </div>
            <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
              <input
                className="w-full"
                type="text"
                name="ubo_lastname_1"
                id="ubo_lastname_1"
                placeholder=""
              />
            </div>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full flex py-2 pb-6">
            <div className="pl-8 pt-4 w-full">
              <span className="font-semibold">Shares</span>
            </div>
            <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
              <input
                className="w-full"
                type="text"
                name="ubo_shares_1"
                id="ubo_shares_1"
                placeholder=""
              />
            </div>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full flex py-2 xb-6">
            <div className="pl-8">
              <button
                type="button"
                className="bg-white shadow rounded-lg w-36 text-xs p-2 py-2 mt-6"
              >
                Remove profile
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-of-beneficial-2">
        <div className="text-sm border-[0.025rem] rounded-lg ml-8 mr-8 pb-4">
          <div className="pt-4 px-4 pb-3 w-full">
            <span className="text-xs opacity-70" id="ubo_2" name="ubo_2">
              John Doe
            </span>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full flex py-2 pb-6">
            <div className="pl-8 pt-4 w-full">
              <span className="font-semibold">Legal First Name </span>
            </div>
            <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
              <input
                className="w-full"
                type="text"
                name="ubo_firstname_2"
                id="ubo_firstname_2"
                placeholder=""
              />
            </div>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full flex py-2 pb-6">
            <div className="pl-8 pt-4 w-full">
              <span className="font-semibold">Legal Last Name </span>
            </div>
            <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
              <input
                className="w-full"
                type="text"
                name="ubo_lastname_2"
                id="ubo_lastname_2"
                placeholder=""
              />
            </div>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full flex py-2 pb-6">
            <div className="pl-8 pt-4 w-full">
              <span className="font-semibold">Shares</span>
            </div>
            <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
              <input
                className="w-full"
                type="text"
                name="ubo_shares_2"
                id="ubo_shares_2"
                placeholder=""
              />
            </div>
          </div>

          <div className="remove-profile-3 text-sm border-t-[0.025rem] w-full flex py-2 pb-3">
            <div className="pl-8">
              <button
                type="button"
                className="bg-white shadow rounded-lg w-36 text-xs p-2 py-2 mt-6"
              >
                Remove profile
              </button>
            </div>
          </div>
        </div>

        <div className="pl-8 pb-6">
          <button
            type="button"
            className="bg-white shadow rounded-lg w-44 text-xs p-2 py-2 mt-4 flex items-center justify-center gap-1"
          >
            <div className="">
              <Image src={AddCircle.src} width={12} height={12} alt="" />
            </div>
            <div className="">Add another profile</div>
          </button>
        </div>
      </div>

      <EMProfiles />
    </div>
  );
}

export default Stage3;

// http://localhost:3000/start?company_logo=&cert_of_inc=&mou=&tax_cert=&firstname_1=&lastname_1=&date_of_birth_1=&country_1=&role_1=&percentage_owned_1=&firstname_2=&lastname_2=&date_of_birth_2=&country_2=&role_2=&percentage_owned_2=&ubo_firstname_1=&ubo_lastname_1=&ubo_shares_1=&ubo_firstname_2=&ubo_lastname_2=&ubo_shares_2=&authorization_letter=&questionnaire=&con_agreement=&asoc_mem_1=&asoc_mem_2=&asoc_mem_3=&asoc_mem_4=&asoc_mem_5=
