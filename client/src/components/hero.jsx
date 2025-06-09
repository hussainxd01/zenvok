"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // Added import for ScrollToPlugin

export default function HeroComponent({ heroRef }) {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin); // Register ScrollToPlugin

  const svgRef = useRef(null);
  const letterRefs = useRef([]);
  const arrowRef = useRef(null);
  const outerDivRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 1,
    });

    // Animation...
    tl.fromTo(
      heroRef.current,

      { y: "-100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1.5, ease: "power3.out" }
    );

    tl.fromTo(
      letterRefs.current,
      {
        yPercent: 100,
        opacity: 0,
        scaleY: 1.2,
        transformOrigin: "bottom",
      },
      {
        yPercent: 0,
        opacity: 1,
        scaleY: 1,
        duration: 1.2,
        stagger: 0.08,
        ease: "power3.out",
      },
      "-=1.2"
    );

    const scrollTween = gsap.to(heroRef.current, {
      height: "400px",
      ease: "power3.out",
      scrollTrigger: {
        trigger: outerDivRef.current,
        start: "bottom 90%",
        scrub: 1,
        duration: 2.5,
      },
    });

    // Add click handler for the arrow
    if (arrowRef.current) {
      arrowRef.current.addEventListener("click", handleArrowClick);
    }

    return () => {
      if (scrollTween.scrollTrigger) scrollTween.scrollTrigger.kill();
      scrollTween.kill();

      // Clean up event listener
      if (arrowRef.current) {
        arrowRef.current.removeEventListener("click", handleArrowClick);
      }
    };
  }, []);

  // Arrow click handler to scroll down smoothly
  const handleArrowClick = () => {
    // Get the current viewport height
    const viewportHeight = window.innerHeight;

    // Scroll down 100vh with animation
    gsap.to(window, {
      duration: 1.2, // animation duration in seconds
      scrollTo: { y: viewportHeight, autoKill: false },
      ease: "power3.out",
    });
  };

  const setLetterRef = (el) => {
    if (el && !letterRefs.current.includes(el)) {
      letterRefs.current.push(el);
    }
  };

  return (
    <div ref={outerDivRef}>
      <div
        ref={heroRef}
        className="w-full h-[700px] bg-black flex flex-col items-center text-white overflow-hidden pt-20"
        data-theme="dark"
      >
        <div className="w-full flex flex-col gap-32">
          {" "}
          <div className="logo-wrapper w-full sm:px-10 mt-10 overflow-hidden">
            <svg
              ref={svgRef}
              width="100%"
              height="auto"
              viewBox="0 0 1364 253"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
              className="w-full"
            >
              <path
                ref={setLetterRef}
                d="M0.0500007 196.5L113.8 56.5H0.0500007V3.99998H183.45V56.5L69.7 196.5H183.45V249H0.0500007V196.5Z"
                fill="white"
              />
              <path
                ref={setLetterRef}
                d="M369.059 99.55V153.45H260.909V194.75H389.359V249H250.409C221.009 249 201.409 229.4 201.409 200V161.85C201.409 141.9 215.059 127.9 235.359 128.25H237.459V124.75H235.359C215.059 124.75 201.409 111.1 201.409 91.15V53C201.409 23.6 221.009 3.99998 250.409 3.99998H389.359V58.25H260.909V99.55H369.059Z"
                fill="white"
              />
              <path
                ref={setLetterRef}
                d="M468.38 103.4V249H408.88V102.7C408.88 35.85 451.23 0.499987 516.33 0.499987C579.68 0.499987 622.03 35.85 622.03 102.7V249H562.53V103.4C562.53 71.9 540.13 56.5 515.28 56.5C490.08 56.5 468.38 71.9 468.38 103.4Z"
                fill="white"
              />
              <path
                ref={setLetterRef}
                d="M641.986 249V3.99998H701.486V193H705.686C751.536 193 781.636 153.8 781.636 94.3V3.99998H841.136V91.5C841.136 193.7 784.786 249 680.136 249H641.986Z"
                fill="white"
              />
              <path
                ref={setLetterRef}
                d="M861.427 126.5C861.427 50.9 912.527 0.499987 988.827 0.499987C1065.48 0.499987 1116.23 50.9 1116.23 126.5C1116.23 202.1 1065.48 252.5 988.827 252.5C912.527 252.5 861.427 202.1 861.427 126.5ZM920.927 126.5C920.927 168.5 948.227 196.5 988.827 196.5C1029.43 196.5 1056.73 168.5 1056.73 126.5C1056.73 84.5 1029.43 56.5 988.827 56.5C948.227 56.5 920.927 84.5 920.927 126.5Z"
                fill="white"
              />
              <path
                ref={setLetterRef}
                d="M1136.22 249V3.99998H1195.72V147.15L1280.07 3.99998H1346.57L1278.32 114.6L1363.72 249H1295.47L1244.37 169.9L1195.72 249H1136.22Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="hero-title sm:px-10 flex gap-40">
            <div>
              <p>Design. Engineering. Execution</p>
              <p>Built for what’s next.</p>
            </div>
            <div>
              <p>Two Engagement</p>
              <p>Models: Cash & Equity</p>
            </div>
          </div>
        </div>

        <div className="controls absolute bottom-20 right-10">
          <div
            ref={arrowRef}
            className="icon-wrapper p-4 cursor-pointer hover:opacity-70 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 12 12"
              className="icon"
            >
              <path
                fill="currentColor"
                d="m5.796 9.246-2.97-2.97-.762.782 4.356 4.356 4.356-4.356-.782-.782-2.96 2.96V1.039H5.806z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
