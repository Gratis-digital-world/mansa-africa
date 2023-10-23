import React from "react";

function NextButton({ caption }) {
  return (
    <button
      data-next
      className="bg-[#010DFF] rounded-lg text-white  w-1/2 p-2 py-4 mt-6"
      type="button"
    >
      {caption}
    </button>
  );
}

export default NextButton;
