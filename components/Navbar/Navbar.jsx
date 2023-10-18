import React from "react";
import Image from "next/image";
import Link from "next/link";
import Mansa from "@/public/images/mansa.png";

function Navbar() {
  return (
    <div className="rounded-2xl bg-[#1B222D] py-2 pl-2 text-white grid grid-cols-2">
      <div className="flex items-center justify-start">
        <Link href={"/"}>
          <Image src={Mansa.src} alt={"Mansa Logo"} width={91} height={50} />
        </Link>
      </div>

      <div className="flex items-center justify-end pr-4">
        <Link href={"/start"}>
          <button
            type="button"
            className={`rounded-lg bg-[#F3D31D] px-4 py-2 text-base text-[#18181B]`}
          >
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
