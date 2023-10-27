import React, { useState } from "react";
import Image from "next/image";
import RepImage from "@/public/images/doc-preview.png";
import Pdf from "@/public/images/pdf.png";
import Doc from "@/public/images/doc.png";

function UploadMany({ image, input_id, file_type }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  let theBlob;
  let docBlob;
  let pdfBlob;

  fetch(RepImage.src)
    .then((response) => response.blob())
    .then((imageBlob) => {
      theBlob = imageBlob;
    })
    .catch((error) => {
      console.error("Error converting image to Blob:", error);
    });

  fetch(Pdf.src)
    .then((response) => response.blob())
    .then((imageBlob) => {
      pdfBlob = imageBlob;
    });

  fetch(Doc.src)
    .then((response) => response.blob())
    .then((imageBlob) => {
      docBlob = imageBlob;
    });

  const previewFile = (thefile) => {
    if (!thefile) return false;

    let tmp = [];

    for (let i = 0; i < thefile.length; i++) {
      if (thefile[i].type.startsWith("image")) {
        tmp.push(URL.createObjectURL(thefile[i]));
      } else if (thefile[i].type === "application/pdf") {
        tmp.push(URL.createObjectURL(pdfBlob));
      } else if (
        thefile[0].type === "application/msword" ||
        thefile[0].type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        tmp.push(URL.createObjectURL(docBlob));
      } else {
        tmp.push(URL.createObjectURL(theBlob));
      }
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

  return (
    <div className="flex">
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
        // multiple
        id={`${input_id}`}
        name={`${input_id}`}
        type="file"
        accept={`${file_type}`}
        onChange={(e) => {
          const upImg = document.getElementById(`${input_id}_oimg`);

          if (e.target.files.length > 0) {
            upImg.style.display = "none";
            setFile(e.target.files);

            previewFile(e.target.files);
          }
        }}
      />
      {preview &&
        preview.map((pic) => {
          return (
            <>
              <UploadMany
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

export default UploadMany;
