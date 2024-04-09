import React from "react";

type Props = {};

const CircleWrapper = (props: Props) => {
  return (
    <div className="circle-wrapper">
      <div className="absolute -inset-0.5 bg-[#7f7fd5] rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition duration-100 group-hover:duration-200 animate-tilt"></div>
      <div className="outer-circle">
        <div
          data-w-id="1938cb20-fb0e-35e2-8e3d-eb764416b74c"
          className="mini-circle opacity-0 transform translate-x-34.0846 translate-y-72.6686 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserver-3d transform-will-change"
        ></div>
        <div className="outer-circle-copy"></div>
        <div className="inner-cirle"></div>
      </div>
    </div>
  );
};

export default CircleWrapper;
