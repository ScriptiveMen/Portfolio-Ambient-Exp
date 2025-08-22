import Works from "./pages/Works";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import ScrollProvider from "./components/ScrollProvider";
import Honors from "./pages/Honors";
import Certifications from "./pages/Certifications";

const App = () => {
  return (
    <div className="font-[red_hat_display] relative min-h-screen w-screen bg-[#111] text-white px-5 md:px-20 overflow-x-hidden">
      <div className="circle1 fixed top-[15%] left-0 h-20 w-20 rounded-full bg-pink-400 blur-[35px] saturate-[1] opacity-40"></div>
      <div className="circle2 fixed top-[50%] right-0 h-20 w-20 rounded-full bg-teal-400 blur-[35px] saturate-[1] opacity-40"></div>

      <ScrollProvider>
        <Home />
        <Works />
        <Skills />
        <Honors />
        <Certifications />
        <About />
      </ScrollProvider>
    </div>
  );
};

export default App;
