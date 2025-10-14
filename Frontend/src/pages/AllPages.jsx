import Works from "./Works";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import ScrollProvider from "../components/ScrollProvider";
import Honors from "./Honors";
import Certifications from "./Certifications";
import Footer from "../components/Footer";

const AllPages = () => {
    return (
        <ScrollProvider>
            <div className="relative z-10">
                <Home />
                <Works />
                <Skills />
                <Honors />
                {/* <Certifications /> */}
                <About />
                <Footer />
            </div>
        </ScrollProvider>
    );
};

export default AllPages;
