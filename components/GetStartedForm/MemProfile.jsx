import React from "react";
import UploadFile from "./UploadFile";
import ClickToUpload from "@/public/images/click-to-upload.png";

function MemProfile({ pid, onRemove }) {
  return (
    <div className="px-8 pt-2 lg:w-full w-fit items-center gap-2">
      <UploadFile
        image={ClickToUpload.src}
        input_id={`asoc_mem_2_${pid}`}
        file_type={
          "image/png, image/jpeg, application/pdf, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        }
      />
      {/* <div className="text-sm border-t-[0.025rem] w-full flex py-2 xb-6"> */}
      <div className="text-center" onClick={onRemove}>
        <button
          type="button"
          className="remove-profile-mem bg-white shadow rounded-lg w-36x text-xs p-2 mt-1"
        >
          Remove
        </button>
      </div>
      {/* </div> */}
    </div>
  );
}

export default MemProfile;
