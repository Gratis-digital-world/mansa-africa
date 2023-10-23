"use client";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Script from "next/script";

import Stage1 from "../GetStartedForm/Stage1";
import Stage2 from "../GetStartedForm/Stage2";
import Stage3 from "../GetStartedForm/Stage3";

function GetStartedForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");

  const [file, setFile] = useState(null);

  function handleFile(e) {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  }

  const uploadSingleFileM = () => {
    //upload files
    const dataSource = document.forms["mansa-form-main"];
    const data = new FormData(dataSource);

    // data.append(`${input_id}`, e.target.files);

    fetch("http://localhost:3001/upload", {
      method: "POST",
      body: data,
    })
      .then(() => {
        console.log("Success Upload!");
      })
      .catch((e) => {
        console.log(e);
      });
    //===================
  };

  const clearForm = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setPhoneno("");
    setFile(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataSource = document.forms["mansa-form-main"];

    const data = new FormData(dataSource);
    // data.append("file",)
    // console.log(data);

    const url =
      "https://script.google.com/macros/s/AKfycbxmyF9NbwBVJKlY5nFyCWY_OMKrM249GMMvYG-J53nB4ryZvBoyOIdkuEwNS8bYqVml/exec";

    const msg = document.getElementById("stage3-err");

    fetch(url, {
      method: "POST",
      body: data,
    })
      .then(() => {
        //upload files
        uploadSingleFileM();
        //===================

        //Set success message
        msg.innerHTML = "Application completed !";

        //Clear displayed message
        setTimeout(() => {
          msg.innerHTML = "";
        }, 5000);

        //Clear form
        clearForm();
        dataSource.reset();
      })

      .catch((error) => {
        // console.log(error);

        //Set error message
        msg.innerHTML = error.message;

        //Clear displayed message
        setTimeout(() => {
          msg.innerHTML = "";
        }, 5000);
      });
  };

  return (
    <div className="bg-white">
      <div className="lg:px-12 px-4 pt-4">
        <Navbar />
      </div>
      <div className="lg:px-48 px-2 pt-8 pb-16">
        <div className="text-center pb-8">
          <p className="font-semibold text-3xl text-center">Get Started</p>
          <p className="text-xs opacity-70 pt-2">
            Provide all necessary information and documents to get started.
          </p>
        </div>

        <Script src="/scripts/progress.js" strategy="lazyOnload" />

        <form
          id="mansa-form-main"
          name="mansa-form-main"
          data-multi-step
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="shadow-lg w-full rounded-lg border-[0.025rem]">
            {/* <div className="w-full m-[0.05rem] rounded-lg border-[0.025rem]"> */}
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
