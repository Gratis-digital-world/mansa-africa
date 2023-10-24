// import { useState } from "react";
import Image from "next/image";
import errImg from "@/public/images/error.png";

const PopupError = ({ message, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="flex">
          <Image src={errImg.src} height={20} width={20} alt={""} />
          <p className="pl-4 font-semibold">Error</p>
        </div>
        <p className="pl-4">{message}</p>
      </div>
    </div>
  );
};

export default PopupError;
