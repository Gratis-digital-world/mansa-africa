import Image from "next/image";
import React, { Component } from "react";
import CDRepo from "./CDRepo";
import AADiscovery from "./AADiscovery";
import IDMaking from "./IDMaking";
import RMitigation from "./RMitigation";
import MInsights from "./MInsights";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// function SliderContainer() {
class SliderContainer extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 5000,
      fade: true,
    };

    return (
      <div className="text-[#18181B] bg-white text-[1.1rem] px-12 pb-12">
        <div className="rounded-2xl bg-[#EFEFEF] text-[#1B1D29]">
          <Slider {...settings}>
            <CDRepo />
            <AADiscovery />
            <IDMaking />
            <RMitigation />
            <MInsights />
          </Slider>
        </div>
      </div>
    );
  }
}

export default SliderContainer;
