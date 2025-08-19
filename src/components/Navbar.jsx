import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="sticky z-[999] backdrop-blur-[10px] top-0 left-0 w-full py-5 uppercase flex items-center justify-between px-5 md:px-15">
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="cursor-pointer text-md"
      >
        <span>Satya </span>Kumar Ram
      </Link>

      <Link
        to="work"
        smooth={true}
        duration={500}
        className="cursor-pointer text-md hidden md:block"
      >
        Work Samples
      </Link>

      <Link
        to="work"
        smooth={true}
        duration={500}
        className="cursor-pointer text-md hidden md:block"
      >
        Download Resume
      </Link>

      <NavLink
        to={"#"}
        className={`text-md flex items-center justify-center gap-2`}
      >
        <i className="ri-github-fill text-2xl"></i>
        See Github
      </NavLink>
    </div>
  );
};

export default Navbar;
