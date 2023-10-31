import React from "react";
import Link from "next/link";

function Success() {
  return (
    <div className="text-[#18181B] bg-white text-[1.1rem] px-12 pt-8 flex items-center justify-center w-screen h-screen">
      <div className="text-center">
        <div className="font-semibold pb-6">Submisssion Completed</div>
        <div className="text-sm pb-8">
          Congratulations on taking the first step to unlocking your SMEs
          potential with Mansa Africa!
        </div>
        <div className="">
          <Link href={"/"}>
            <button className="bg-[#010DFF] text-white h-12 rounded-lg lg:w-2/5 px-3">
              Back to homepage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Success;
