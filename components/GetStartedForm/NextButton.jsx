"use client";
import React, { useState } from "react";
import PopupError from "../GetStartedForm/PopupError";

function NextButton({ caption }) {
  //================================
  // const theError = sessionStorage.getItem("validationError");

  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleShowPopup = () => {
    // if (sessionStorage.getItem("validationError") !== "") setPopupVisible(true);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    // sessionStorage.setItem("validationError", "");
    setPopupVisible(false);
  };

  //================================

  return (
    <>
      <button
        data-next
        className="bg-[#010DFF] rounded-lg text-white  w-1/2 p-2 py-4 mt-6"
        type="button"
        // onClick={handleShowPopup}
      >
        {caption}
      </button>

      {isPopupVisible && (
        <PopupError
          message={theError} //"Custom error message goes here."
          onClose={handleClosePopup}
        />
      )}
    </>
  );
}

export default NextButton;
