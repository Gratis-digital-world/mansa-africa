import Image from "next/image";
import React, { Component } from "react";

import Map1 from "@/public/images/map-a1.png";
import Map2 from "@/public/images/map-a2.png";
import Map3 from "@/public/images/map-a3.png";
import Map4 from "@/public/images/map-a4.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// function SliderContainer() {
class SliderImages extends Component {
  // constructor(props) {
  //   super(props);
  //   this.next = this.next.bind(this);
  //   this.previous = this.previous.bind(this);
  // }
  // next() {
  //   this.slider.slickNext();
  // }
  // previous() {
  //   this.slider.slickPrev();
  // }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
      fade: true,
    };

    return (
      // <div className="text-[#18181B] bg-white text-[1.1rem] px-12 pb-12">
      //   <div className="rounded-2xl bg-[#EFEFEF] text-[#1B1D29]">
      <Slider {...settings}>
        <img src={Map1.src} className="" alt="world map" />
        <img src={Map2.src} className="" alt="world map" />
        <img src={Map3.src} className="" alt="world map" />
        <img src={Map4.src} className="" alt="world map" />
      </Slider>
      //   </div>
      // </div>
    );
  }
}

export default SliderImages;
