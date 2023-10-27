import React from "react";

const ConfirmationModal = ({ showModal, onClose, onConfirm }) => {
  return (
    <div className={`modal ${showModal ? "visible" : "hidden"}`}>
      <div className="modal-content">
        <p>Changes may be lost. Are you sure you want to leave this page?</p>
        <button onClick={onConfirm}>Leave</button>
        <button onClick={onClose}>Stay</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
