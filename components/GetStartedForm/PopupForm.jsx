// import { useState } from "react";
import Image from "next/image";

const PopupForm = ({ formName, formHeader, onClose }) => {
  return (
    <div className="popup-form">
      <div className="popup-form-content w-2/3">
        <span
          className="close p-0 px-2 py-1 flex text-center"
          onClick={onClose}
        >
          &times;
        </span>
        <div className="flex p-2">
          <div className="pl-8 pt-2 font-semibold">{formHeader}</div>
        </div>
        <div className="pl-2 -mt-2">{formName}</div>
      </div>
    </div>
  );
};

export default PopupForm;
