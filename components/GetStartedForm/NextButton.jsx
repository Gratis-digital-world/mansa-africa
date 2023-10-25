"use client";
import React, { useEffect, useState } from "react";
import PopupError from "../GetStartedForm/PopupError";
import Link from "next/link";

function NextButton({ caption }) {
  // window.scrollTo(0, 0);
  //================================
  // let theError = sessionStorage.getItem("validationError");

  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleShowPopup = () => {
    if (sessionStorage.getItem("validationError") !== "") setPopupVisible(true);

    // setPopupVisible(true);
  };

  const handleClosePopup = () => {
    sessionStorage.setItem("validationError", "");
    sessionStorage.setItem("labelError", "");
    setPopupVisible(false);
  };

  useEffect(() => {
    // let theError = sessionStorage.getItem("validationError");
    // const theError =
    sessionStorage.getItem("validationError");
    sessionStorage.getItem("labelError");
  }, []);
  //================================

  return (
    <>
      <Link href={"#topofform"}>
        <button
          id="nextButton"
          data-next
          className="bg-[#010DFF] rounded-lg text-white w-1/2 p-2 py-4 mt-6"
          type="button"
          onClick={handleShowPopup}
        >
          {caption}
        </button>

        {isPopupVisible && (
          <PopupError
            message={sessionStorage.getItem("validationError")}
            label={sessionStorage.getItem("labelError")}
            //"Custom error message goes here."
            onClose={handleClosePopup}
          />
        )}
      </Link>
    </>
  );
}

export default NextButton;
