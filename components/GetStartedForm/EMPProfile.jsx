import React, { useState } from "react";
import UploadFile from "./UploadFile";
import ClickToUpload from "@/public/images/click-to-upload.png";

function EMPProfile({ pid, onRemove }) {
  const [emp_fname_2, setEMPFname2] = useState();
  const [emp_lname_2, setEMPLname2] = useState();

  return (
    <div className={`emp-profile-rep-${pid}`}>
      <div className="text-sm border-[0.025rem] rounded-lg ml-8 mr-8 pbb-4 mb-4">
        <div className="pt-4 px-8 pb-3 w-full h-12">
          <span
            className="text-xs opacity-70"
            id={`emp_rep-${pid}`}
            name={`emp_rep-${pid}`}
          >
            {emp_fname_2} {emp_lname_2}
          </span>
        </div>

        <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
          <div className="lg:pl-8 pl-4 pt-4 w-full">
            <span className="font-semibold">Legal First Name </span>
            <span className="text-red-700">*</span>
          </div>
          <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
            <input
              className="w-full"
              type="text"
              name="emp_firstname_2"
              id="emp_firstname_2"
              placeholder=""
              onChange={(e) => setEMPFname2(e.target.value)}
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
              name="emp_lastname_2"
              id="emp_lastname_2"
              placeholder=""
              onChange={(e) => setEMPLname2(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
          <div className="lg:pl-8 pl-4 pt-4 w-full">
            <span className="font-semibold">Bio </span>
            <span className="text-red-700">*</span>
          </div>
          <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
            <textarea
              className="w-full"
              rows={3}
              cols={50}
              name="emp_bio_2"
              id="emp_bio_2"
              placeholder=""
              required
            />
          </div>
        </div>

        <div className="text-sm border-t-[0.025rem] w-full lg:flex py-2 pb-6">
          <div className="lg:pl-8 pl-4 pt-4 w-full">
            <span className="font-semibold">Upload resume </span>
            <span className="text-red-700">*</span>
          </div>
          <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
            <UploadFile
              image={ClickToUpload.src}
              // input_id={"emp_resume_2"}
              input_id={`emp_resume_2_${pid}`}
              file_type={
                "image/png, image/jpeg, application/pdf, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              }
            />
          </div>
        </div>

        {/* ++++++++++++++++++++++++++++++ */}
        <div className="text-sm border-t-[0.025rem] w-full flex py-2 xb-6">
          <div className="lg:pl-8 pl-4" onClick={onRemove}>
            <button
              type="button"
              className="remove-profile-rep bg-white shadow rounded-lg w-36 text-xs p-2 py-2 mt-6"
            >
              Remove profile
            </button>
          </div>
        </div>
        {/* ++++++++++++++++++++++++++++++ */}
      </div>
    </div>
  );
}

export default EMPProfile;
