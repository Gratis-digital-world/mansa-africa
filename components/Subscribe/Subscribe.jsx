import React from "react";
import Link from "next/link";

function Subscribe() {
  return (
    <div className="text-[#18181B] bg-[#F3D31D] text-[1.1rem] lg:px-12 px-2 pb-3">
      <div className="py-4">
        <p className="text-3xl font-semibold">Join Us</p>

        <p className="text-xs font-semibold">
          to access a wealth of knowledge and seize the opportunities that await
          your business on this vibrant continent.
        </p>

        <div className="lg:-mt-12 flex items-center justify-end w-full">
          <Link href={"/start"}>
            <button
              type="button"
              className={`rounded-lg bg-[#010DFF] px-4 py-2 text-base text-[#fff]`}
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
