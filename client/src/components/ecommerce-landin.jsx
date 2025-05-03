import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const EcomLanding = () => {
  // Refs for animated elements
  const titleRef = useRef(null);
  const navbarRef = useRef(null);
  const searchRef = useRef(null);
  const buttonRef = useRef(null);
  const iconRefs = useRef([]);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initial animations when page loads
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Navbar animation - fade in from top
    tl.fromTo(
      navbarRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    );

    // Search input slide in from right
    tl.fromTo(
      searchRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6 },
      "-=0.4"
    );

    // Title text mask reveal animation
    const titleElements = titleRef.current.querySelectorAll("h1");
    titleElements.forEach((element) => {
      tl.fromTo(
        element,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
        "-=0.4"
      );
    });

    // Button animation - scale and shadow
    tl.fromTo(
      buttonRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5 },
      "-=0.2"
    );

    // Icons fade in one by one
    iconRefs.current.forEach((icon, index) => {
      if (icon) {
        tl.fromTo(
          icon,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3 },
          "-=0.1"
        );
      }
    });

    // Create intersection observer for scrolling elements
    const sections = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elem = entry.target;

            // Different animations based on data attribute
            const animationType = elem.dataset.animation;

            if (animationType === "fade-in") {
              gsap.fromTo(
                elem,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8 }
              );
            } else if (animationType === "slide-in") {
              gsap.fromTo(
                elem,
                { x: -50, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8 }
              );
            } else if (animationType === "reveal") {
              // For masked text reveals
              const textContent = elem.querySelector(".masked-content");
              if (textContent) {
                gsap.fromTo(
                  textContent,
                  { y: 100 },
                  { y: 0, duration: 0.8, ease: "power3.out" }
                );
              }
            }

            // Unobserve after animation
            observer.unobserve(elem);
          }
        });
      },
      { threshold: 0.1 } // Trigger when at least 10% of the element is visible
    );

    // Observe all sections
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup
    return () => {
      observer.disconnect();
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      }
    };
  }, []);

  // Function to add icons to ref array
  const addToIconRefs = (el) => {
    if (el && !iconRefs.current.includes(el)) {
      iconRefs.current.push(el);
    }
  };

  return (
    <>
      <div className="min-h-screen w-full relative">
        <div className="w-full h-full">
          <Image
            src={"/fashion.jpg"}
            fill
            className="object-cover"
            alt="background"
          />
        </div>
        <div className="absolute inset-0">
          {/* Navbar */}
          <div
            ref={navbarRef}
            className="navbar py-10 px-10 flex items-center justify-between"
          >
            <div className="logo animate-on-scroll" data-animation="slide-in">
              LOGO
            </div>
            <div className="navigation flex gap-5 text-xs">
              <Link
                href={"/"}
                className="hover:font-bold transition-all duration-300"
              >
                HOME
              </Link>
              <Link
                href={"/women"}
                className="hover:font-bold transition-all duration-300"
              >
                HER
              </Link>
              <Link
                href={"/men"}
                className="hover:font-bold transition-all duration-300"
              >
                HIS
              </Link>
              <Link
                href={"/outlet"}
                className="hover:font-bold transition-all duration-300"
              >
                OUTLET
              </Link>
              <Link
                href={"/blog"}
                className="hover:font-bold transition-all duration-300"
              >
                BLOG
              </Link>
            </div>
            <div className="flex gap-5">
              <svg
                ref={(el) => addToIconRefs(el)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="size-6 hover:scale-110 transition-transform duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <svg
                ref={(el) => addToIconRefs(el)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="size-6 hover:scale-110 transition-transform duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              <svg
                ref={(el) => addToIconRefs(el)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="size-6 hover:scale-110 transition-transform duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </div>
          </div>

          {/* Search Container */}
          <div
            ref={searchRef}
            className="search-container px-10 flex items-center justify-end py-5"
          >
            <div className="relative">
              <div className="relative">
                <input
                  type="text"
                  className="border-b border-gray-50 outline-none py-2 bg-transparent"
                  placeholder="Search"
                />
              </div>
              <div className="absolute top-2 right-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Title Container with Masked Text Animation */}
          <div
            ref={titleRef}
            className="title-container w-full flex items-center justify-center mt-20"
          >
            <div className="flex flex-col items-center">
              {/* Masked text containers */}
              <div
                className="overflow-hidden h-32 animate-on-scroll"
                data-animation="reveal"
              >
                <h1 className="text-8xl font-bold tracking-tight masked-content">
                  STREET STYLE
                </h1>
              </div>
              <div
                className="overflow-hidden h-32 animate-on-scroll"
                data-animation="reveal"
              >
                <h1 className="text-8xl font-bold tracking-tight masked-content">
                  UNLEASHED
                </h1>
              </div>
            </div>
          </div>

          {/* Button Container */}
          <div className="social-container w-full flex items-center justify-center mt-20 relative">
            <div
              className="social-icons flex gap-5 absolute left-10 animate-on-scroll"
              data-animation="fade-in"
            >
              {/* Social icons can be added here */}
            </div>
            <div
              ref={buttonRef}
              className="button-container animate-on-scroll"
              data-animation="fade-in"
            >
              <button className="bg-white text-black font-semibold px-4 py-2 border-2 border-black shadow-[4px_4px_0_0_black] hover:shadow-[2px_2px_0_0_black] transition-all duration-200 hover:translate-x-1 hover:translate-y-1">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EcomLanding;
