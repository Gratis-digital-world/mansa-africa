import React from "react";
import Image from "next/image";
import FormProgress2 from "../GetStartedForm/FormProgress2";
import Countries from "../Countries/Countries";
import AddCircle from "@/public/images/add-circle.png";

function Stage2() {
  return (
    <div
      data-step
      className="app-form w-full m-[0.05rem] rounded-lg border-[0.025rem] pb-4"
    >
      <FormProgress2 />

      <div className="profile-of-owner">
        <div className="text-sm border-[0.025rem] rounded-lg ml-8 mr-8 pb-4">
          <div className="pt-4 px-4 pb-3 w-full">
            <span className="">Profile of owner</span>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full flex py-2 pb-6">
            <div className="pl-8 pt-4 w-full">
              <span className="font-semibold">Legal First Name </span>
              <span className="text-red-700">*</span>
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
              <span className="text-red-700">*</span>
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
              <span className="font-semibold">Date of birth</span>
              <span className="text-red-700">*</span>
            </div>
            <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
              <input
                className="w-full uppercase"
                type="date"
                name="date_of_birth"
                id="date_of_birth"
                placeholder="dd-mm-yyyy"
              />
            </div>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full flex py-2 pb-6">
            <div className="pl-8 pt-4 w-full">
              <span className="font-semibold">Country of origin </span>
              <span className="text-red-700">*</span>
            </div>
            <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
              <select className="w-full pl-2" id="country" name="country">
                <Countries />
              </select>
            </div>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full flex py-2 pb-6">
            <div className="pl-8 pt-4 w-full">
              <span className="font-semibold">Role at the business </span>
              <span className="text-red-700">*</span>
            </div>
            <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
              <input
                className="w-full"
                type="text"
                name="role"
                id="role"
                placeholder=""
              />
            </div>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full flex py-2 pb-6">
            <div className="pl-8 pt-4 w-full">
              <span className="font-semibold">
                Percentage owned in the company{" "}
              </span>
              <span className="text-red-700">*</span>
            </div>
            <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
              <input
                className="w-full"
                type="text"
                name="percentage_owned"
                id="percentage_owned"
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

      <div className="add-another-profile pt-4">
        <div className="text-sm border-[0.025rem] rounded-lg ml-8 mr-8 pb-4">
          <div className="pt-4 px-4 pb-3 w-full">
            <span className="">Add a profile</span>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full flex py-2 pb-6">
            <div className="pl-8 pt-4 w-full">
              <span className="font-semibold">Legal First Name </span>
              <span className="text-red-700">*</span>
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
              <span className="text-red-700">*</span>
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
              <span className="font-semibold">Date of birth</span>
              <span className="text-red-700">*</span>
            </div>
            <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
              <input
                className="w-full uppercase"
                type="date"
                name="date_of_birth"
                id="date_of_birth"
                placeholder="dd-mm-yyyy"
              />
            </div>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full flex py-2 pb-6">
            <div className="pl-8 pt-4 w-full">
              <span className="font-semibold">Country of origin </span>
              <span className="text-red-700">*</span>
            </div>
            <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
              <select className="w-full pl-2" id="country" name="country">
                <Countries />
              </select>
            </div>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full flex py-2 pb-6">
            <div className="pl-8 pt-4 w-full">
              <span className="font-semibold">Role at the business </span>
              <span className="text-red-700">*</span>
            </div>
            <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
              <input
                className="w-full"
                type="text"
                name="role"
                id="role"
                placeholder=""
              />
            </div>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full flex py-2 pb-6">
            <div className="pl-8 pt-4 w-full">
              <span className="font-semibold">
                Percentage owned in the company{" "}
              </span>
              <span className="text-red-700">*</span>
            </div>
            <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
              <input
                className="w-full"
                type="text"
                name="percentage_owned"
                id="percentage_owned"
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
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="text-base border-t-[0.025rem] w-full flex items-center justify-center pb-4">
        <button className="bg-[#010DFF] rounded-lg text-white  w-1/2 p-2 py-4 mt-6">
          Next
        </button>
      </div> */
}
export default Stage2;
