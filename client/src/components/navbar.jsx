"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Navbar({ heroRef = null }) {
  gsap.registerPlugin(ScrollTrigger);
  const navbarRef = useRef(null);
  const textRef = useRef(null);
  const svgNavRef = useRef(null);
  const logoContainerRef = useRef(null);

  useEffect(() => {
    // Navbar slide-in animation on page load
    gsap.from(navbarRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 1,
    });

    // Set initial styles for logo container and SVG
    gsap.set(logoContainerRef.current, {
      overflow: "hidden",
      height: textRef.current?.offsetHeight || "auto",
      position: "relative",
    });

    gsap.set(svgNavRef.current, {
      opacity: 0,
      y: "100%",
      position: "absolute",
      left: 0,
      top: 0,
    });
  }, []);

  useEffect(() => {
    if (!heroRef || !heroRef.current) return;

    // Text and SVG scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "bottom top",
        end: "bottom top-=100",
        scrub: 0.5,
        toggleActions: "play reverse play reverse",
      },
    });

    tl.to(textRef.current, {
      y: "-100%",
      opacity: 0.3,
      duration: 0.4,
      ease: "power2.inOut",
    }).to(
      svgNavRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.inOut",
      },
      "-=0.35"
    );

    // Reverse animation when scrolling back up
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "bottom top+=200",
      onLeaveBack: () => {
        gsap.to(textRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.inOut",
        });
        gsap.to(svgNavRef.current, {
          opacity: 0,
          y: "100%",
          duration: 0.4,
          ease: "power2.inOut",
        });
      },
    });
  }, [heroRef]);

  return (
    <section
      ref={navbarRef}
      className="h-[80px] w-full fixed top-0 bg-transparent z-50 sm:px-10 flex items-center justify-between"
      style={{
        color: "white",
        mixBlendMode: "difference",
      }}
    >
      <div className="logo-wrapper flex items-start gap-2">
        <div ref={logoContainerRef} className="overflow-hidden">
          <p ref={textRef} className="text whitespace-nowrap">
            The Brand Catalyst
          </p>
          <svg
            ref={svgNavRef}
            width="50%"
            height="auto"
            viewBox="0 0 1364 253"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M0.0500007 196.5L113.8 56.5H0.0500007V3.99998H183.45V56.5L69.7 196.5H183.45V249H0.0500007V196.5Z"
              fill="white"
            />
            <path
              d="M369.059 99.55V153.45H260.909V194.75H389.359V249H250.409C221.009 249 201.409 229.4 201.409 200V161.85C201.409 141.9 215.059 127.9 235.359 128.25H237.459V124.75H235.359C215.059 124.75 201.409 111.1 201.409 91.15V53C201.409 23.6 221.009 3.99998 250.409 3.99998H389.359V58.25H260.909V99.55H369.059Z"
              fill="white"
            />
            <path
              d="M468.38 103.4V249H408.88V102.7C408.88 35.85 451.23 0.499987 516.33 0.499987C579.68 0.499987 622.03 35.85 622.03 102.7V249H562.53V103.4C562.53 71.9 540.13 56.5 515.28 56.5C490.08 56.5 468.38 71.9 468.38 103.4Z"
              fill="white"
            />
            <path
              d="M641.986 249V3.99998H701.486V193H705.686C751.536 193 781.636 153.8 781.636 94.3V3.99998H841.136V91.5C841.136 193.7 784.786 249 680.136 249H641.986Z"
              fill="white"
            />
            <path
              d="M861.427 126.5C861.427 50.9 912.527 0.499987 988.827 0.499987C1065.48 0.499987 1116.23 50.9 1116.23 126.5C1116.23 202.1 1065.48 252.5 988.827 252.5C912.527 252.5 861.427 202.1 861.427 126.5ZM920.927 126.5C920.927 168.5 948.227 196.5 988.827 196.5C1029.43 196.5 1056.73 168.5 1056.73 126.5C1056.73 84.5 1029.43 56.5 988.827 56.5C948.227 56.5 920.927 84.5 920.927 126.5Z"
              fill="white"
            />
            <path
              d="M1136.22 249V3.99998H1195.72V147.15L1280.07 3.99998H1346.57L1278.32 114.6L1363.72 249H1295.47L1244.37 169.9L1195.72 249H1136.22Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <div className="navigation-wrapper text-sm flex gap-2 ml-40">
        <Link href="/" className="hover:opacity-70 transition-opacity">
          Home
        </Link>
        <Link href="/about" className="hover:opacity-70 transition-opacity">
          About
        </Link>
        <Link href="/works" className="hover:opacity-70 transition-opacity">
          Works
        </Link>
        <Link href="/service" className="hover:opacity-70 transition-opacity">
          Service
        </Link>
        <Link href="/contact" className="hover:opacity-70 transition-opacity">
          Contact
        </Link>
      </div>

      <div
        className="cursor-pointer"
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "currentColor";
          e.target.style.mixBlendMode = "difference";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "transparent";
          e.target.style.mixBlendMode = "inherit";
        }}
      >
        Let's Talk
      </div>
    </section>
  );
}
