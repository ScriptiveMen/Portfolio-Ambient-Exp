import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div id="home" className="min-h-screen w-full px-5 md:px-15 pt-5 md:pt-20 ">
      <div className="heading">
        <div className="text-[12vw] leading-none">Creative</div>
        <div className="text-[12vw] leading-none flex items-baseline justify-end gap-10">
          <p className="italianno-regular text-[9vw] text-pink-400">" Web "</p>
          <h1>Developer</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
