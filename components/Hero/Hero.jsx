"use client";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Map from "@/public/images/map.png";
import Link from "next/link";

function Hero() {
  return (
    // from-[#F3D31D]
    <div className="bg-gradient-to-r from-[#FFFFFF] from-55% to-[#0062E4]">
      <div className="lg:px-12 px-4 pt-4">
        <Navbar />
      </div>
      <div className="lg:grid lg:grid-cols-2">
        <div className="pl-12 py-8 lg:pr-0 pr-8">
          <p className="text-[3.625rem] text-[#18181B] leading-none font-semibold pb-8">
            Empowering African Businesses with Data
          </p>
          <div className="text-[#52525B] leading-7">
            <p className="pb-8 leading-9">
              Your gateway to growth and investment opportunities across the
              continent. We support SMEs in making informed decisions and
              seizing growth opportunities in a highly competitive market.
            </p>

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
        <div className="hidden lg:flex items-end justify-end w-full">
          <img src={Map.src} className="object-fill" alt="world map" />
          {/* <Image
            className="object-fill"
            src={Map.src}
            alt={"world map"}
            width={700}
            height={300}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
