import React, { useState } from "react";

function UBOProfile({ pid, onRemove }) {
  const [UBOFname, setUBOFname] = useState("");
  const [UBOLname, setUBOLname] = useState("");
  const [UBOShares, setUBOShares] = useState("");

  // const handleSaveUBO = () => {
  //   const formId = document.getElementById("ubo-form");
  //   const fdata = new FormData(formId);

  //   // const u_url = "https://mansa-96a6c794c4b6.herokuapp.com/upload2";
  //   // const u_url = "http://localhost:3001/upload2";

  //   fetch(u_url, {
  //     method: "POST",
  //     body: fdata,
  //   })
  //     .then((response) => {
  //       console.log(response);
  //       //Clear displayed message
  //       //==========================
  //       document.getElementById("ubo_message").textContent = "Saved !";

  //       setTimeout(() => {
  //         document.getElementById("ubo_message").textContent = "";
  //       }, 5000);
  //     })
  //     .then((data) => {
  //       console.log("UBO Saved !");
  //       setUBOShares("");
  //       setUBOFname("");
  //       setUBOLname("");
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  return (
    <div className="pt-4s" id={`ubo-profile-id-${pid}`}>
      {/* <form id="ubo-form" name="ubo-form"> */}
      <div className="text-sm border-[0.025rem] rounded-lg ml-8 mr-8 mb-4">
        <div className="pt-4 px-8 pb-3 w-full h-12">
          <span className="text-xs opacity-70" id="ubo_2" name="ubo_2">
            {UBOFname} {UBOLname}
          </span>
        </div>

        {/* <div className="hiddenc">
          <input
            className="w-full z-0 h-0"
            type="text"
            name="ubo_id_keyx"
            id="ubo_id_keyx"
            placeholder="jj@jj.com"
            value={sessionStorage.getItem("app_email")}
            onChange={(e) => {
              e.target.value;
              setUBOFname(e.target.value);
            }}
          />
        </div> */}

        <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
          <div className="lg:pl-8 pl-4 pt-4 w-full">
            <span className="font-semibold">Legal First name </span>
          </div>
          <div className="w-full pl-4 pt-4 items-end justify-end pr-4">
            <input
              className="w-full"
              type="text"
              name={`ubo_firstname_2`}
              id={`ubo_firstname_2`}
              placeholder=""
              value={UBOFname}
              onChange={(e) => setUBOFname(e.target.value)}
            />
          </div>
        </div>

        <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
          <div className="lg:pl-8 pl-4 pt-4 w-full">
            <span className="font-semibold">Legal Last name </span>
          </div>
          <div className="w-full pl-4 pt-4 items-end justify-end pr-4">
            <input
              className="w-full"
              type="text"
              name={`ubo_lastname_2`}
              id={`ubo_lastname_2`}
              value={UBOLname}
              onChange={(e) => setUBOLname(e.target.value)}
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
                name={`ubo_shares_2`}
                id={`ubo_shares_2`}
                min={0}
                max={100}
                placeholder=""
                value={UBOShares}
                onChange={(e) => setUBOShares(e.target.value)}
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

        <div
          className="text-center w-full text-xs text-green-500"
          id="ubo_message"
        ></div>
      </div>
      {/* </form> */}
    </div>
  );
}

export default UBOProfile;
