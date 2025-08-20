import React from "react";

const GradientText = ({ title }) => {
  return (
    <span className=" block text-6xl md:text-7xl font-bold tracking-tight bg-[url('public/images/glowtext.jpeg')] bg-clip-text text-transparent bg-cover bg-center">
      {title}
    </span>
  );
};

export default GradientText;
