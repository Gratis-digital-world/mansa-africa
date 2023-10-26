import React from "react";
import Mansa2 from "@/public/images/mansa-2.png";
import Instagram from "@/public/images/instagram.png";
import Youtube from "@/public/images/youtube.png";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="text-white bg-[#1B222D] text-[1.1rem] lg:px-8 pt-8 pb-2">
      <div className="lg:grid grid-cols-2 gap-12 text-base">
        <div className="">
          <div className="">
            <Image src={Mansa2.src} height={130} width={130} alt="Mansa Logo" />
          </div>

          <div className="pt-4 px-2 leading-10 mb-4">
            <p>
              72 (B) El-Maahad El-Eshteraky Street – Heliopolis Cairo 11341,
              Egypt.
            </p>

            <p>info@themansa.africa</p>

            <p>+234 000 0000 000</p>
          </div>
        </div>
        <div className="lg:flex px-2 lg:px-0 items-center justify-end">
          <div className="grid grid-cols-2 gap-2 leading-8">
            <div>
              <div className="font-semibold">
                <p>Company</p>
              </div>
              <div className="opacity-60">
                <p>
                  <Link href={"/press"}>Press</Link>
                </p>
              </div>
            </div>
            <div>
              <div className="font-semibold">
                <p>Legal</p>
              </div>
              <div className="opacity-60">
                <p>
                  <Link href={"/privacy"}>Privacy Policy</Link>
                </p>
                <p>
                  <Link href={"/terms"}>Terms and Conditions</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="flex leading-10 border-t-[0.0025rem]">
        <div className="text-sm lg:px-0 px-2 w-full opacity-70 pt-2 mb-4">
          Copyright &copy; 2023 MansaAfrica &reg;. All Right Reserved.
        </div>
        <div className="w-full lg:px-0 px-2 flex items-center justify-end gap-4">
          <div className="">
            <Link href={"/"} target="_blank">
              <Image
                src={Instagram.src}
                width={24}
                height={24}
                alt="Instagram handle"
              />
            </Link>
          </div>
          <div className="">
            <Link href={"/"} target="_blank">
              <Image
                src={Youtube.src}
                width={24}
                height={24}
                alt="Youtube channel"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
