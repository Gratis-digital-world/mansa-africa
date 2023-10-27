import React from "react";
import Image from "next/image";

function CustomNavigator() {
  return (
    <div className="border-[0.025rem] flex rounded-full bg-white w-1/4 p-1 bottom_content">
      <div className="flex w-full justify-start">
        <div className="rounded-full flex items-center justify-center w-8 p-1">
          <Image
            src="/images/circ-arr-left.png"
            height={100}
            width={100}
            alt=""
          />
        </div>
      </div>

      <div className="flex w-full justify-end">
        <div className="rounded-full flex items-center justify-center w-8 p-1">
          <Image
            src="/images/circ-arr-left.png"
            height={100}
            width={100}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default CustomNavigator;
