import React from "react";
import Image from "next/image";
import UploadLogo from "@/public/images/upload-logo.png";
import ClickToUpload from "@/public/images/click-to-upload.png";
import Uploading from "@/public/images/uploading.png";
import FormProgress1 from "../GetStartedForm/FormProgress1";
import UploadFile from "../GetStartedForm/UploadFile";
import NextButton from "../GetStartedForm/NextButton";

function Stage1() {
  return (
    <div
      data-step
      className=" app-form w-full m-[0.05rem] rounded-lg border-[0.025rem] pb-4"
    >
      <FormProgress1 />

      <div className="text-sm border-t-[0.025rem] w-full flex pb-4">
        <div className="pl-8 pt-4 w-full">
          <span className="font-semibold">Upload Logo </span>
          <span className="italic">(Upload your company&#39;s logo)</span>{" "}
          <span className="text-red-700">*</span>
        </div>
        <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
          <UploadFile
            image={ClickToUpload.src}
            input_id={"company_logo"}
            file_type={
              "image/png, image/jpeg, application/pdf, application/doc, application/docx"
            }
          />
        </div>
      </div>

      <div className="text-sm border-t-[0.025rem] w-full flex pb-4">
        <div className="pl-8 pt-4 w-full font-semibold">
          Certificate of Incorporation <span className="text-red-700">*</span>
        </div>
        <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
          <UploadFile
            image={ClickToUpload.src}
            input_id={"cert_of_inc"}
            file_type={
              "image/png, image/jpeg, application/pdf, application/doc, application/docx"
            }
          />
        </div>
      </div>

      <div className="text-sm border-t-[0.025rem] w-full flex pb-4">
        <div className="pl-8 pt-4 w-full font-semibold">
          Memorandum & Articles of Association
        </div>
        <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
          <UploadFile
            image={ClickToUpload.src}
            input_id={"mou"}
            file_type={
              "image/png, image/jpeg, application/pdf, application/doc, application/docx"
            }
          />
        </div>
      </div>

      <div className="text-sm border-t-[0.025rem] w-full flex pb-24">
        <div className="pl-8 pt-4 w-full font-semibold">Tax certificate</div>
        <div className="flex w-full pl-4 pt-4 items-end justify-end pr-4">
          <UploadFile
            image={ClickToUpload.src}
            input_id={"tax_cert"}
            file_type={
              "image/png, image/jpeg, application/pdf, application/doc, application/docx"
            }
          />
        </div>
      </div>

      {/* ++++++++++++++++++++++++++++++ */}
      <div
        id="stage1-err"
        className="h-4 pt-2 flex items-center justify-center italic text-xs text-red-500"
      ></div>
      {/* ++++++++++++++++++++++++++++++ */}

      <div className="text-base mt-4 border-t-[0.025rem] w-full flex items-center justify-center pb-4">
        <NextButton caption="Next" />
      </div>
    </div>
  );
}

export default Stage1;
