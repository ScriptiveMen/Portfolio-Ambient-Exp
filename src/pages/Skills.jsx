import React from "react";
import GlowText from "../components/GlowText";
import SkillsAccordion from "../components/SkillsAccordion";

const Skills = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="heading pt-5 flex flex-col items-baseline justify-start">
        <span className="md:text-[1.5vw] font-semibold text-[4.5vw] flex items-center gap-3  leading-7 tracking-tight">
          <div className="dash h-0.5 bg-white w-10"></div>
          What I Am Good At
        </span>
        <GlowText title={"Skills and Interests."} />
      </div>

      <SkillsAccordion />
    </div>
  );
};

export default Skills;
