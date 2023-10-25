// import { useState } from "react";
import Image from "next/image";
import errImg from "@/public/images/error.png";

const PopupError = ({ message, label, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span
          className="close border-l-[0.2rem] flex items-center justify-center w-16 h-20"
          onClick={onClose}
        >
          {/* &times; */}
          Close
        </span>
        <div className="flex p-2">
          <Image src={errImg.src} height={20} width={20} alt={""} />
          {/* <p className="pl-4 font-semibold">Error</p> */}
          <p className="pl-4 font-semibold">{label}</p>
        </div>
        <p className="pl-2 -mt-2">{message}</p>
      </div>
    </div>
  );
};

export default PopupError;
