import React, { useState, useEffect } from "react";
import Image from "next/image";
import RepImage from "@/public/images/doc-preview.png";

function UploadFile({ image, input_id, file_type }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  let theBlob;

  fetch(RepImage.src)
    .then((response) => response.blob())
    .then((imageBlob) => {
      theBlob = imageBlob;
      // console.log("none image file");
    })
    .catch((error) => {
      console.error("Error converting image to Blob:", error);
    });

  const previewFile = (thefile) => {
    if (!thefile) return false;

    let tmp = [];

    if (thefile[0].type.startsWith("image")) {
      for (let i = 0; i < thefile.length; i++) {
        tmp.push(URL.createObjectURL(thefile[i]));
      }
    } else {
      tmp.push(URL.createObjectURL(theBlob));
    }

    const objectUrls = tmp;

    setPreview(objectUrls);

    // free memory
    for (let i = 0; i < objectUrls.length; i++) {
      return () => {
        URL.revokeObjectURL(objectUrls[i]);
      };
    }
    // console.log(objectUrls + " - objecturl");

    return true;
  };

  const uploadSingleFile = () => {
    //upload files
    const dataSource = document.forms["mansa-form-main"];
    const data = new FormData(dataSource);

    // data.append(`${input_id}`, e.target.files);

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
  };

  return (
    <div>
      {/* --------------- */}
      <label htmlFor={`${input_id}`}>
        <Image
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

            previewFile(e.target.files);
            // Call upload function
            // multiple upload occurs for each
            //(not efficient)

            // uploadSingleFile();
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
                key={"x"}
              />
            </>
          );
        })}
      {/* --------------- */}
    </div>
  );
}

export default UploadFile;
