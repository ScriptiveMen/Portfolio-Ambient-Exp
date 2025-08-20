import React from "react";
import GlowText from "../components/GlowText";
import GradientText from "../components/GradientText";

const About = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="heading flex flex-col items-baseline justify-start">
        <p className="md:text-[2.5vw] text-[6vw] pl-[0.4vw] leading-2 tracking-tight">
          Not so
        </p>

        <GlowText title={"Boring."} />

        <p className="md:text-[2.5vw]  text-[6vw] pl-[0.4vw]  flex tracking-tight items-center gap-2">
          about me section{" "}
          <img className="h-10 md:h-15" src="/images/message.png" alt="" />
        </p>
      </div>
    </div>
  );
};

export default About;
