import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AddCircle from "@/public/images/add-circle.png";
import ClickToUpload from "@/public/images/click-to-upload.png";
import Uploading from "@/public/images/uploading.png";
import UploadFile from "./UploadFile";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import UploadMany from "./UploadMany";
import PopupForm from "./PopupForm";
import EMPProfile from "../GetStartedForm/EMPProfile";

function EMProfiles() {
  const [empComponents, setEMPComponents] = useState([]);
  const [nextComponentId, setNextEMPComponentId] = useState(1);

  const addEMPComponent = () => {
    const newComponent = { id: nextComponentId };
    setEMPComponents([...empComponents, newComponent]);
    setNextEMPComponentId(nextComponentId + 1);
  };

  const removeEMPComponent = (id) => {
    const updatedComponents = empComponents.filter(
      (empComponent) => empComponent.id !== id
    );
    setEMPComponents(updatedComponents);
  };

  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleShowPopup = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const [emp_fname_1, setEMPFname1] = useState();
  const [emp_lname_1, setEMPLname1] = useState();

  // const [emp_fname_2, setEMPFname2] = useState();
  // const [emp_lname_2, setEMPLname2] = useState();

  // const handleEMPProfile = () => {
  //   var x = document.getElementById("emp-profile-2");
  //   var y = document.getElementById("another-profile-btn-emp-1");
  //   if (x.style.display === "block") {
  //     x.style.display = "none";
  //     y.style.display = "block";
  //   } else {
  //     x.style.display = "block";
  //     y.style.display = "none";
  //   }
  // };

  return (
    <div className="profile-of-executive-mgt">
      <div className="text-sm border-t-[0.025rem] w-full pb-4">
        <div className="px-8 pt-4 w-full">
          <span className="font-semibold">Executive Management Profiles</span>{" "}
          <span className="italic">
            (This item is referring to the CV or biography of the members of the
            Management Committee of the entity (DG, CEO, DGA, CFA, Legal
            Director, Compliance Director etc. Provide if available).
          </span>
        </div>
      </div>
      {/* <div className="text-sm border-[0.025rem] rounded-lg ml-8 mr-8 pb-2">
        <div className="pt-4 px-4 pb-3 w-full">
          <span className="text-xs opacity-70" id="ex_mgt" name="ex_mgt">
            John Doe
          </span>
        </div>
      </div> */}
      {/* ============================= */}
      <div className="emp-profile-1">
        <div className="text-sm border-[0.025rem] rounded-lg ml-8 mr-8 pbb-4 mb-4">
          <div className="pt-4 px-8 pb-3 w-full h-12">
            <span className="text-xs opacity-70" id="ubo_1" name="ubo_1">
              {emp_fname_1} {emp_lname_1}
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
                name="emp_firstname_1"
                id="emp_firstname_1"
                placeholder=""
                onChange={(e) => setEMPFname1(e.target.value)}
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
                name="emp_lastname_1"
                id="emp_lastname_1"
                placeholder=""
                onChange={(e) => setEMPLname1(e.target.value)}
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
                name="emp_bio_1"
                id="emp_bio_1"
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
                input_id={"emp_resume_1"}
                file_type={
                  "image/png, image/jpeg, application/pdf, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                }
              />
            </div>
          </div>

          {/* ++++++++++++++++++++++++++++++ */}
          <div
            id="emp-1-err"
            className="h-4 pt-2 mb-2 flex items-center justify-center italic text-xs text-red-500"
          ></div>
          {/* ++++++++++++++++++++++++++++++ */}
        </div>
      </div>

      {/* === repeated component starts === */}
      <div>
        {empComponents.map((empComponent) => (
          <EMPProfile
            key={empComponent.id}
            pid={empComponent.id}
            onRemove={() => removeEMPComponent(empComponent.id)}
          />
        ))}
      </div>

      {/* === repeated component ends === */}
      <div className="lg:pl-8 pl-4 pb-2" id="another-profile-btn-2">
        <button
          type="button"
          className="bg-white shadow rounded-lg w-44 text-xs p-2 py-2 mt-4 flex items-center justify-center gap-1"
          onClick={addEMPComponent}
        >
          <div className="">
            <Image src={AddCircle.src} width={12} height={12} alt="" />
          </div>
          <div className="">Add another profile</div>
        </button>
      </div>
      {/* </div> */}
      {/* ============================= */}

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
            </span>{" "}
            <span className="text-red-700">*</span>
          </p>
          <p className="text-xs text-[#0062E4]">
            First, download the sample, then upload the form when completed.
          </p>
        </div>

        <div className="flex">
          <div className="w-full">
            <div className="pl-8">
              <Link
                href={
                  "/files/mansa-letter-of-administrator-appointment-sample.docx"
                }
                target="_blank"
              >
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
              file_type={
                "image/png, image/jpeg, application/pdf, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              }
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
            </span>{" "}
            <span className="text-red-700">*</span>
          </p>
          <p className="text-xs text-[#0062E4]">
            First, download the sample, then upload the form when completed.
          </p>
        </div>

        <div className="flex">
          <div className="w-full">
            <div className="pl-8">
              <Link href={"#"} target="_blank">
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
              file_type={
                "image/png, image/jpeg, application/pdf, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              }
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
            </span>{" "}
            <span className="text-red-700">*</span>
          </p>
          <p className="text-xs text-[#0062E4]">
            First, download the sample, then upload the form when completed.
          </p>
        </div>
        <div className="flex">
          <div className="w-full">
            <div className="pl-8">
              <Link href={"#"} target="_blank">
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
              file_type={
                "image/png, image/jpeg, application/pdf, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              }
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
          {/* <UploadFile */}
          <UploadMany
            image={ClickToUpload.src}
            input_id={"asoc_mem_1"}
            file_type={
              "image/png, image/jpeg, application/pdf, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            }
            morefiles="multiple"
          />
        </div>
      </div>

      {/* ++++++++++++++++++++++++++++++ */}
      <div
        id="stage3-err"
        className="hidden h-4 pt-2 flex items-center justify-center italic text-xs text-red-500"
      ></div>
      {/* ++++++++++++++++++++++++++++++ */}

      {/* <div className="text-base mt-4 border-t-[0.025rem] w-full pb-4">
        <div className="px-8 w-full flex items-center justify-center gap-4">
          <PrevButton />

          <NextButton caption={"Submit"} />
        
        </div>
      </div> */}

      <div className="text-base mt-4 border-t-[0.025rem] text-center justify-center flex w-full pb-4">
        <div className="lg:flex gap-4 px-8 w-full">
          <PrevButton />

          <NextButton caption={"Submit"} />
        </div>
      </div>
      {/* //========================== */}
      {/* <div class="button-container">
        <button onclick="basic()" type="button">
          Basic
        </button>
        <button onclick="randomDirection()" type="button">
          Random direction
        </button>
        <button id="makeItRain" onclick="makeItRain()" type="button">
          Make it rain
        </button>
      </div> */}
      {/* //========================== */}
    </div>
  );
}

export default EMProfiles;
