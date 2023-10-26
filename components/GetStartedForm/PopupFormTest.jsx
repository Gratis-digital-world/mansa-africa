import { useState } from "react";
import PopupForm from "./PopupForm";
// import styles from "../../app/globals.css";

function PopupFormTest() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleShowPopup = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div>
      <h1>Popup Form</h1>
      <button onClick={handleShowPopup}>Show Error Popup</button>
      {isPopupVisible && (
        <PopupForm
          message="Custom error message goes here."
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
}

export default PopupFormTest;
