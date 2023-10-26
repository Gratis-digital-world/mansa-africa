import React from "react";
import Link from "next/link";

function PrevButton() {
  return (
    <div className="w-full">
      <Link href={"#topofform"}>
        <button
          type="button"
          data-previous
          className="bg-white rounded-lg text-black shadow-md w-full p-2 py-4 mt-6"
        >
          Go Back
        </button>
      </Link>
    </div>
  );
}

export default PrevButton;
