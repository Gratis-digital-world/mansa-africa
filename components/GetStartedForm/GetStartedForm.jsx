"use client";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Script from "next/script";

import Stage41 from "../GetStartedForm/Stage41";
import Stage1 from "../GetStartedForm/Stage1";
import Stage2 from "../GetStartedForm/Stage2";
import Stage3 from "../GetStartedForm/Stage3";

import ConfirmationModal from "./ConfirmationModal";

function GetStartedForm() {
  const [firstname, setCFirstname] = useState("");
  const [lastname, setCLastname] = useState("");
  const [phoneno, setCPhoneno] = useState("");
  const [email, setCEmail] = useState("");

  // const uploadSingleFileM = () => {
  //   //upload files
  //   const dataSource = document.forms["mansa-form-main"];
  //   const data = new FormData(dataSource);

  //   const localUrl = "http://localhost:3001/upload";

  //   // const liveUrl = "https://mansa-96a6c794c4b6.herokuapp.com/upload";

  //   theUrl = localUrl;

  //   fetch(theUrl, {
  //     method: "POST",
  //     body: data,
  //   })
  //     .then(() => {
  //       console.log("Success Upload!");
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  //   //===================
  // };

  const clearForm = () => {
    setCFirstname("");
    setCLastname("");
    setCEmail("");
    setCPhoneno("");
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const dataSource = document.forms["mansa-form-main"];

  //   const data = new FormData(dataSource);
  //   // data.append("file",)
  //   // console.log(data);

  //   const url =
  //     "https://script.google.com/macros/s/AKfycbxmyF9NbwBVJKlY5nFyCWY_OMKrM249GMMvYG-J53nB4ryZvBoyOIdkuEwNS8bYqVml/exec";

  //   const msg = document.getElementById("stage3-err");

  //   fetch(url, {
  //     method: "POST",
  //     body: data,
  //   })
  //     .then(() => {
  //       //upload files
  //       uploadSingleFileM();
  //       //===================

  //       //Set success message
  //       msg.innerHTML = "Application completed !";

  //       //Clear displayed message
  //       setTimeout(() => {
  //         msg.innerHTML = "";
  //       }, 5000);

  //       //Clear form
  //       clearForm();
  //       dataSource.reset();
  //     })

  //     .catch((error) => {
  //       // console.log(error);

  //       //Set error message
  //       msg.innerHTML = error.message;

  //       //Clear displayed message
  //       setTimeout(() => {
  //         msg.innerHTML = "";
  //       }, 5000);
  //     });
  // };

  //========================================

  //========================================

  //-----------------------------------------
  const [showModal, setShowModal] = useState(false);

  const handleBeforeUnload = (e) => {
    e.preventDefault();
    e.returnValue = "";
    setShowModal(true);
  };

  // const confirmLeave = () => {
  //   setShowModal(false);
  //   window.removeEventListener("beforeunload", handleBeforeUnload);
  //   window.location.href = "/"; // Navigate to a different page or URL
  // };

  // const cancelLeave = () => {
  //   setShowModal(false);
  //   window.removeEventListener("beforeunload", handleBeforeUnload);
  // };

  // Add an event listener for beforeunload
  // window.addEventListener("beforeunload", handleBeforeUnload);

  //-----------------------------------------

  return (
    <div className="bg-white">
      <div className="lg:px-12 px-4 pt-4">
        <Navbar />
      </div>
      <div className="lg:px-48 px-2 pt-8 pb-16">
        <div className="text-center pb-8">
          <p className="font-semibold text-3xl text-center">Get Started</p>
          <p className="text-xs opacity-70 pt-2">
            Power your small business with Mansa
          </p>
        </div>

        {/* <ConfirmationModal
          showModal={showModal}
          onClose={cancelLeave}
          onConfirm={confirmLeave}
        /> */}

        <Script src="/scripts/progress.js" strategy="lazyOnload" />
        <a id="topofform"></a>
        <form
          id="mansa-form-main"
          name="mansa-form-main"
          data-multi-step
          // onSubmit={(e) => handleSubmit(e)}
        >
          <div className="shadow-lg w-full rounded-lg border-[0.025rem]">
            {/* <div className="w-full m-[0.05rem] rounded-lg border-[0.025rem]"> */}
            <Stage41 />
            <Stage1 />
            <Stage2 />
            <Stage3 />
          </div>
        </form>
      </div>
    </div>
  );
}

export default GetStartedForm;
