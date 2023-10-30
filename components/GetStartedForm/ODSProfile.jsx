import React, { useState, useEffect } from "react";
import Countries from "../Countries/Countries";

function ODSProfile({ pid, onRemove }) {
  const minYear = new Date().getFullYear() - 18;
  const maxYear = minYear + 200;

  const [ODSPRole, setODSPRole] = useState();
  const [ODSPFname, setODSPFname] = useState();
  const [ODSPLname, setODSPLname] = useState();
  const [ODSPDob, setODSPDob] = useState();
  const [ODSPCountry, setODSPCountry] = useState();
  const [ODSPPercentage, setODSPPercentage] = useState();

  const [dob2, setDob2] = useState();
  const [dDob2, setDdob2] = useState();
  const [mDob2, setMdob2] = useState();
  const [yDob2, setYdob2] = useState();

  const [powned, setPOwned1] = useState();

  const handleODSPDM = (e, msg) => {
    let theVal = e.target.value;

    let error = document.getElementById("dob_err");
    if (theVal == 0) error.textContent = msg;
    else error.textContent = "";

    theVal = (theVal < 10 && theVal > 0 ? "0" + theVal : theVal).slice(-2);
    e.target.value = theVal;
    return e.target.value;
  };

  const handleODSPYear = (e) => {
    let theVal = e.target.value;

    let currentYearPrefix = minYear.toString().substring(0, 2);

    let error = document.getElementById("dob_err");
    if (theVal == 0) error.textContent = "Input a valid year !";
    else if (theVal > minYear && (Number(dDob2) !== 0 || Number(mDob2) !== 0))
      error.textContent = "Applicant must be 18 years and above !";
    else error.textContent = "";

    // theVal = (theVal < 10 && theVal > 0 ? "0" + theVal : theVal).slice(-4);

    theVal = (theVal < 10 && theVal > 0 ? "0" + theVal : theVal).slice(-2);

    if (theVal.length > 0 && theVal > minYear.toString().slice(-2))
      theVal = currentYearPrefix - 1 + theVal;
    else if (theVal.length > 0) theVal = currentYearPrefix + theVal;

    e.target.value = theVal;
    return e.target.value;
  };

  useEffect(() => {
    // let error = document.getElementById("dob_err");
    try {
      const newDob = new Date(yDob2 + "-" + mDob2 + "-" + dDob2)
        .toISOString()
        .slice(0, 10);
      setDob2(newDob);
    } catch (e) {
      //   error.textContent = "";
    }
  }, [dDob2, mDob2, yDob2, dob2, minYear]);

  return (
    <div id={`profile-id-${pid}`} className="add-another-profile pt-4">
      {/* <div id={`profile-id`} className="add-another-profile pt-4"> */}
      {/* <div className="second-profile"> */}
      <div className="text-sm border-[0.025rem] rounded-lg ml-8 mr-8 pb-4">
        <div className="pt-4 px-8 pb-3 w-full">
          <span className="text-xs">{ODSPRole} Profile</span>
        </div>

        <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
          <div className="lg:pl-8 pl-4 pt-4 w-full">
            <span className="font-semibold">Role at the business </span>
          </div>
          <div className="w-full pl-4 pt-4 items-end justify-end pr-4">
            <select
              className="w-full"
              name={`role`}
              id={`role`}
              value={ODSPRole}
              onChange={(e) => setODSPRole(e.target.value)}
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
          </div>
          <div className="w-full pl-4 pt-4 items-end justify-end pr-4">
            <input
              className="w-full"
              type="text"
              name={`firstname`}
              id={`firstname`}
              placeholder=""
              value={ODSPFname}
              onChange={(e) => setODSPFname(e.target.value)}
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
              name={`lastname`}
              id={`lastname`}
              placeholder=""
              value={ODSPLname}
              onChange={(e) => setODSPLname(e.target.value)}
            />
          </div>
        </div>

        <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
          <div className="lg:pl-8 pl-4 pt-4 w-full">
            <span className="font-semibold">Date of birth </span>
          </div>
          <div className="xflex w-full pl-4 pt-4 items-end justify-end pr-4">
            {/* //---------------------- */}
            <input
              className="w-full uppercase hidden"
              type="date"
              name={`date_of_birth`}
              id={`date_of_birth`}
              // placeholder="dd-mm-yyyy"
              //   value={ODSPDob}
              value={dob2}
            />
            {/* //---------------------- */}
            <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                name={`dd`}
                id={`dd`}
                placeholder="DD"
                pattern="\d{1,2}"
                maxLength={2}
                className="xpy-4 px-1 w-full text-center"
                onInput={(e) => {
                  if (e.target.value > 31) e.target.value = 2;
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
                onBlur={(e) => {
                  setDdob2(handleODSPDM(e, "Provide a valid date !"));
                }}
                // value={dDob}
              />

              <input
                type="text"
                name={`mm`}
                id={`mm`}
                placeholder="MM"
                pattern="\d{1,2}"
                maxLength={2}
                className="xpy-4 px-1 w-full text-center"
                onInput={(e) => {
                  if (e.target.value > 12) e.target.value = 6;
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
                onBlur={(ev) => {
                  setMdob2(handleODSPDM(ev, "Input a valid month !"));
                }}
                // value={mDob}
              />

              <input
                type="text"
                name={`yy`}
                id={`yy`}
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
                  setYdob2(handleODSPYear(e));
                }}
                // value={yDob}
              />
            </div>
            {/* ===================== */}
            <span
              id="dob_err2"
              className="flex items-center italic justify-center w-full text-xs text-red-500"
            ></span>
            {/* ===================== */}
          </div>
        </div>

        <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
          <div className="lg:pl-8 pl-4 pt-4 w-full">
            <span className="font-semibold">Country of origin </span>
          </div>
          <div className="w-full pl-4 pt-4 items-end justify-end pr-4">
            <select
              className="w-full pl-2"
              id={`country`}
              name={`country`}
              value={ODSPCountry}
              onChange={(e) => setODSPCountry(e.target.value)}
            >
              <Countries />
            </select>
          </div>
        </div>

        <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
          <div className="lg:pl-8 pl-4 pt-4 w-full">
            <span className="font-semibold">
              Percentage owned in the company{" "}
            </span>
          </div>
          <div className="w-full pl-4 pt-4 items-end justify-end pr-4">
            <div className="items-center justify-end flex">
              <input
                className="w-full text-right pr-4"
                type="number"
                name={`percentage_owned`}
                id={`percentage_owned`}
                min={0}
                max={100}
                placeholder=""
                value={ODSPPercentage}
                onChange={(e) => setODSPPercentage(e.target.value)}
              />
              <p className="absolute text-right lg:pr-4 pr-1">%</p>
            </div>
          </div>
        </div>

        <div className="text-sm border-t-[0.025rem] w-full flex py-2 xb-6">
          <div className="lg:pl-8 pl-4" onClick={onRemove}>
            <button
              type="button"
              className="remove-profile-1 bg-white shadow rounded-lg w-36 text-xs p-2 py-2 mt-6"
            >
              Remove profile
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default ODSProfile;
