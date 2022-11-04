import React from "react";
import Slider from "../components/Slider";
import MidContent from "../components/midContent";
import { SliderData } from "../components/SliderData";
const events = () => {
  return (
    <>
      <div className="eventsPosition">
        <MidContent />
        <Slider slides={SliderData} />
        <Slider slides={SliderData} />
      </div>
    </>
  );
};

export default events;
