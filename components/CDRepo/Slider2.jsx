import React, { useState } from "react";
// import "./App.css"; // Import your CSS file for styling

const Slider2 = () => {
  const divs = [
    { id: 1, content: "Div 1" },
    { id: 2, content: "Div 2" },
    { id: 3, content: "Div 3" },
    { id: 4, content: "Div 4" },
    { id: 5, content: "Div 5" },
  ];

  const [currentDiv, setCurrentDiv] = useState(1);

  const goToNextDiv = () => {
    if (currentDiv < divs.length) {
      setCurrentDiv(currentDiv + 1);
    }
  };

  const goToPreviousDiv = () => {
    if (currentDiv > 1) {
      setCurrentDiv(currentDiv - 1);
    }
  };

  return (
    <div className="App">
      <div
        className="div-container"
        style={{ transform: `translateX(-${(currentDiv - 1) * 100}vw)` }}
      >
        {divs.map((div) => (
          <div key={div.id} className="div">
            {div.content}
          </div>
        ))}
      </div>
      <div className="button-container">
        <button onClick={goToPreviousDiv} disabled={currentDiv === 1}>
          Previous
        </button>
        <button onClick={goToNextDiv} disabled={currentDiv === divs.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider2;
