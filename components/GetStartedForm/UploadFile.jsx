import React from "react";
import Image from "next/image";

function UploadFile({ image, input_id, file_type }) {
  return (
    <div>
      {/* --------------- */}
      <label htmlFor={`${input_id}`}>
        <Image
          className="cursor-pointer"
          src={image}
          width={150}
          height={100}
          alt=""
        />
      </label>
      <input
        hidden
        id={`${input_id}`}
        name={`${input_id}`}
        type="file"
        accept={`${file_type}`}
      />
      {/* --------------- */}
    </div>
  );
}

export default UploadFile;
