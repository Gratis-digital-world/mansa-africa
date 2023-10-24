import React, { useState } from "react";
import Image from "next/image";
import FormProgress2 from "../GetStartedForm/FormProgress2";
import Countries from "../Countries/Countries";
import AddCircle from "@/public/images/add-circle.png";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";

function Stage2() {
  const [p_profile_1, setPProfile1] = useState();
  const [p_profile_2, setPProfile2] = useState();

  const [powned, setPOwned1] = useState();
  const handleProfile = () => {
    var x = document.getElementById("another-profile-2");
    var y = document.getElementById("another-profile-btn-2");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "block";
    } else {
      x.style.display = "block";
      y.style.display = "none";
    }
  };

  const handleStage1 = (e) => {
    e.preventDefault();
    // console.log("clicked");
    // alert("Clicked !");
  };

  return (
    <div
      data-step
      className="active app-form w-full m-[0.05rem] rounded-lg border-[0.025rem] pb-4"
    >
      <FormProgress2 />

      <div className="first-profile">
        <div className="text-sm border-[0.025rem] rounded-lg ml-8 mr-8 pb-4">
          <div className="pt-4 px-8 pb-3 w-full">
            {/* <span className="text-xs h-8">Profile of owner</span> */}
            <span className="text-xs h-8">{p_profile_1} Profile</span>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
            <div className="lg:pl-8 pl-4 pt-4 w-full">
              <span className="font-semibold">Role at the business </span>
              <span className="text-red-700">*</span>
            </div>
            <div className="w-full pl-4 pt-4 items-end justify-end pr-4">
              <select
                className="w-full"
                name="role_1"
                id="role_1"
                onChange={(e) => setPProfile1(e.target.value)}
              >
                <option value={""}></option>
                <option value={"Owner"}>Owner</option>
                <option value={"Director"}>Director</option>
                <option value={"Shareholder"}>Shareholder</option>
              </select>
            </div>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
            <div className="lg:pl-8 pl-4 pt-4 w-full">
              <span className="font-semibold">Legal First Name </span>
              <span className="text-red-700">*</span>
            </div>
            <div className="w-full pl-4 pt-4 items-end justify-end pr-4">
              <input
                className="w-full"
                type="text"
                name="firstname_1"
                id="firstname_1"
                placeholder=""
              />
            </div>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
            <div className="lg:pl-8 pl-4 pt-4 w-full">
              <span className="font-semibold">Legal Last Name </span>
              <span className="text-red-700">*</span>
            </div>
            <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
              <input
                className="w-full"
                type="text"
                name="lastname_1"
                id="lastname_1"
                placeholder=""
              />
            </div>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
            <div className="lg:pl-8 pl-4 pt-4 w-full">
              <span className="font-semibold">Date of birth</span>
              <span className="text-red-700">*</span>
            </div>
            <div className="w-full pl-4 pt-4 items-end justify-end pr-4">
              <input
                className="w-full uppercase"
                type="date"
                name="date_of_birth_1"
                id="date_of_birth_1"
                // placeholder="dd-mm-yyyy"
              />
            </div>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
            <div className="lg:pl-8 pl-4 pt-4 w-full">
              <span className="font-semibold">Country of origin </span>
              <span className="text-red-700">*</span>
            </div>
            <div className="w-full pl-4 pt-4 items-end justify-end pr-4">
              <select className="w-full pl-2" id="country_1" name="country_1">
                <Countries />
              </select>
            </div>
          </div>

          <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pxb-6">
            <div className="lg:pl-8 pl-4 pt-4 w-full">
              <span className="font-semibold">
                Percentage owned in the company{" "}
              </span>
              <span className="text-red-700">*</span>
            </div>
            <div className="w-full pl-4 pt-4 items-end justify-end pr-4">
              <div className="items-center justify-end flex">
                <input
                  className="w-full text-right pr-4"
                  type="number"
                  name="percentage_owned_1"
                  id="percentage_owned_1"
                  min={0}
                  max={100}
                  placeholder=""
                />
                <p className="absolute text-right pr-4">%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:pl-8 pl-4" id="another-profile-btn-2">
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

      <div id="another-profile-2" className="add-another-profile pt-4 hidden">
        <div className="second-profile">
          <div className="text-sm border-[0.025rem] rounded-lg ml-8 mr-8 pb-4">
            <div className="pt-4 px-8 pb-3 w-full">
              <span className="text-xs">{p_profile_2} Profile</span>
            </div>

            <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
              <div className="lg:pl-8 pl-4 pt-4 w-full">
                <span className="font-semibold">Role at the business </span>
                <span className="text-red-700">*</span>
              </div>
              <div className="w-full pl-4 pt-4 items-end justify-end pr-4">
                <select
                  className="w-full"
                  name="role_2"
                  id="role_2"
                  onChange={(e) => setPProfile2(e.target.value)}
                >
                  <option value={""}></option>
                  <option value={"Owner"}>Owner</option>
                  <option value={"Director"}>Director</option>
                  <option value={"Shareholder"}>Shareholder</option>
                </select>
              </div>
            </div>

            <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
              <div className="lg:pl-8 pl-4 pt-4 w-full">
                <span className="font-semibold">Legal First Name </span>
                <span className="text-red-700">*</span>
              </div>
              <div className="w-full pl-4 pt-4 items-end justify-end pr-4">
                <input
                  className="w-full"
                  type="text"
                  name="firstname_2"
                  id="firstname_2"
                  placeholder=""
                />
              </div>
            </div>

            <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
              <div className="lg:pl-8 pl-4 pt-4 w-full">
                <span className="font-semibold">Legal Last Name </span>
                <span className="text-red-700">*</span>
              </div>
              <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
                <input
                  className="w-full"
                  type="text"
                  name="lastname_2"
                  id="lastname_2"
                  placeholder=""
                />
              </div>
            </div>

            <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
              <div className="lg:pl-8 pl-4 pt-4 w-full">
                <span className="font-semibold">Date of birth</span>
                <span className="text-red-700">*</span>
              </div>
              <div className="w-full pl-4 pt-4 items-end justify-end pr-4">
                <input
                  className="w-full uppercase"
                  type="date"
                  name="date_of_birth_2"
                  id="date_of_birth_2"
                  // placeholder="dd-mm-yyyy"
                />
              </div>
            </div>

            <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
              <div className="lg:pl-8 pl-4 pt-4 w-full">
                <span className="font-semibold">Country of origin </span>
                <span className="text-red-700">*</span>
              </div>
              <div className="w-full pl-4 pt-4 items-end justify-end pr-4">
                <select className="w-full pl-2" id="country_2" name="country_2">
                  <Countries />
                </select>
              </div>
            </div>

            <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
              <div className="lg:pl-8 pl-4 pt-4 w-full">
                <span className="font-semibold">
                  Percentage owned in the company{" "}
                </span>
                <span className="text-red-700">*</span>
              </div>
              <div className="w-full pl-4 pt-4 items-end justify-end pr-4">
                <div className="items-center justify-end flex">
                  <input
                    className="w-full text-right pr-4"
                    type="number"
                    name="percentage_owned_2"
                    id="percentage_owned_2"
                    min={0}
                    max={100}
                    placeholder=""
                  />
                  <p className="absolute text-right pr-4">%</p>
                </div>
              </div>
            </div>

            <div
              className="text-sm border-t-[0.025rem] w-full flex py-2 xb-6"
              onClick={handleProfile}
            >
              <div className="lg:pl-8 pl-4">
                <button
                  type="button"
                  className="remove-profile-1 bg-white shadow rounded-lg w-36 text-xs p-2 py-2 mt-6"
                >
                  Remove profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ++++++++++++++++++++++++++++++ */}
      <div
        id="stage2-err"
        className="h-4 pt-2 flex items-center justify-center italic text-xs text-red-500"
      ></div>
      {/* ++++++++++++++++++++++++++++++ */}

      <div className="text-base mt-4 border-t-[0.025rem] w-full pb-4">
        <div className="px-8 w-full flex items-center justify-center gap-4">
          <PrevButton />

          <NextButton caption={"Next"} />
        </div>
      </div>
    </div>
  );
}

export default Stage2;
