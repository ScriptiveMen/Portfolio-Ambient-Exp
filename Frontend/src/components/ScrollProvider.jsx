import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import imagesLoaded from "imagesloaded";
import "locomotive-scroll/dist/locomotive-scroll.css";

const ScrollProvider = ({ children }) => {
    const containerRef = useRef(null);
    const locomotiveScrollRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) {
            console.log("❌ Container ref not found");
            return;
        }

        // Initialize Locomotive Scroll
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

        locomotiveScrollRef.current = scroll;

        // Store instance on the container element AND window for access
        containerRef.current.locomotive = scroll;
        window.locomotiveScroll = scroll; // Add this for easier access

        // Wait for all images to load before initial update
        imagesLoaded(containerRef.current, () => {
            scroll.update();
        });

        // Update on window resize
        const handleResize = () => {
            scroll.update();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            console.log("🧹 Cleaning up Locomotive");
            window.removeEventListener("resize", handleResize);
            if (scroll) scroll.destroy();
            if (containerRef.current) {
                containerRef.current.locomotive = null;
            }
            window.locomotiveScroll = null;
        };
    }, []);

    return (
        <div data-scroll-container ref={containerRef}>
            {children}
        </div>
    );
};

export default ScrollProvider;
