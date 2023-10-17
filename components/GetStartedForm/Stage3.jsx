import React from "react";
import Image from "next/image";
import AddCircle from "@/public/images/add-circle.png";
import FormProgress3 from "../GetStartedForm/FormProgress3";

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
            <span className="">John Doe</span>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full flex py-2 pb-6">
            <div className="pl-8 pt-4 w-full">
              <span className="font-semibold">Legal First Name </span>
            </div>
            <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
              <input
                className="w-full"
                type="text"
                name="firstname"
                id="firstname"
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
                name="lastname"
                id="lastname"
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
                name="shares"
                id="shares"
                placeholder=""
              />
            </div>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full flex py-2 xb-6">
            <div className="pl-8">
              <button className="bg-white shadow rounded-lg w-36 text-xs p-2 py-2 mt-6">
                Remove profile
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-of-beneficial-2">
        <div className="text-sm border-[0.025rem] rounded-lg ml-8 mr-8 pb-4">
          <div className="pt-4 px-4 pb-3 w-full">
            <span className="">John Doe</span>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full flex py-2 pb-6">
            <div className="pl-8 pt-4 w-full">
              <span className="font-semibold">Legal First Name </span>
            </div>
            <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
              <input
                className="w-full"
                type="text"
                name="firstname"
                id="firstname"
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
                name="lastname"
                id="lastname"
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
                name="shares"
                id="shares"
                placeholder=""
              />
            </div>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full flex py-2 pb-3">
            <div className="pl-8">
              <button className="bg-white shadow rounded-lg w-36 text-xs p-2 py-2 mt-6">
                Remove profile
              </button>
            </div>
          </div>
        </div>

        <div className="pl-8 pb-6">
          <button className="bg-white shadow rounded-lg w-44 text-xs p-2 py-2 mt-4 flex items-center justify-center gap-1">
            <div className="">
              <Image src={AddCircle.src} width={12} height={12} alt="" />
            </div>
            <div className="">Add another profile</div>
          </button>
        </div>

        {/* <div className="text-base border-t-[0.025rem] w-full pb-4">
          <div className="px-8 w-full flex items-center justify-center gap-4">
            <button
              type="button"
              data-previous
              className="bg-white rounded-lg text-black shadow-md w-1/2 p-2 py-4 mt-6"
            >
              Go Back
            </button>

            <button
              data-next
              className="bg-[#010DFF] rounded-lg text-white shadow-md w-1/2 p-2 py-4 mt-6"
              type="button"
            >
              Next
            </button>
          </div>
        </div> */}
      </div>

      <div className="profile-of-beneficial-2">
        <div className="text-sm border-t-[0.025rem] w-full pb-4">
          <div className="px-8 pt-4 w-full">
            <span className="font-semibold">Executive Management Profiles</span>{" "}
            <span className="italic">(If available)</span>
          </div>
        </div>

        <div className="text-sm border-[0.025rem] rounded-lg ml-8 mr-8 pb-2">
          <div className="pt-4 px-4 pb-3 w-full">
            <span className="">John Doe</span>
          </div>

          {/* <div className="text-sm border-t-[0.025rem] w-full flex py-2 pb-6">
            <div className="pl-8 pt-4 w-full">
              <span className="font-semibold">Legal First Name </span>
            </div>
            <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
              <input
                className="w-full"
                type="text"
                name="firstname"
                id="firstname"
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
                name="lastname"
                id="lastname"
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
                name="shares"
                id="shares"
                placeholder=""
              />
            </div>
          </div> 

          <div className="text-sm border-t-[0.025rem] w-full flex py-2 pb-3">
            <div className="pl-8">
              <button className="bg-white shadow rounded-lg w-36 text-xs p-2 py-2 mt-6">
                Remove profile
              </button>
            </div>
          </div>*/}
        </div>

        <div className="pl-8 pb-6">
          <button className="bg-white shadow rounded-lg w-44 text-xs p-2 py-2 mt-4 flex items-center justify-center gap-1">
            <div className="">
              <Image src={AddCircle.src} width={12} height={12} alt="" />
            </div>
            <div className="">Add another profile</div>
          </button>
        </div>

        <div className="text-base border-t-[0.025rem] w-full pb-4">
          <div className="px-8 w-full flex items-center justify-center gap-4">
            <button
              type="button"
              data-previous
              className="bg-white rounded-lg text-black shadow-md w-1/2 p-2 py-4 mt-6"
            >
              Go Back
            </button>

            <button
              data-next
              className="bg-[#010DFF] rounded-lg text-white shadow-md w-1/2 p-2 py-4 mt-6"
              type="button"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stage3;
