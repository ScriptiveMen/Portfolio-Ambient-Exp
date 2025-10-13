// ScrollProvider.jsx
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import imagesLoaded from "imagesloaded"; // ✅ import
import "locomotive-scroll/dist/locomotive-scroll.css";

const ScrollProvider = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      lerp: 0.08,
      smooth: true,
      smartphone: {
        smooth: false,
      },
      tablet: {
        smooth: false,
      },
    });

    // ✅ wait until all images inside container are loaded
    imagesLoaded(containerRef.current, () => {
      scroll.update();
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={containerRef}>
      {children}
    </div>
  );
};

export default ScrollProvider;
