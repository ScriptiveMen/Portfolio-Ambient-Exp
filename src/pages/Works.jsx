import GlowText from "../components/GlowText";

const Works = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="heading pb-15 flex flex-col items-baseline justify-start">
        <span className="md:text-[1.5vw] font-semibold text-[4.5vw] flex items-center gap-3  leading-7 tracking-tight">
          <div className="dash h-0.5 bg-white w-10"></div>
          What I do
        </span>
        <GlowText title={"Work Samples."} />
      </div>

      <div className="row1 flex md:flex-row flex-col justify-start md:gap-50 gap-10 px-5 py-5 md:py-10 items-end ">
        <div className="card1 w-full md:w-[55%] aspect-[1/1] overflow-hidden rounded-3xl md:rounded-4xl">
          <img
            className="h-full w-full object-cover "
            src="/images/web.jpg"
            alt=""
          />
        </div>
        <div className="card2 w-full md:w-[32%] aspect-[5/5] overflow-hidden rounded-3xl md:rounded-4xl">
          <img
            className="h-full w-full object-cover "
            src="/images/web1.png"
            alt=""
          />
        </div>
      </div>
      <div className="row1 flex md:flex-row flex-col justify-center md:gap-50 gap-10 px-5 py-5 md:py-10 items-end ">
        <div className="card1 w-full md:w-[50%] aspect-[1/1]  overflow-hidden rounded-4xl">
          <img
            className="h-full w-full object-cover "
            src="/images/web2.png"
            alt=""
          />
        </div>
      </div>
      <div className="row1 flex  flex-col md:flex-row-reverse justify-start md:gap-50 gap-10 px-5 py-5 md:py-10 items-end ">
        <div className="card1 w-full md:w-[55%] aspect-[2/2]  overflow-hidden rounded-3xl md:rounded-4xl">
          <img
            className="h-full w-full object-cover "
            src="/images/web4.png"
            alt=""
          />
        </div>
        <div className="card2 w-full md:w-[32%] aspect-[5/5] overflow-hidden rounded-3xl md:rounded-4xl">
          <img
            className="h-full w-full object-cover "
            src="/images/web3.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Works;
