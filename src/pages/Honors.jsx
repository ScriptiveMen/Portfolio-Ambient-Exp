import React from "react";
import GlowText from "../components/GlowText";

const Honors = () => {
  const achievements = [
    {
      name: "Job-Ready Hackathon: Frontend",
      leaderboard: "Participation",
      year: "2025",
      link: "https://ik.imagekit.io/mfac8dwut/Portfolio%20Assets/FrontEnd%20Hackathon.pdf?updatedAt=1757489391158",
    },
  ];

  const viewCertificate = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className=" w-full pt-15 pb-15">
      <div className="heading pb-5 md:pb-20 flex flex-col items-baseline justify-start">
        <span className="md:text-[1.5vw] font-semibold text-[4.5vw] flex items-center gap-3  leading-7 tracking-tight">
          <div className="dash h-0.5 bg-white w-10"></div>
          Achievements
        </span>
        <GlowText title={"Honors."} />
      </div>

      <div className="flex md:flex-row gap-10 flex-col-reverse justify-between min-h-[50vh]">
        <div
          data-scroll
          data-scroll-speed="-1.5"
          className="left w-full md:w-[30%] flex items-center"
        >
          <div className="photo w-full md:w-[60%] flex flex-col justify-center gap-2">
            <span className="block uppercase text-sm">featured</span>
            <div className="profile w-full h-[12rem] overflow-hidden rounded-2xl bg-red-400">
              <img
                className="h-full w-full object-cover"
                src="/images/headshot1.avif"
                alt=""
              />
            </div>
            <p className="text-sm">
              I’m a developer with a keen interest in solving real-world
              problems through hackathons and structured coding challenges.
            </p>
          </div>
        </div>
        <div className="right w-full md:w-[60%]">
          {achievements.map((item, idx) => {
            return (
              <div
                key={idx}
                className="slim-card border-b gap-4  flex items-center justify-between py-7"
              >
                <div className="flex items-center justify-center gap-5 md:gap-20">
                  <div className="top-left text-[#c0c0c0]">
                    <div className="text text-[0.75rem]">
                      <span>{item.leaderboard}</span>
                    </div>
                    <span className="text-[0.75rem] text-[#30E897]">
                      {item.year}
                    </span>
                  </div>
                  <div className="middle">
                    <h3 className="text-[5vw] md:text-[1.8vw] font-bold tracking-tight">
                      {item.name}
                    </h3>
                  </div>
                </div>
                <div
                  onClick={() => viewCertificate(item.link)}
                  className="arrow hover:-rotate-45 transition-all duration-200 shrink-0 cursor-pointer w-9 h-9 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-[#414141]"
                >
                  <img className="invert" src="/images/arrow.svg" alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Honors;
