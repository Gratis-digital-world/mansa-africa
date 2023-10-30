import React, { useState, useEffect } from "react";
import Image from "next/image";
import FormProgress2 from "../GetStartedForm/FormProgress2";
import Countries from "../Countries/Countries";
import AddCircle from "@/public/images/add-circle.png";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import ODSProfile from "./ODSProfile";

function Stage2() {
  const removeProfile = (profileId) => {
    // var x = document.getElementById(`profile-id-${profileId}`);
    var x = document.getElementById(`profile-id`);

    console.log(`profile-id-${profileId}`);

    // var x = document.getElementById(`profile-id`);
    // if (x.style.display == "block") {
    //   // console.log(profileId + "xvvxx");
    //   console.log("x");
    //   x.style.display = "none";
    // }
    // setODSPRole("");
    // setODSPFname("");
    // setODSPLname("");
    // setODSPDob("");
    // setODSPCountry("");
    // setODSPPercentage("");

    // } else {
    //   x.style.display = "block";
    // }
  };

  const [components, setComponents] = useState([]);
  const [nextComponentId, setNextComponentId] = useState(1);

  const addComponent = () => {
    const newComponent = { id: nextComponentId };
    setComponents([...components, newComponent]);
    setNextComponentId(nextComponentId + 1);
  };

  const removeComponent = (id) => {
    const updatedComponents = components.filter(
      (component) => component.id !== id
    );
    setComponents(updatedComponents);
  };

  const [p_profile_1, setPProfile1] = useState();

  // const [role2, setPODSRole2] = useState();
  // const [PODSFname2, setPODSFname2] = useState();
  // const [PODSLname2, setPODSLname2] = useState();
  // const [PODSDob2, setPODSDob2] = useState();
  // const [PODSCountry2, setPODSCountry2] = useState();
  // const [PODSPercentage2, setPODSPercentage2] = useState();

  // const [powned, setPOwned1] = useState();

  const adultMin = new Date(
    new Date().setFullYear(new Date().getFullYear() - 18)
  )
    .toISOString()
    .slice(0, 10);

  const minYear = new Date().getFullYear() - 18;
  const maxYear = minYear + 200;

  const [dob, setDob] = useState();
  const [dDob, setDdob] = useState();
  const [mDob, setMdob] = useState();
  const [yDob, setYdob] = useState();

  // const [dob2, setDob2] = useState();
  // const [dDob2, setDdob2] = useState();
  // const [mDob2, setMdob2] = useState();
  // const [yDob2, setYdob2] = useState();

  const handleProfile = () => {
    var x = document.getElementById("another-profile-2");
    // var y = document.getElementById("another-profile-btn-2");
    if (x.style.display === "block") {
      x.style.display = "none";
      // y.style.display = "block";
    } else {
      x.style.display = "block";
      // y.style.display = "none";
      //Clear form content
    }
  };

  const handleDM = (e, msg) => {
    let theVal = e.target.value;

    let error = document.getElementById("dob_err");
    if (theVal == 0) error.textContent = msg;
    else error.textContent = "";

    theVal = (theVal < 10 && theVal > 0 ? "0" + theVal : theVal).slice(-2);
    e.target.value = theVal;
    return e.target.value;
  };

  // const handleDM2 = (e, msg) => {
  //   let theVal = e.target.value;

  //   let error = document.getElementById("dob_err");
  //   if (theVal == 0) error.textContent = msg;
  //   else error.textContent = "";

  //   theVal = (theVal < 10 && theVal > 0 ? "0" + theVal : theVal).slice(-2);
  //   e.target.value = theVal;
  //   return e.target.value;
  // };

  const handleYear = (e) => {
    let theVal = e.target.value;

    let currentYearPrefix = minYear.toString().substring(0, 2);

    let error = document.getElementById("dob_err");
    if (theVal == 0) error.textContent = "Input a valid year !";
    else if (theVal > minYear && (Number(dDob) !== 0 || Number(mDob) !== 0))
      error.textContent = "Applicant must be 18 years and above !";
    else error.textContent = "";

    theVal = (theVal < 10 && theVal > 0 ? "0" + theVal : theVal).slice(-2);

    if (theVal.length > 0 && theVal > minYear.toString().slice(-2))
      theVal = currentYearPrefix - 1 + theVal;
    else if (theVal.length > 0) theVal = currentYearPrefix + theVal;

    e.target.value = theVal;
    return e.target.value;
  };

  // const handleYear2 = (e) => {
  //   let theVal = e.target.value;

  //   let currentYearPrefix = minYear.toString().substring(0, 2);

  //   let error = document.getElementById("dob_err");
  //   if (theVal == 0) error.textContent = "Input a valid year !";
  //   else if (theVal > minYear && (Number(dDob2) !== 0 || Number(mDob2) !== 0))
  //     error.textContent = "Applicant must be 18 years and above !";
  //   else error.textContent = "";

  //   // theVal = (theVal < 10 && theVal > 0 ? "0" + theVal : theVal).slice(-4);

  //   theVal = (theVal < 10 && theVal > 0 ? "0" + theVal : theVal).slice(-2);

  //   if (theVal.length > 0 && theVal > minYear.toString().slice(-2))
  //     theVal = currentYearPrefix - 1 + theVal;
  //   else if (theVal.length > 0) theVal = currentYearPrefix + theVal;

  //   e.target.value = theVal;
  //   return e.target.value;
  // };

  useEffect(() => {
    let error = document.getElementById("dob_err");
    try {
      const newDob = new Date(yDob + "-" + mDob + "-" + dDob)
        .toISOString()
        .slice(0, 10);
      setDob(newDob);
    } catch (e) {
      error.textContent = "";
    }
  }, [dDob, mDob, yDob, dob, minYear]);

  // useEffect(() => {
  //   let error = document.getElementById("dob_err2");
  //   try {
  //     const newDob = new Date(yDob2 + "-" + mDob2 + "-" + dDob2)
  //       .toISOString()
  //       .slice(0, 10);
  //     setDob2(newDob);
  //   } catch (e) {
  //     error.textContent = "";
  //   }
  // }, [dDob2, mDob2, yDob2, dob2, minYear]);

  return (
    <div
      data-step
      className="activex app-form w-full m-[0.05rem] rounded-lg border-[0.025rem] pb-4"
    >
      <FormProgress2 />

      <div className="first-profile">
        <div className="text-sm border-[0.025rem] rounded-lg ml-8 mr-8 pb-4">
          <div className="pt-4 px-8 pb-3 w-full">
            {/* <span className="text-xs h-8">Profile of owner</span> */}
            <span className="text-xs h-8">{p_profile_1} Profile</span>
          </div>

          {/* <div className="chidden">
            <input
              className="w-full xhidden z-0 h-0"
              type="text"
              name="owner_id_key"
              id="owner_id_key"
              placeholder="jj@jj.com"
              value={sessionStorage.getItem("app_email")}
              onChange={(e) => {
                e.target.value;
                setFname2(e.target.value);
              }}
            />
          </div> */}

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

          {/* <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
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
          </div> */}

          {/* =================== end profile ===================================== */}

          <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
            <div className="lg:pl-8 pl-4 pt-4 w-full">
              <span className="font-semibold">Date of birth </span>
              <span className="text-red-700">*</span>
            </div>
            <div className="xflex w-full pl-4 pt-4 items-end justify-end pr-4">
              {/* //---------------------- */}
              <input
                className="w-full uppercase hidden"
                type="date"
                name="date_of_birth_1"
                id="date_of_birth_1"
                // placeholder="dd-mm-yyyy"
                value={dob}
              />
              {/* //---------------------- */}
              <div className="grid grid-cols-3 gap-2">
                <input
                  type="text"
                  name="dd"
                  id="dd"
                  placeholder="DD"
                  pattern="\d{1,2}"
                  maxLength={2}
                  className="xpy-4 px-1 w-full text-center"
                  onInput={(e) => {
                    if (e.target.value > 31) e.target.value = 2;
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  }}
                  onBlur={(e) => {
                    setDdob(handleDM(e, "Provide a valid date !"));
                  }}
                  // value={dDob}
                />

                <input
                  type="text"
                  name="mm"
                  id="mm"
                  placeholder="MM"
                  pattern="\d{1,2}"
                  maxLength={2}
                  className="xpy-4 px-1 w-full text-center"
                  onInput={(e) => {
                    if (e.target.value > 12) e.target.value = 6;
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  }}
                  onBlur={(ev) => {
                    setMdob(handleDM(ev, "Input a valid month !"));
                  }}
                  // value={mDob}
                />

                <input
                  type="text"
                  name="yy"
                  id="yy"
                  placeholder="YYYY"
                  min={minYear}
                  max={maxYear}
                  maxLength={4}
                  required
                  className="xpy-4 px-1 w-full text-center"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  }}
                  onBlur={(e) => {
                    setYdob(handleYear(e));
                  }}
                  // value={yDob}
                />
              </div>
              {/* ===================== */}
              <span
                id="dob_err"
                className="flex items-center italic justify-center w-full text-xs text-red-500"
              ></span>
              {/* ===================== */}
            </div>
          </div>

          {/*  */}

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
                <p className="absolute text-right lg:pr-4 pr-1">%</p>
              </div>
            </div>
          </div>
        </div>
        {/* === repeated component starts === */}
        <div>
          {components.map((component) => (
            <ODSProfile
              key={component.id}
              pid={component.id}
              onRemove={() => removeComponent(component.id)}
            />
          ))}
        </div>

        {/* <ODSProfile /> */}
        {/* === repeated component ends === */}
        <div className="lg:pl-8 pl-4" id="another-profile-btn-2">
          <button
            type="button"
            className="bg-white shadow rounded-lg w-44 text-xs p-2 py-2 mt-4 flex items-center justify-center gap-1"
            onClick={addComponent}
          >
            <div className="">
              <Image src={AddCircle.src} width={12} height={12} alt="" />
            </div>
            <div className="">Add another profile</div>
          </button>
        </div>
      </div>

      {/* ++++++++++++++++++++++++++++++ */}
      <div
        id="stage2-err"
        className="h-4 pt-2 flex items-center justify-center italic text-xs text-red-500"
      ></div>
      {/* ++++++++++++++++++++++++++++++ */}

      <div className="text-base mt-4 border-t-[0.025rem] text-center justify-center flex w-full pb-4">
        <div className="lg:flex gap-4 px-8 w-full">
          <PrevButton />

          <NextButton caption={"Next"} />
        </div>
      </div>
    </div>
  );
}

export default Stage2;
