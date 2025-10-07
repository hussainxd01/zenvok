"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MaskedText from "./masked-text"; // Import the MaskedText component

const Approach = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const hr1Ref = useRef(null);
  const hr2Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const heading = headingRef.current;
    const hr1 = hr1Ref.current;
    const hr2 = hr2Ref.current;

    // Create a timeline for the animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Heading masked text animation is now handled by MaskedText component
    // So we only need to animate the horizontal lines

    // Animate first horizontal line
    tl.fromTo(
      hr1,
      {
        scaleX: 0,
        transformOrigin: "left center",
      },
      {
        scaleX: 1,
        duration: 1.2,
        ease: "power3.inOut",
      },
      "+=0.5" // Start after MaskedText animation likely completes
    );

    // Animate second horizontal line
    tl.fromTo(
      hr2,
      {
        scaleX: 0,
        transformOrigin: "left center",
      },
      {
        scaleX: 1,
        duration: 1.2,
        ease: "power3.inOut",
      },
      "+=0.5"
    );

    return () => {
      // Clean up ScrollTrigger when component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full mx-auto px-4 md:px-10 py-20 md:py-28 bg-white text-black"
    >
      {/* Heading with MaskedText */}
      <div ref={headingRef}>
        <MaskedText
          text="Our approach."
          className="text-5xl md:text-6xl lg:text-7xl font-normal mb-16 md:mb-20"
          indent={false}
        />
      </div>

      {/* First horizontal line */}
      <hr ref={hr1Ref} className="border-t border-gray-300 mb-12 md:mb-16" />

      {/* First row of content with MaskedText */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-12 md:mb-16">
        <div>
          <MaskedText
            text="A simple philosophy: quality over quantity."
            className="text-xl leading-relaxed font-extralight"
            indent={false}
          />
        </div>
        <div className="max-w-[380px]">
          <MaskedText
            text="We work with select clients to ensure focus, precision, and results. Every project is crafted to be strategic and transformative."
            className="text-lg md:text-xl font-normal"
            indent={false}
          />
        </div>
      </div>

      {/* Second horizontal line */}
      <hr ref={hr2Ref} className="border-t border-gray-300 mb-12 md:mb-16" />

      {/* Second row of content with MaskedText */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div>
          <MaskedText
            text="Performance & emotion. You need both."
            className="text-xl md:text-2xl font-normal leading-relaxed"
            indent={false}
          />
        </div>
        <div className="max-w-[380px]">
          <MaskedText
            text="We build websites that are fast, reliable, and designed for people—combining clean code with growth-focused design."
            className="text-lg md:text-xl font-normal leading-relaxed"
            indent={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Approach;
