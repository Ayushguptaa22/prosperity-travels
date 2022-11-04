import React from "react";
import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Image from "next/image";
import { SliderData } from "./SliderData";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length === 0) {
    return null;
  }

  return (
    <div id="gallery" className="aboutHeading">
      <h2>
        <span className="format">Fun @</span> Prosperity
      </h2>
      <div>
        <div className="relative customSlider flex justify-center p-4 pb-1">
          {SliderData.map((slide, index) => {
            return (
              <div
                key={index}
                className={index === current ? "opacity-[1]" : "opacity-[1]"}
              >
                <FaArrowCircleLeft
                  onClick={prevSlide}
                  className="absolute top-[50%] left-[40px] text-grey cursor-pointer select-none z-[2]"
                  size={40}
                />
                {index === current && (
                  <Image
                    className="slider-gallery"
                    src={slide.image}
                    alt=".."
                    width="1050"
                    height="0"
                    objectFit="cover"
                  />
                )}
                <FaArrowCircleRight
                  onClick={nextSlide}
                  className="absolute top-[50%] right-[40px] text-grey cursor-pointer select-none z-[2]"
                  size={40}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
