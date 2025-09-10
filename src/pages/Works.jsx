import GlowText from "../components/GlowText";
import WorkCard from "../components/WorkCard";

const Works = () => {
  const workData = [
    {
      rowClass:
        "flex md:flex-row flex-col justify-start md:gap-50 gap-10 px-5 py-5 md:py-10 items-end",
      cards: [
        {
          wrapperClass:
            "relative w-full md:w-[55%] aspect-[1/1] overflow-hidden rounded-3xl md:rounded-4xl",
          image: "/images/OrinAI.png",
          year: "2025",
          role: "Full-Stack",
          title: "OrinAI Chatbot",
          link: "https://mern-chatbot-of4m.onrender.com", // 🔗 live link
        },
        {
          wrapperClass:
            "relative w-full md:w-[32%] aspect-[5/5] overflow-hidden rounded-3xl md:rounded-4xl",
          image: "/images/web1.png",
          year: "2025",
          role: "Full-Stack",
          title: "Portfolio Website",
          link: "https://yourportfolio.com",
        },
      ],
    },
    {
      rowClass:
        "flex md:flex-row flex-col justify-center md:gap-50 gap-10 px-5 py-5 md:py-10 items-end",
      cards: [
        {
          wrapperClass:
            "relative w-full md:w-[50%] aspect-[1/1] overflow-hidden rounded-4xl",
          image: "/images/web2.png",
          year: "2025",
          role: "Full-Stack",
          title: "E-Commerce Website",
          link: "https://myecommerce.com",
        },
      ],
    },
    {
      rowClass:
        "flex flex-col md:flex-row-reverse justify-start md:gap-50 gap-10 px-5 py-5 md:py-10 items-end",
      cards: [
        {
          wrapperClass:
            "relative w-full md:w-[55%] aspect-[2/2] overflow-hidden rounded-3xl md:rounded-4xl",
          image: "/images/web4.png",
          year: "2025",
          role: "Full-Stack",
          title: "Admin Dashboard",
          link: "https://admindashboard.com",
        },
        {
          wrapperClass:
            "relative w-full md:w-[32%] aspect-[5/5] overflow-hidden rounded-3xl md:rounded-4xl",
          image: "/images/web3.png",
          year: "2025",
          role: "Full-Stack",
          title: "Landing Page",
          link: "https://landingpage.com",
        },
      ],
    },
  ];

  return (
    <div id="work" className="w-full pt-25 pb-10">
      <div className="heading pb-10 md:pb-20  flex flex-col items-baseline justify-start">
        <span className="md:text-[1.5vw] font-semibold text-[4.5vw] flex items-center gap-3  leading-7 tracking-tight">
          <div className="dash h-0.5 bg-white w-10"></div>
          What I do
        </span>
        <GlowText title={"Work Samples."} />
      </div>

      {workData.map((row, i) => (
        <div key={i} className={`row${i + 1} ${row.rowClass}`}>
          {row.cards.map((card, j) => (
            <WorkCard key={j} card={card} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Works;
