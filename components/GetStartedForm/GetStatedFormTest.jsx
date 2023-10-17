"use client";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

function GetStatedForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");

  const clearForm = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setPhoneno("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("Application completed !");

    // const dataSource = document.querySelector("gsform");

    const dataSource = document.forms["submit-to-spreadsheet"];

    const data = new FormData(dataSource);
    console.log(data);

    const url =
      "https://script.google.com/macros/s/AKfycbxmyF9NbwBVJKlY5nFyCWY_OMKrM249GMMvYG-J53nB4ryZvBoyOIdkuEwNS8bYqVml/exec";

    const msg = document.getElementById("msg");

    fetch(url, {
      method: "POST",
      body: data,
    })
      .then(() => {
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

        //Set success message
        msg.innerHTML = error.message;

        //Clear displayed message
        setTimeout(() => {
          msg.innerHTML = "";
        }, 5000);

        //  //Clear form
        //  clearForm();
        //  dataSource.reset();
      });
  };

  return (
    <div className="bg-gradient-to-r from-[#FFFFFF] from-55% to-[#0062E4]">
      <div className="lg:px-12 px-4 pt-4">
        <Navbar />
      </div>
      <div className="px-12 pt-8 pb-16">
        <p className="font-semibold">Start Application</p>
        <div className="px-8 shadow-2xl w-full border-[0.0025rem]">
          <form
            className="gsform w-full"
            name="submit-to-spreadsheet"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="flex-1 py-4">
              <input
                className="w-full"
                name="firstname"
                type="text"
                placeholder="First name"
                required
                autoComplete="off"
              />
            </div>
            <div className="flex-1 py-4">
              <input
                className="w-full"
                name="lastname"
                type="text"
                placeholder="Last name"
                autoComplete="off"
                required
              />
            </div>
            <div className="flex-1 py-4">
              <input
                className="w-full"
                name="email"
                type="email"
                placeholder="Email address"
                autoComplete="off"
                required
              />
            </div>
            <div className="flex-1 py-4">
              <input
                className="w-full"
                name="phoneno"
                type="text"
                placeholder="Phone #"
                autoComplete="off"
                required
              />
            </div>

            <div
              className="h-4 text-center  text-red-600 font-semibold text-xs"
              id="msg"
            ></div>

            <div className="flex-1 py-4">
              <button className="w-full bg-cyan-300 rounded-lg p-2 text-white font-semibold">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetStatedForm;
