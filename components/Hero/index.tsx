import CircleWrapper from "@/components/Hero/CircleWrapper";
import CircleWrapperLeft from "@/components/Hero/CircleWrapperLeft";
import HeroMain from "@/components/Hero/HeroMain";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <header className="section-hero-header h-auto">
      <CircleWrapper />
      <CircleWrapperLeft />
      <HeroMain />
    </header>
  );
};

export default Hero;
