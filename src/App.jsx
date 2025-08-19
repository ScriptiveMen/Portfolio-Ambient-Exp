import React from "react";
import Works from "./pages/Works";
import Education from "./pages/Education";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="font-[Helvetica] relative min-h-screen w-screen bg-[#111] text-white">
      <div className="circle1 fixed top-[15%] left-0 h-20 w-20 rounded-full bg-pink-400 blur-[35px] saturate-[1] opacity-40"></div>
      <div className="circle2 fixed top-[50%] right-0 h-20 w-20 rounded-full bg-teal-400 blur-[35px] saturate-[1] opacity-40"></div>

      <Navbar />
      <Home />
      {/* <Works /> */}
      {/* <Education /> */}
    </div>
  );
};

export default App;
