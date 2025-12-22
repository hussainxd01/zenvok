"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default function HeroComponent() {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const svgRef = useRef(null);
  const letterRefs = useRef([]);
  const arrowRef = useRef(null);
  const outerDivRef = useRef(null);
  const heroRef = useRef(null);

  const loaderRef = useRef(null);
  const loaderWordRefs = useRef([]);

  const hasAnimated = useRef(false);

  const setLetterRef = (el) => {
    if (el && !letterRefs.current.includes(el)) {
      letterRefs.current.push(el);
    }
  };

  const setLoaderWordRef = (el) => {
    if (el && !loaderWordRefs.current.includes(el)) {
      loaderWordRefs.current.push(el);
    }
  };

  const handleArrowClick = () => {
    const viewportHeight = window.innerHeight;
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: viewportHeight, autoKill: false },
      ease: "power3.out",
    });
  };

  useLayoutEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // word-by-word reveal
      tl.fromTo(
        loaderWordRefs.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: "power2.out",
        }
      );

      // slide loader down
      tl.to(loaderRef.current, {
        y: "100%",
        duration: 1.1,
        ease: "power3.inOut",
      });

      // hero slide in
      tl.fromTo(
        heroRef.current,
        { y: "-100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1.1, ease: "power3.out" },
        "<"
      );

      // letter stagger animation
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
          duration: 1,
          stagger: 0.07,
          ease: "power3.out",
        },
        "-=0.6"
      );

      // shrink hero on scroll
      gsap.to(heroRef.current, {
        height: "400px",
        ease: "power3.out",
        scrollTrigger: {
          trigger: outerDivRef.current,
          start: "bottom 90%",
          scrub: 1,
          duration: 2.5,
        },
      });
    });

    arrowRef.current?.addEventListener("click", handleArrowClick);

    return () => {
      ctx.revert();
      arrowRef.current?.removeEventListener("click", handleArrowClick);
    };
  }, []);

  return (
    <div ref={outerDivRef} className="relative overflow-hidden">
      {/* LOADING SCREEN */}
      <div
        ref={loaderRef}
        className="fixed inset-0 bg-white z-[99999] flex items-center justify-center pointer-events-none px-4"
      >
        <div className="text-black tracking-tight flex flex-wrap justify-center gap-2 text-lg sm:text-3xl md:text-4xl font-medium text-center">
          <span ref={setLoaderWordRef}>Shaping</span>
          <span ref={setLoaderWordRef}>Tomorrow&apos;s</span>
          <span ref={setLoaderWordRef}>Web,</span>
          <span ref={setLoaderWordRef}>Today.™</span>
        </div>
      </div>

      {/* HERO */}
      <div
        ref={heroRef}
        className="w-full sm:h-[700px] bg-black flex flex-col h-[85vh] items-center text-white overflow-hidden pt-20 relative"
        data-theme="dark"
      >
        <div className="w-full flex flex-col gap-32 justify-between h-full">
          <div className="logo-wrapper w-full sm:px-10 md:mt-10 overflow-hidden px-1">
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
                d="M0.05 196.5L113.8 56.5H0.05V4H183.45V56.5L69.7 196.5H183.45V249H0.05V196.5Z"
                fill="white"
              />
              <path
                ref={setLetterRef}
                d="M369.059 99.55V153.45H260.909V194.75H389.359V249H250.409C221.009 249 201.409 229.4 201.409 200V161.85C201.409 141.9 215.059 127.9 235.359 128.25H237.459V124.75H235.359C215.059 124.75 201.409 111.1 201.409 91.15V53C201.409 23.6 221.009 4 250.409 4H389.359V58.25H260.909V99.55H369.059Z"
                fill="white"
              />
              <path
                ref={setLetterRef}
                d="M468.38 103.4V249H408.88V102.7C408.88 35.85 451.23 0.5 516.33 0.5C579.68 0.5 622.03 35.85 622.03 102.7V249H562.53V103.4C562.53 71.9 540.13 56.5 515.28 56.5C490.08 56.5 468.38 71.9 468.38 103.4Z"
                fill="white"
              />
              <path
                ref={setLetterRef}
                d="M641.986 249V4H701.486V193H705.686C751.536 193 781.636 153.8 781.636 94.3V4H841.136V91.5C841.136 193.7 784.786 249 680.136 249H641.986Z"
                fill="white"
              />
              <path
                ref={setLetterRef}
                d="M861.427 126.5C861.427 50.9 912.527 0.5 988.827 0.5C1065.48 0.5 1116.23 50.9 1116.23 126.5C1116.23 202.1 1065.48 252.5 988.827 252.5C912.527 252.5 861.427 202.1 861.427 126.5ZM920.927 126.5C920.927 168.5 948.227 196.5 988.827 196.5C1029.43 196.5 1056.73 168.5 1056.73 126.5C1056.73 84.5 1029.43 56.5 988.827 56.5C948.227 56.5 920.927 84.5 920.927 126.5Z"
                fill="white"
              />
              <path
                ref={setLetterRef}
                d="M1136.22 249V4H1195.72V147.15L1280.07 4H1346.57L1278.32 114.6L1363.72 249H1295.47L1244.37 169.9L1195.72 249H1136.22Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="hero-title sm:px-10 flex sm:gap-40 text-[14px] font-medium text-white sm:text-base gap-5 px-1 absolute sm:relative bottom-10">
            <div>
              <p>Building standout</p>
              <p>websites for bold brands.</p>
            </div>
            <div>
              <p>Turning digital visions</p>
              <p>into industry-leading experiences.</p>
            </div>
          </div>
        </div>

        <div className="controls sm:absolute bottom-20 right-10 hidden sm:block">
          <div
            ref={arrowRef}
            className="icon-wrapper p-4 cursor-pointer hover:opacity-70 transition-opacity"
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 12 12">
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
