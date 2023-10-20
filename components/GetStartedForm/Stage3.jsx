import React, { useState } from "react";
import Image from "next/image";
import AddCircle from "@/public/images/add-circle.png";
import FormProgress3 from "../GetStartedForm/FormProgress3";
import EMProfiles from "../GetStartedForm/EMProfiles";

function Stage3() {
  const [fname_1, setFname1] = useState();
  const [lname_1, setLname1] = useState();

  const [fname_2, setFname2] = useState();
  const [lname_2, setLname2] = useState();

  const handleProfile = () => {
    var x = document.getElementById("profile-of-beneficial-2");
    var y = document.getElementById("another-profile-btn-3");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "block";
    } else {
      x.style.display = "block";
      y.style.display = "none";
    }

    console.log("llwl");
  };

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
        <div className="text-sm border-[0.025rem] rounded-lg ml-8 mr-8 pbb-4 mb-4">
          <div className="pt-4 px-8 pb-3 w-full h-12">
            <span className="text-xs opacity-70" id="ubo_1" name="ubo_1">
              {fname_1} {lname_1}
            </span>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
            <div className="lg:pl-8 pl-4 pt-4 w-full">
              <span className="font-semibold">Legal First Name </span>
            </div>
            <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
              <input
                className="w-full"
                type="text"
                name="ubo_firstname_1"
                id="ubo_firstname_1"
                placeholder=""
                onChange={(e) => setFname1(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
            <div className="lg:pl-8 pl-4 pt-4 w-full">
              <span className="font-semibold">Legal Last Name </span>
            </div>
            <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
              <input
                className="w-full"
                type="text"
                name="ubo_lastname_1"
                id="ubo_lastname_1"
                placeholder=""
                onChange={(e) => setLname1(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
            <div className="lg:pl-8 pl-4 pt-4 w-full">
              <span className="font-semibold">Shares</span>
            </div>
            <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
              <input
                className="w-full"
                type="text"
                name="ubo_shares_1"
                id="ubo_shares_1"
                placeholder=""
                required
              />
            </div>
          </div>

          {/* <div className="text-sm border-t-[0.025rem] w-full py-2">
            <div className="lg:pl-8 pl-4">
              <button
                type="button"
                className="bg-white shadow rounded-lg w-36 text-xs p-2 py-2 mt-6"
              >
                Remove profile
              </button>
            </div>
          </div> */}

          <div className="remove-profile-3 text-sm border-t-[0.025rem] flex w-full py-2 pb-3 hidden">
            <div className="lg:pl-8 pl-4 hidden">
              <button
                type="button"
                className="bg-white shadow rounded-lg w-36 text-xs p-2 py-2 mt-4"
              >
                Remove profile
              </button>
            </div>

            {/* <div className="lg:pl-8 pl-4" id="another-profile-btn">
              <button
                type="button"
                className="bg-white shadow rounded-lg w-44 text-xs p-2 py-2 mt-4 flex items-center justify-center gap-1"
                onClick={handleProfile}
              >
                <div className="">
                  <Image src={AddCircle.src} width={12} height={12} alt="" />
                </div>
                <div className="">Add another profile</div>
              </button>
            </div> */}
          </div>
        </div>

        <div className="pl-8 pb-4" id="another-profile-btn-3">
          <button
            type="button"
            className="bg-white shadow rounded-lg w-44 text-xs p-2 py-2 mt-4 flex items-center justify-center gap-1"
            onClick={handleProfile}
          >
            <div className="">
              <Image src={AddCircle.src} width={12} height={12} alt="" />
            </div>
            <div className="">Add another profile</div>
          </button>
        </div>
      </div>

      <div className="hidden pt-4s" id="profile-of-beneficial-2">
        <div className="text-sm border-[0.025rem] rounded-lg ml-8 mr-8 mb-4">
          <div className="pt-4 px-8 pb-3 w-full h-12">
            <span className="text-xs opacity-70" id="ubo_2" name="ubo_2">
              {fname_2} {lname_2}
            </span>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
            <div className="lg:pl-8 pl-4 pt-4 w-full">
              <span className="font-semibold">Legal First Name </span>
            </div>
            <div className="w-full pl-4 pt-4 items-end justify-end pr-4">
              <input
                className="w-full"
                type="text"
                name="ubo_firstname_2"
                id="ubo_firstname_2"
                placeholder=""
                onChange={(e) => setFname2(e.target.value)}
              />
            </div>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
            <div className="lg:pl-8 pl-4 pt-4 w-full">
              <span className="font-semibold">Legal Last Name </span>
            </div>
            <div className="w-full pl-4 pt-4 items-end justify-end pr-4">
              <input
                className="w-full"
                type="text"
                name="ubo_lastname_2"
                id="ubo_lastname_2"
                onChange={(e) => setLname2(e.target.value)}
                placeholder=""
              />
            </div>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
            <div className="lg:pl-8 pl-4 pt-4 w-full">
              <span className="font-semibold">Shares</span>
            </div>
            <div className="w-full pl-4 pt-4 items-end justify-end pr-4">
              <input
                className="w-full"
                type="text"
                name="ubo_shares_2"
                id="ubo_shares_2"
                placeholder=""
              />
            </div>
          </div>

          <div className="remove-profile-3 text-sm border-t-[0.025rem] flex w-full py-2 pb-3">
            <div className="lg:pl-8 pl-4">
              <button
                type="button"
                className="bg-white shadow rounded-lg w-36 text-xs p-2 py-2 mt-4"
                onClick={handleProfile}
              >
                Remove profile
              </button>
            </div>
          </div>
        </div>

        {/* <div className="pl-8 pb-6">
          <button
            type="button"
            className="bg-white shadow rounded-lg w-44 text-xs p-2 py-2 mt-4 flex items-center justify-center gap-1"
          >
            <div className="">
              <Image src={AddCircle.src} width={12} height={12} alt="" />
            </div>
            <div className="">Add another profile</div>
          </button>
        </div> */}

        {/* <div className="lg:pl-8 pl-4 pb-4" id="-3">
          <button
            type="button"
            className="bg-white shadow rounded-lg w-44 text-xs p-2 py-2 mt-4 flex items-center justify-center gap-1"
            onClick={handleProfile}
          >
            <div className="">
              <Image src={AddCircle.src} width={12} height={12} alt="" />
            </div>
            <div className="">Add another profile</div>
          </button>
        </div> */}
      </div>

      <EMProfiles />
    </div>
  );
}

export default Stage3;
