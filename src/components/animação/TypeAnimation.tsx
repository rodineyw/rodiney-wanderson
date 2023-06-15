import React from "react";
import { TypeAnimation } from "react-type-animation";

const Animation = () => {
  return (
    <TypeAnimation
      sequence={["Sou Front-end Developer e UI Designer.", 1000]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "2rem", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default Animation;
