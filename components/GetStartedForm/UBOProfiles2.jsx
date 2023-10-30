import React, { useState } from "react";

function UBOProfiles() {
  const [fname_2, setFname2] = useState();
  const [lname_2, setLname2] = useState();
  const [shares_2, setShares2] = useState();

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
  //       setShares2("");
  //       setFname2("");
  //       setLname2("");
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  return (
    <div className="pt-4s" id="profile-of-beneficial-2">
      <form id="ubo-form" name="ubo-form">
        <div className="text-sm border-[0.025rem] rounded-lg ml-8 mr-8 mb-4">
          <div className="pt-4 px-8 pb-3 w-full h-12">
            <span className="text-xs opacity-70" id="ubo_2" name="ubo_2">
              {fname_2} {lname_2}
            </span>
          </div>

          {/* <div className="hidden">
            <input
              className="w-full xhidden z-0 h-0"
              type="text"
              name="ubo_id_key"
              id="ubo_id_key"
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
              <span className="font-semibold">Legal First name </span>
            </div>
            <div className="w-full pl-4 pt-4 items-end justify-end pr-4">
              <input
                className="w-full"
                type="text"
                name="ubo_firstname_2"
                id="ubo_firstname_2"
                placeholder=""
                value={fname_2}
                onChange={(e) => setFname2(e.target.value)}
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
                name="ubo_lastname_2"
                id="ubo_lastname_2"
                value={lname_2}
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
                  value={shares_2}
                  onChange={(e) => setShares2(e.target.value)}
                />
                <p className="absolute text-right lg:pr-4 pr-1">%</p>
              </div>
            </div>
          </div>

          <div
            className="text-center w-full text-xs text-green-500"
            id="ubo_message"
          ></div>

          <div className="close-profile text-sm border-t-[0.025rem] flex w-full py-2 pb-3">
            <div className="pl-4">
              <button
                type="button"
                className="save-profile-3 bg-white shadow rounded-lg w-36 text-xs p-2 py-2 mt-6"
                // onClick={handleMoreProfile}
                // onClick={(e) => alert("Save profile (Clear page for new)")}
                // onClick={handleSaveUBO}
              >
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UBOProfiles;
