import { useState } from "react";
import PopupError from "./PopupError";
// import styles from "../../app/globals.css";

function PopupTest() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleShowPopup = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div>
      <h1>Next.js Page</h1>
      <button onClick={handleShowPopup}>Show Error Popup</button>
      {isPopupVisible && (
        <PopupError
          message="Custom error message goes here."
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
}

export default PopupTest;
