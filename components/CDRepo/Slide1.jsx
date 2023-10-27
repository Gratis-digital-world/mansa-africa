"use client";
import React, { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"];

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-container mx-auto">
      <div className="relative h-40 w-72">
        <div className="carousel transition-transform ease-in-out duration-300">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`bg-blue-200 h-full w-full p-4 flex items-center justify-center transform ${
                index === currentIndex ? "translate-x-0" : "translate-x-full"
              } transition-transform duration-300`}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
          onClick={goToPreviousSlide}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
          onClick={goToNextSlide}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
