"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MaskedText from "@/components/masked-text";

const Statement = () => {
  const sectionRef = useRef(null);
  const hrRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const hr = hrRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      hr,
      { scaleX: 0, transformOrigin: "left center" },
      { scaleX: 1, duration: 1.2, ease: "power3.inOut" },
      "+=0.3"
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-16 px-4 sm:py-20 sm:px-6 md:px-8 lg:px-16 w-full"
    >
      {/* Main heading */}
      <div className="max-w-7xl mx-auto">
        <MaskedText
          text={`We blend the power of strategy, design, and performance marketing to transform founders' visions into remarkable brands. See our services.`}
          className="text-[1.5rem] sm:text-3xl md:text-5xl lg:text-6xl font-extralight leading-snug sm:leading-tight tracking-tight sm:tracking-tighter mb-12 text-white"
          indent={true}
        />
      </div>

      {/* HR Line */}
      <hr
        ref={hrRef}
        className="border-t border-gray-50/30 mb-12 max-w-7xl mx-auto"
      />

      {/* Two-column layout (even on mobile) */}
      <div className="max-w-7xl mx-auto flex flex-wrap gap-y-6 gap-x-8 md:gap-x-16">
        {/* Left column */}
        <div className="flex-1 min-w-[150px] max-w-[350px]">
          <MaskedText
            text="Design that converts."
            className="text-base sm:text-lg md:text-2xl font-light text-white"
            indent={false}
          />
        </div>

        {/* Right column */}
        <div className="flex-1 min-w-[150px] max-w-[600px] flex flex-col gap-4 sm:gap-6 tracking-tight">
          <MaskedText
            text="Since day one, Zenvok has helped businesses launch, scale, and stay sharp — through strategy, design, and clean engineering."
            className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-white"
            indent={false}
          />
          <MaskedText
            text="In 2025, we introduced our selective model — partnering with a few bold teams at a time to go deep, not wide."
            className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-white"
            indent={false}
          />
          <a
            href="#"
            className="underline underline-offset-4 text-sm sm:text-base font-light mt-2 text-white"
          >
            Learn more ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default Statement;
