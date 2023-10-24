// import { useState } from "react";

const PopupError = ({ message, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <p className="">{message}</p>
      </div>
    </div>
  );
};

export default PopupError;
