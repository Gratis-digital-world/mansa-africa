"use client";
import Hero from "@/components/Hero/Hero";
import PowerMansa from "@/components/PowerMansa/PowerMansa";
import OurServices from "@/components/OurServices/OurServices";
import Community from "@/components/Community/Community";
import Subscribe from "@/components/Subscribe/Subscribe";
import Footer from "@/components/Footer/Footer";
import WhyMansa from "@/components/WhyMansa/WhyMansa";
import SliderContainer from "@/components/CDRepo/SliderContainer";
// import SliderImages from "@/components/SliderImages";

export default function Home() {
  return (
    <div className="h-screen text-[#18181B] bg-white text-[1.1rem]">
      <Hero />
      <PowerMansa />
      {/* <div> */}
      <hr className="pb-8" />
      {/* </div> */}
      <WhyMansa />
      <SliderContainer />
      {/* <SliderImages /> */}
      <OurServices />
      <Community />
      <Subscribe />
      <Footer />
    </div>
  );
}
