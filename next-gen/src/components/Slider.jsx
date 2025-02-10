import React, { Children } from "react";
import Slider from "react-slick";

const SliderComponent =({settings, children})=> {
 
  return (
    <div className="slider-container">
        <Slider {...settings}>
        {children}
        </Slider>
    </div>
  );
}
export default SliderComponent;
