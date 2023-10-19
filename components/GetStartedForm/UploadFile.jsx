import React, { useState } from "react";
import Image from "next/image";

function UploadFile({ image, input_id, file_type }) {
  const [file, setFile] = useState(null);

  function handleFile(e) {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  }

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
        onChange={(e) => setFile(e.target.files[0])}
      />
      {/* --------------- */}
    </div>
  );
}

export default UploadFile;
