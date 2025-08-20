import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getGMTOffset = () => {
    const offsetMinutes = -time.getTimezoneOffset(); // in minutes (negative means ahead of GMT)
    const sign = offsetMinutes >= 0 ? "+" : "-";
    const absOffset = Math.abs(offsetMinutes);
    const hours = String(Math.floor(absOffset / 60)).padStart(2, "0");
    const minutes = String(absOffset % 60).padStart(2, "0");
    return `GMT (${sign}${hours}:${minutes})`;
  };

  return (
    <div id="home" className="min-h-screen w-full">
      <Navbar />
      <div className="heading font-semibold flex flex-col items-start relative pb-40 pt-15 md:pt-30">
        <div className=" flex w-full justify-start gap-[12vw]">
          <h1 className="text-[19vw] md:text-[12vw] leading-none tracking-tight">
            Creative
          </h1>

          <div className="sub-text absolute bottom-0 md:static flex items-center justify-center gap-10 md:gap-15">
            <span className="text-[0.67rem] font-medium text-gray-400 pt-0 block uppercase">
              Currently Available FOR <br /> Freelance Worldwide
            </span>

            <span className="text-[0.67rem] font-medium text-gray-400 pt-0 block  uppercase">
              My local Time{" "}
              {time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}{" "}
              <br />
              {getGMTOffset()}
            </span>
          </div>
        </div>

        <div className="w-full leading-none flex flex-col md:flex-row items-end md:items-baseline md:py-4 md:justify-end md:gap-10">
          <p className="italianno-regular pr-3 text-[15vw] leading-none md:text-[9vw] text-teal-400">
            " Web "
          </p>
          <h1 className="text-[19vw] md:text-[12vw] leading-[0.5]">
            Developer
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
