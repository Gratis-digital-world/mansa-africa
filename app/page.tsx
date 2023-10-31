"use client";
import Hero from "@/components/Hero/Hero";
import PowerMansa from "@/components/PowerMansa/PowerMansa";
import OurServices from "@/components/OurServices/OurServices";
import Community from "@/components/Community/Community";
import Subscribe from "@/components/Subscribe/Subscribe";
import Footer from "@/components/Footer/Footer";
import WhyMansa from "@/components/WhyMansa/WhyMansa";
import SliderContainer from "@/components/CDRepo/SliderContainer";
import Head from "next/head";
// import SliderImages from "@/components/SliderImages";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Create a new script element
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      window.$crisp=[];
      window.CRISP_WEBSITE_ID="4afe6845-0f28-4f86-866b-658f8d90477d";
      (function(){
        var d=document;
        var s=d.createElement("script");
        s.src="https://client.crisp.chat/l.js";
        s.async=1;
        d.getElementsByTagName("head")[0].appendChild(s);
      })();
    `;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="h-screen text-[#18181B] bg-white text-[1.1rem]">
      <Hero />
      <PowerMansa />
      <hr className="pb-8" />
      <WhyMansa />
      <SliderContainer />
      <OurServices />
      <Community />
      <Subscribe />
      <Footer />
    </div>
  );
}
