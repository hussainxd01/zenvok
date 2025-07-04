"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Navbar({
  initialColor = "white",
  adaptiveMode = true,
  blendMode = "difference",
}) {
  gsap.registerPlugin(ScrollTrigger);
  const pathname = usePathname();
  const navbarRef = useRef(null);
  const textRef = useRef(null);
  const svgNavRef = useRef(null);
  const logoContainerRef = useRef(null);
  const scrollTriggersRef = useRef([]);

  // Reset animations when route changes
  useEffect(() => {
    // Clean up all ScrollTriggers
    scrollTriggersRef.current.forEach((trigger) => {
      if (trigger && trigger.kill) trigger.kill();
    });
    scrollTriggersRef.current = [];

    // Reset GSAP states
    if (textRef.current) {
      gsap.set(textRef.current, { y: 0, opacity: 1 });
    }
    if (svgNavRef.current) {
      gsap.set(svgNavRef.current, { opacity: 0, y: "100%" });
    }

    // Force ScrollTrigger refresh
    ScrollTrigger.refresh();
  }, [pathname]);

  useEffect(() => {
    if (!navbarRef.current) return;

    // Ensure navbar is visible
    gsap.set(navbarRef.current, { opacity: 1, y: 0 });

    // Navbar slide-in animation on page load
    const navAnimation = gsap.from(navbarRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.5, // Reduced delay
    });

    // Set initial styles for logo container and SVG
    if (logoContainerRef.current && textRef.current) {
      gsap.set(logoContainerRef.current, {
        overflow: "hidden",
        height: textRef.current.offsetHeight || "auto",
        position: "relative",
      });
    }

    if (svgNavRef.current) {
      gsap.set(svgNavRef.current, {
        opacity: 0,
        y: "100%",
        position: "absolute",
        left: 0,
        top: 0,
        width: "50%",
        height: "100%",
      });
    }

    return () => {
      if (navAnimation) {
        navAnimation.kill();
      }
    };
  }, [pathname]); // Re-run when pathname changes

  useEffect(() => {
    if (!textRef.current || !svgNavRef.current) return;

    const ctx = gsap.context(() => {
      const trigger = ScrollTrigger.create({
        start: "top -100",
        end: "bottom top",
        onEnter: () => {
          gsap.to(textRef.current, {
            y: "-100%",
            opacity: 0.3,
            duration: 0.4,
            ease: "power2.inOut",
          });
          gsap.to(svgNavRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.inOut",
          });
        },
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

      scrollTriggersRef.current.push(trigger);
    });

    return () => {
      scrollTriggersRef.current.forEach((trigger) => {
        if (trigger && trigger.kill) trigger.kill();
      });
      scrollTriggersRef.current = [];
      ctx.revert();
    };
  }, [pathname]); // Re-run when pathname changes

  // Determine navbar styling based on mode
  const getNavbarStyle = () => {
    if (adaptiveMode) {
      return {
        color: "white",
        mixBlendMode: "difference",
        filter: "invert(0)",
      };
    } else {
      return {
        color: initialColor,
        mixBlendMode: blendMode,
      };
    }
  };

  const navbarStyle = getNavbarStyle();

  return (
    <section
      ref={navbarRef}
      className="h-[80px] w-full fixed top-0 bg-transparent z-50 sm:px-10 flex items-center justify-between"
      style={navbarStyle}
    >
      <div className="logo-wrapper flex items-start gap-2">
        <div ref={logoContainerRef} className="relative overflow-hidden">
          <p ref={textRef} className="text whitespace-nowrap font-medium">
            The Brand Catalyst
          </p>
          <svg
            ref={svgNavRef}
            className="absolute inset-0"
            viewBox="0 0 1364 253"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            style={{
              width: "50%",
              height: "100%",
            }}
          >
            <path
              d="M0.0500007 196.5L113.8 56.5H0.0500007V3.99998H183.45V56.5L69.7 196.5H183.45V249H0.0500007V196.5Z"
              fill="currentColor"
            />
            <path
              d="M369.059 99.55V153.45H260.909V194.75H389.359V249H250.409C221.009 249 201.409 229.4 201.409 200V161.85C201.409 141.9 215.059 127.9 235.359 128.25H237.459V124.75H235.359C215.059 124.75 201.409 111.1 201.409 91.15V53C201.409 23.6 221.009 3.99998 250.409 3.99998H389.359V58.25H260.909V99.55H369.059Z"
              fill="currentColor"
            />
            <path
              d="M468.38 103.4V249H408.88V102.7C408.88 35.85 451.23 0.499987 516.33 0.499987C579.68 0.499987 622.03 35.85 622.03 102.7V249H562.53V103.4C562.53 71.9 540.13 56.5 515.28 56.5C490.08 56.5 468.38 71.9 468.38 103.4Z"
              fill="currentColor"
            />
            <path
              d="M641.986 249V3.99998H701.486V193H705.686C751.536 193 781.636 153.8 781.636 94.3V3.99998H841.136V91.5C841.136 193.7 784.786 249 680.136 249H641.986Z"
              fill="currentColor"
            />
            <path
              d="M861.427 126.5C861.427 50.9 912.527 0.499987 988.827 0.499987C1065.48 0.499987 1116.23 50.9 1116.23 126.5C1116.23 202.1 1065.48 252.5 988.827 252.5C912.527 252.5 861.427 202.1 861.427 126.5ZM920.927 126.5C920.927 168.5 948.227 196.5 988.827 196.5C1029.43 196.5 1056.73 168.5 1056.73 126.5C1056.73 84.5 1029.43 56.5 988.827 56.5C948.227 56.5 920.927 84.5 920.927 126.5Z"
              fill="currentColor"
            />
            <path
              d="M1136.22 249V3.99998H1195.72V147.15L1280.07 3.99998H1346.57L1278.32 114.6L1363.72 249H1295.47L1244.37 169.9L1195.72 249H1136.22Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <div className="navigation-wrapper text-sm flex gap-4 ml-40">
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

      <div className="cursor-pointer px-4 py-2 rounded transition-all duration-200 hover:bg-current hover:text-white hover:mix-blend-difference">
        Let's Talk
      </div>
    </section>
  );
}
