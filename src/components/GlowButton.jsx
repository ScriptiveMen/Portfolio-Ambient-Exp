import React from "react";

const GlowButton = () => {
  return (
    <button
      className="
        flex items-center gap-2 
        rounded-full 
        md:px-5 md:py-3 
        px-3 py-2
        bg-gradient-to-r from-green-500 to-green-600
        text-white text-[0.70rem] md:text-sm font-medium tracking-tight
        shadow-lg shadow-green-500/40
        hover:scale-102 cursor-pointer hover:shadow-green-500/50
        transition-all duration-300 ease-in-out
      "
    >
      {/* glowing dot */}
      <span className="h-2 w-2 rounded-full bg-white animate-pulse"></span>
      Contact Me, I'm available for work
    </button>
  );
};

export default GlowButton;
