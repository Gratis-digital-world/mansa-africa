import React, { useState, useEffect } from "react";
import Image from "next/image";

function UploadFile({ image, input_id, file_type }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  // rendering previews
  useEffect(() => {
    if (!file) return;

    let tmp = [];
    for (let i = 0; i < file.length; i++) {
      tmp.push(URL.createObjectURL(file[i]));
    }
    const objectUrls = tmp;
    setPreview(objectUrls);

    // free memory
    for (let i = 0; i < objectUrls.length; i++) {
      return () => {
        URL.revokeObjectURL(objectUrls[i]);
      };
    }
  }, [file]);

  return (
    <div>
      {/* --------------- */}
      <label htmlFor={`${input_id}`}>
        <Image
          // id="upimg"
          id={`${input_id}_oimg`}
          className="object-fill cursor-pointer rounded-lg h-[100px] w-[150px]"
          src={image}
          width={150}
          height={100}
          alt=""
        />
      </label>
      <input
        hidden
        // required
        id={`${input_id}`}
        name={`${input_id}`}
        // name="formfile"
        type="file"
        accept={`${file_type}`}
        onChange={(e) => {
          const upImg = document.getElementById(`${input_id}_oimg`);

          if (e.target.files.length > 0) {
            upImg.style.display = "none";
            setFile(e.target.files);

            //upload files
            const dataSource = document.forms["mansa-form-main"];
            const data = new FormData(dataSource);

            data.append("formfile", e.target.files);

            fetch("http://localhost:3001/upload", {
              method: "POST",
              body: data,
            })
              .then(() => {
                console.log("Success Upload!");
              })
              .catch((e) => {
                console.log(e);
              });
            //===================
          }
        }}
      />
      {preview &&
        preview.map((pic) => {
          return (
            <>
              <UploadFile
                image={pic}
                input_id={`${input_id}`}
                file_type={`${file_type}`}
              />
            </>
          );
        })}
      {/* --------------- */}
    </div>
  );
}

export default UploadFile;
