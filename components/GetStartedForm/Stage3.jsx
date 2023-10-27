import React, { useState } from "react";
import Image from "next/image";
import AddCircle from "@/public/images/add-circle.png";
import FormProgress3 from "../GetStartedForm/FormProgress3";
import EMProfiles from "../GetStartedForm/EMProfiles";
import Script from "next/script";
import ConfettiTest from "@/components/ConfettiTest/ConfettiTest";
import PopupForm from "./PopupForm";
import UBOProfiles from "../GetStartedForm/UBOProfiles";
// import styles from "../../app/globals.css";

function Stage3() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleShowPopup = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const [fname_1, setFname1] = useState();
  const [lname_1, setLname1] = useState();

  const [fname_2, setFname2] = useState();
  const [lname_2, setLname2] = useState();
  const [shares_2, setShares2] = useState();

  const handleProfile = () => {
    var x = document.getElementById("profile-of-beneficial-2");
    var y = document.getElementById("another-profile-btn-3");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "block";
    } else {
      x.style.display = "block";
      y.style.display = "none";
      //Clear form content
      setFname2("");
      setLname2("");
      setShares2("");
    }
  };

  return (
    <div
      data-step
      className=" app-form w-full m-[0.05rem] rounded-lg border-[0.025rem] pb-4"
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
            <ConfettiTest />
          </div>

          <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
            <div className="lg:pl-8 pl-4 pt-4 w-full">
              <span className="font-semibold">Legal First Name </span>
              <span className="text-red-700">*</span>
            </div>

            {/* ==================== */}
            {/* <Script
              src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"
              strategy="lazyOnload"
            /> */}
            {/* ==================== */}

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
              <span className="text-red-700">*</span>
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
              <span className="font-semibold">
                Percentage owned in the company
              </span>{" "}
              <span className="text-red-700">*</span>
            </div>
            <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
              <div className="items-center w-full justify-end flex">
                <input
                  className="w-full text-right pr-4"
                  type="number"
                  name="ubo_shares_1"
                  id="ubo_shares_1"
                  min={0}
                  max={100}
                  placeholder=""
                />
                <p className="absolute text-right lg:pr-4 pr-1">%</p>
              </div>
            </div>
          </div>

          {/* ++++++++++++++++++++++++++++++ */}
          <div
            id="ubo-1-err"
            className="h-4 pt-2 mb-2 flex items-center justify-center italic text-xs text-red-500"
          ></div>
          {/* ++++++++++++++++++++++++++++++ */}
        </div>

        <div className="pl-8 pb-4" id="another-profile-btn-3">
          <button
            type="button"
            className="bg-white shadow rounded-lg w-44 text-xs p-2 py-2 mt-4 flex items-center justify-center gap-1"
            // onClick={handleProfile}
            onClick={handleShowPopup}
          >
            <div className="">
              <Image src={AddCircle.src} width={12} height={12} alt="" />
            </div>
            <div className="">Add another profile</div>
          </button>

          {/* Load Profile form */}
          {isPopupVisible && (
            <PopupForm
              formName={<UBOProfiles />}
              formHeader={"UBO Profiles"}
              onClose={handleClosePopup}
            />
          )}
          {/* Stop profile form load */}
        </div>
      </div>

      {/* ============================================= */}
      {/* <div className="hidden pt-4s" id="profile-of-beneficial-2">
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
              <span className="font-semibold">
                Percentage owned in the company
              </span>
            </div>
            <div className="w-full pl-4 pt-4 items-end justify-end pr-4">
              <div className="items-center w-full justify-end flex">
                <input
                  className="w-full text-right pr-4"
                  type="number"
                  name="ubo_shares_2"
                  id="ubo_shares_2"
                  min={0}
                  max={100}
                  placeholder=""
                />
                <p className="absolute text-right lg:pr-4 pr-1">%</p>
              </div>
            </div>
          </div>

          <div className="remove-profile-3 text-sm border-t-[0.025rem] flex w-full py-2 pb-3">
            <div className="lg:pl-8 pl-4" onClick={handleProfile}>
              <button
                type="button"
                className="remove-profile-1 bg-white shadow rounded-lg w-36 text-xs p-2 py-2 mt-6"
              >
                Remove profile
              </button>
            </div>

            <div className="pl-4">
              <button
                type="button"
                className="save-profile-3 bg-white shadow rounded-lg w-36 text-xs p-2 py-2 mt-6"
                // onClick={handleMoreProfile}
                onClick={(e) => alert("Save profile (Clear page for new)")}
              >
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div> */}
      {/* ============================================= */}
      {/* <PopupForm /> */}

      <EMProfiles />
    </div>
  );
}

export default Stage3;
