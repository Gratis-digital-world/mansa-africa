import React from "react";
import Image from "next/image";
import Link from "next/link";
import AddCircle from "@/public/images/add-circle.png";
import ClickToUpload from "@/public/images/click-to-upload.png";
import Uploading from "@/public/images/uploading.png";
import UploadFile from "./UploadFile";

function EMProfiles() {
  return (
    <div className="profile-of-executive-mgt">
      <div className="text-sm border-t-[0.025rem] w-full pb-4">
        <div className="px-8 pt-4 w-full">
          <span className="font-semibold">Executive Management Profiles</span>{" "}
          <span className="italic">(If available)</span>
        </div>
      </div>
      <div className="text-sm border-[0.025rem] rounded-lg ml-8 mr-8 pb-2">
        <div className="pt-4 px-4 pb-3 w-full">
          <span className="text-xs opacity-70" id="ex_mgt" name="ex_mgt">
            John Doe
          </span>
        </div>
      </div>

      <div className="pl-8 pb-6">
        <button
          className="bg-white shadow rounded-lg w-44 text-xs p-2 py-2 mt-4 flex items-center justify-center gap-1"
          type="button"
        >
          <div className="">
            <Image src={AddCircle.src} width={12} height={12} alt="" />
          </div>
          <div className="">Add another profile</div>
        </button>
      </div>

      <div className="text-sm border-t-[0.025rem] w-full lg:flex items-center pb-4">
        <div className="px-8 pt-4 lg:w-2/3">
          <p>
            <span className="font-semibold">
              MANSA authorization letter for appointing the platform
              administrator
            </span>{" "}
            <span className="italic">
              (To customize on a letterheaded paper with your company&#39;s
              logo)
            </span>
          </p>
          <p className="text-xs text-[#0062E4]">
            First, download the sample, then upload the form when completed.
          </p>
        </div>

        <div className="flex">
          <div className="w-full">
            <div className="pl-8">
              <Link href={"/sample-files/mansa-authorization-letter.pdf"}>
                <button
                  className="bg-white shadow rounded-lg w-36 text-xs p-2 py-2 mt-6"
                  type="button"
                >
                  Download Sample
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full pl-4 pt-4 items-end justify-end pr-4">
            <UploadFile
              image={ClickToUpload.src}
              input_id={"authorization_letter"}
              file_type={"application/pdf, application/doc*"}
            />
          </div>
        </div>
      </div>

      <div className="text-sm border-t-[0.025rem] w-full lg:flex items-center pb-4">
        <div className="px-8 pt-4 lg:w-2/3">
          <p>
            <span className="font-semibold">MANSA Questionnaire for SMEs</span>{" "}
            <span className="italic">
              (download the attached document, complete, sign and upload)
            </span>
          </p>
          <p className="text-xs text-[#0062E4]">
            First, download the sample, then upload the form when completed.
          </p>
        </div>

        <div className="flex">
          <div className="w-full">
            <div className="pl-8">
              <Link href={"/sample-files/mansa-questionnaire-for-smes.pdf"}>
                <button
                  className="bg-white shadow rounded-lg w-36 text-xs p-2 py-2 mt-6"
                  type="button"
                >
                  Download Sample
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full pl-4 pt-4 items-end justify-end pr-4">
            <UploadFile
              image={ClickToUpload.src}
              input_id={"questionnaire"}
              file_type={"application/pdf, application/doc*"}
            />
          </div>
        </div>
      </div>

      <div className="text-sm border-t-[0.025rem] w-full lg:flex items-center pb-4">
        <div className="px-8 pt-4 lg:w-2/3">
          <p>
            <span className="font-semibold">MANSA Contribution Agreement</span>{" "}
            <span className="italic">
              (download the attached document, sign and upload)
            </span>
          </p>
          <p className="text-xs text-[#0062E4]">
            First, download the sample, then upload the form when completed.
          </p>
        </div>
        <div className="flex">
          <div className="w-full">
            <div className="pl-8">
              <Link href={"/sample-files/mansa-contribution-agreement.pdf"}>
                <button
                  className="bg-white shadow rounded-lg w-36 text-xs p-2 py-2 mt-6"
                  type="button"
                >
                  Download Sample
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full pl-4 pt-4 items-end justify-end pr-4">
            <UploadFile
              image={ClickToUpload.src}
              input_id={"con_agreement"}
              file_type={"application/pdf, application/doc*"}
            />
          </div>
        </div>
      </div>
      <div className="text-sm border-t-[0.025rem] w-full items-center pb-12">
        <div className="px-8 pt-4 w-full pb-2">
          <p>
            <span className="font-semibold">Associations & Memberships</span>{" "}
            <span className="italic">(If any)</span>
          </p>
        </div>
        <div className="px-8 pt-2 w-full flex items-center gap-4">
          <UploadFile
            image={Uploading.src}
            input_id={"asoc_mem_1"}
            file_type={"image/png, image/jpeg, application/pdf"}
          />

          <UploadFile
            image={Uploading.src}
            input_id={"asoc_mem_2"}
            file_type={"image/png, image/jpeg, application/pdf"}
          />

          <UploadFile
            image={Uploading.src}
            input_id={"asoc_mem_3"}
            file_type={"image/png, image/jpeg, application/pdf"}
          />

          <UploadFile
            image={Uploading.src}
            input_id={"asoc_mem_4"}
            file_type={"image/png, image/jpeg, application/pdf"}
          />

          <UploadFile
            image={Uploading.src}
            input_id={"asoc_mem_5"}
            file_type={"image/png, image/jpeg, application/pdf"}
          />
        </div>
      </div>
      <div
        className="text-xs font-semibold text-center border-t-[0.025rem] w-full items-center justify-between lg:h-16 h-4 text-red-600 "
        id="msg"
      ></div>
      <div className="text-base border-t-[0.025rem] w-full pb-4">
        <div className="px-8 w-full flex items-center justify-center gap-4">
          <button
            type="button"
            data-previous
            className="bg-white rounded-lg text-black shadow-md w-1/2 p-2 py-4 mt-6"
          >
            Go Back
          </button>

          <button
            // data-next
            className="bg-[#010DFF] rounded-lg text-white shadow-md w-1/2 p-2 py-4 mt-6"
            // type="button"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default EMProfiles;
