import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="sticky z-[999] backdrop-blur-[10px] top-0 left-0 w-full py-5 pt-[2rem] flex items-center justify-between">
      <div className="left">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer text-md font-extralight flex items-center justify-center gap-2 md:gap-4"
        >
          <h2 className="text-sm md:text-lg">
            <span className="font-normal">Satya </span>Kumar Ram
          </h2>

          <span className=" font-thin block text-[0.70rem] md:text-[0.90rem] py-[0.15rem] px-3 md:px-5 rounded-full bg-[#EF6A93] shadow-[0_6px_20px_4px_rgba(244,114,182,0.25)]">
            portfolio
          </span>
        </Link>
      </div>

      <div className="right font-thin flex items-center justify-center gap-5">
        <Link
          to="work"
          smooth={true}
          duration={500}
          className="cursor-pointer text-md hidden md:block opacity-60"
        >
          Work Samples
        </Link>

        <Link
          to="work"
          smooth={true}
          duration={500}
          className="cursor-pointer text-md hidden md:block opacity-60"
        >
          Download Resume
        </Link>

        <NavLink
          to={"#"}
          className={`text-md hidden md:flex  items-center justify-center gap-2`}
        >
          <i className="ri-github-fill text-2xl"></i>
          See Github
        </NavLink>

        <div className="flex md:hidden items-center justify-center gap-1 text-[#EF6A93]">
          <i className="ri-menu-2-line text-sm"></i>
          <span className="block text-sm">Menu</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
