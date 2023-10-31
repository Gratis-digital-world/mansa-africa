import Image from "next/image";
import React, { Component } from "react";
import CDRepo from "./CDRepo";
import AADiscovery from "./AADiscovery";
import IDMaking from "./IDMaking";
import RMitigation from "./RMitigation";
import MInsights from "./MInsights";

import CustomNavigator from "./CustomNavigator";

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
      arrows: false,
    };

    return (
      <div className="text-[#18181B] bg-white text-[1.1rem] lg:px-12 px-4 lg:pb-12 xpb-4">
        <div className="rounded-2xl bg-[#EFEFEF] text-[#1B1D29] outer-div">
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <CDRepo />
            <AADiscovery />
            <IDMaking />
            <RMitigation />
            <MInsights />
          </Slider>{" "}
          {/* <CustomNavigator /> */}
          {/* ================= */}
          <div className="hidden lg:block inner-div">
            <div className="z-0 mt-44 border-[0.1rem] flex rounded-full bg-white w-1/4 p-1 cbottom_content">
              <div className="flex w-full justify-start">
                <div
                  className="rounded-full flex items-center justify-center w-8 p-1 cursor-pointer"
                  onClick={this.previous}
                >
                  <Image
                    src="/images/circ-arr-left.png"
                    height={100}
                    width={100}
                    alt=""
                  />
                </div>
              </div>

              <div className="flex w-full justify-end">
                <div
                  className="rounded-full flex items-center justify-center w-8 p-1 cursor-pointer"
                  onClick={this.next}
                >
                  <Image
                    src="/images/circ-arr-right.png"
                    height={100}
                    width={100}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* ================ */}
        </div>

        {/* --------- */}
        {/* <div class="outer-div">
          <div class="inner-div">ssssss</div>
        </div> */}
      </div>
    );
  }
}

export default SliderContainer;
