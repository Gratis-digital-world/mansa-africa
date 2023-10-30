import React, { useState } from "react";
import UploadFile from "./UploadFile";
import ClickToUpload from "@/public/images/click-to-upload.png";

function EMPProfiles() {
  const [emp_fname_2, setEMPFname2] = useState();
  const [emp_lname_2, setEMPLname2] = useState();

  const handleSaveEMP = () => {
    const formId = document.getElementById("ubo-form");
    // const fdata = new FormData(formId);
    const fdata = new FormData();

    // const u_url = "https://mansa-96a6c794c4b6.herokuapp.com/upload2";
    const u_url = "http://localhost:3001/upload2";

    fetch(u_url, {
      method: "POST",
      body: fdata,
    })
      .then((response) => {
        console.log(response);
        //Clear displayed message
        //==========================
        document.getElementById("emp_message").textContent = "Saved !";

        setTimeout(() => {
          document.getElementById("emp_message").textContent = "";
        }, 5000);
      })
      .then((data) => {
        console.log("EMP Saved !");
        setShares2("");
        setEMPFname2("");
        setEMPLname2("");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="emp-profile-2" id="emp-profile-2">
      <div className="text-sm border-[0.025rem] rounded-lg ml-8 mr-8 pbb-4 mb-4">
        <div className="pt-4 px-8 pb-3 w-full h-12">
          <span className="text-xs opacity-70" id="emp_2" name="emp_2">
            {emp_fname_2} {emp_lname_2}
          </span>
        </div>

        <input
          className="w-full hidden"
          type="text"
          name="emp_id_key"
          id="emp_id_key"
          placeholder="jj@jj.com"
          value={sessionStorage.getItem("app_email")}
          onChange={(e) => setFname2(e.target.value)}
        />

        <div className="hidden">
          <input
            className="w-full xhidden z-0 h-0"
            type="text"
            name="emp_id_key"
            id="emp_id_key"
            placeholder="jj@jj.com"
            value={sessionStorage.getItem("app_email")}
            onChange={(e) => {
              e.target.value;
              setFname2(e.target.value);
            }}
          />
        </div>

        <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
          <div className="lg:pl-8 pl-4 pt-4 w-full">
            <span className="font-semibold">Legal First Name </span>
          </div>
          <div className="flex w-full pl-4 pt-2 items-end justify-end pr-4">
            <input
              className="w-full"
              type="text"
              name="emp_firstname_2"
              id="emp_firstname_2"
              placeholder=""
              onChange={(e) => setEMPFname2(e.target.value)}
              // required
            />
          </div>
        </div>

        <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
          <div className="lg:pl-8 pl-4 pt-2 w-full">
            <span className="font-semibold">Legal Last Name </span>
          </div>
          <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
            <input
              className="w-full"
              type="text"
              name="emp_lastname_2"
              id="emp_lastname_2"
              placeholder=""
              onChange={(e) => setEMPLname2(e.target.value)}
              // required
            />
          </div>
        </div>

        <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
          <div className="lg:pl-8 pl-4 pt-2 w-full">
            <span className="font-semibold">Bio</span>
          </div>
          <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
            <textarea
              className="w-full"
              rows={3}
              cols={50}
              name="emp_bio_2"
              id="emp_bio_2"
              placeholder=""
              // required
            />
          </div>
        </div>

        <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
          <div className="lg:pl-8 pl-4 pt-2 w-full">
            <span className="font-semibold">Upload resume</span>
          </div>
          <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
            <UploadFile
              image={ClickToUpload.src}
              input_id={"emp_resume_2"}
              file_type={
                "image/png, image/jpeg, application/pdf, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              }
            />
          </div>
        </div>

        <div
          className="text-center w-full text-xs text-green-500"
          id="emp_message"
        ></div>

        <div className="remove-profile-emp-x text-sm border-t-[0.025rem] flex w-full py-2 pb-3">
          <div className="pl-4">
            <button
              type="button"
              className="save-profile-4 bg-white shadow rounded-lg w-36 text-xs p-2 py-2 mt-6"
              onClick={handleSaveEMP}
              // onClick={(e) => alert("Save profile (Clear page for new)")}
            >
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EMPProfiles;
