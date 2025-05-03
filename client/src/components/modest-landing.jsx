"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ModestLanding() {
  // Refs for animation targets
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaButtonRef = useRef(null);
  const footerContentRef = useRef(null);
  const imageContainerRef = useRef(null);
  const navIconsRef = useRef(null);

  // Register ScrollTrigger plugin
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate only when the component is in view
            const tl = gsap.timeline();

            // Header animation
            tl.from(headerRef.current, {
              y: -50,
              opacity: 0,
              duration: 0.8,
              ease: "power3.out",
            });

            // Title animation with masked reveal effect
            const titleLines = titleRef.current.querySelectorAll("h1");
            tl.from(
              titleLines,
              {
                y: 100,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: "power3.out",
              },
              "-=0.4"
            );

            // Subtitle animation
            tl.from(
              subtitleRef.current,
              {
                y: 30,
                opacity: 0,
                duration: 0.6,
                ease: "power2.out",
              },
              "-=0.6"
            );

            // CTA button animation
            tl.from(
              ctaButtonRef.current,
              {
                scale: 0.8,
                opacity: 0,
                duration: 0.5,
                ease: "back.out(1.7)",
              },
              "-=0.3"
            );

            // Footer content animation
            tl.from(
              footerContentRef.current,
              {
                y: 30,
                opacity: 0,
                duration: 0.6,
                ease: "power2.out",
              },
              "-=0.4"
            );

            // Image container animation
            tl.from(
              imageContainerRef.current,
              {
                x: 100,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
              },
              "-=1"
            );

            // Right nav icons animation
            tl.from(
              navIconsRef.current,
              {
                y: -30,
                opacity: 0,
                duration: 0.5,
                ease: "power2.out",
              },
              "-=0.8"
            );

            observer.unobserve(entry.target); // Trigger only once
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the component is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  // Navigation arrow buttons hover effect

  return (
    <div ref={containerRef} className="h-full w-full flex">
      <div className="left-column h-full w-1/2 bg-white text-black flex flex-col justify-between">
        <div
          ref={headerRef}
          className="header w-full py-10 px-8 flex items-center justify-between"
        >
          <div className="flex gap-5 items-center">
            <div className="circle rounded-full size-10 bg-black"></div>
            <div className="flex flex-col">
              <p>Skincare</p>
              <p>Magic</p>
            </div>
          </div>

          {/* icons section */}
          <div className="icons flex gap-5">
            <div className="search-icon rounded-full p-2 border-gray-400 border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="search-icon rounded-full p-2 border-gray-400 border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm7 10.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="left-content w-full flex flex-col items-center justify-center gap-5">
          <div ref={subtitleRef} className="overflow-hidden">
            <div className="subtitle">Natural Magic</div>
          </div>
          <div ref={titleRef} className="flex items-center flex-col font-light">
            <div className="overflow-hidden">
              <h1 className="text-5xl">Unlock your inner</h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="text-5xl">beauty with our self</h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="text-5xl">care collection</h1>
            </div>
          </div>
        </div>

        <div className="btns py-10 px-8 flex items-end justify-between">
          <div
            ref={ctaButtonRef}
            className="w-56 p-1 h-10 bg-black rounded-full flex items-center justify-between cursor-pointer"
          >
            <span className="text-white ml-5">Start shopping</span>
            <div className="rounded-full bg-white size-8 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>

          <div
            ref={footerContentRef}
            className="footer-content flex gap-5 flex-col"
          >
            <div className="flex flex-col items-end">
              <p>/Say Goodbye to dryness and</p>
              <p>dulness with our fast-absorbing</p>
              <p>face oil.</p>
            </div>
            <div className="flex justify-end gap-2">
              <div className="nav-arrow bg-gray-300 rounded-full size-10 flex items-center justify-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </div>
              <div className="nav-arrow bg-black rounded-full size-10 flex items-center justify-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.2}
                  stroke="currentColor"
                  className="size-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right-column h-full w-1/2 bg-white text-black flex flex-col justify-between relative">
        <div
          ref={imageContainerRef}
          className="image-container relative w-full h-full"
        >
          <Image
            src="/ecom.jpg"
            alt="Skincare product"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0">
          <div
            ref={navIconsRef}
            className="right-header py-10 flex items-center justify-end px-10"
          >
            <div className="right-icons flex gap-5">
              <div
                className="search-icon rounded-full p-2 border-gray-50 border flex items-center
               justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5 text-gray-50"
                >
                  <path d="m9.653 16.915-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 0 1-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 0 1-.69.001l-.002-.001Z" />
                </svg>
              </div>
              <div className="search-icon rounded-full p-2 bg-white flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5 text-gray-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 11.27c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 0 1 5.273 3h9.454a2.75 2.75 0 0 1 2.651 2.019l1.523 5.52c.066.239.099.485.099.732V15a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3.73Zm3.068-5.852A1.25 1.25 0 0 1 5.273 4.5h9.454a1.25 1.25 0 0 1 1.205.918l1.523 5.52c.006.02.01.041.015.062H14a1 1 0 0 0-.86.49l-.606 1.02a1 1 0 0 1-.86.49H8.236a1 1 0 0 1-.894-.553l-.448-.894A1 1 0 0 0 6 11H2.53l.015-.062 1.523-5.52Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
