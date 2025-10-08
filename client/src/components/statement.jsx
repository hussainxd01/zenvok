"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MaskedText from "@/components/masked-text";

gsap.registerPlugin(ScrollTrigger);

const Statement = () => {
  const hrRef = useRef(null);

  useEffect(() => {
    const hr = hrRef.current;
    if (!hr) return;

    // kill any previous triggers if re-rendered (Next.js dev mode)
    ScrollTrigger.getAll().forEach((t) => t.kill());

    // prepare HR line
    gsap.set(hr, { width: "0%", willChange: "width" });

    // animation
    gsap.to(hr, {
      width: "100%",
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: hr,
        start: "top 85%", // start slightly before it enters viewport
        toggleActions: "play none none none",
      },
    });

    // cleanup
    return () => ScrollTrigger.kill();
  }, []);

  return (
    <section className="bg-black text-white py-12 px-4 sm:py-16 sm:px-6 md:px-8 lg:px-16 w-full">
      {/* Main heading */}
      <div className="max-w-7xl mx-auto">
        <MaskedText
          text={`We blend the power of strategy, design, and performance marketing to transform founders' visions into remarkable brands. See our services.`}
          className="text-[1.5rem] sm:text-3xl md:text-5xl lg:text-6xl font-extralight leading-snug sm:leading-tight tracking-tight sm:tracking-tighter mb-8 sm:mb-12 text-white"
          indent={true}
        />
      </div>

      {/* Animated HR line */}
      <div
        ref={hrRef}
        className="w-0 border-gray-50/30 border-b h-[0.5px] max-w-7xl mx-auto"
      ></div>

      {/* Two-column section */}
      <div className="max-w-7xl mx-auto mt-10 sm:mt-12 grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-8 md:gap-16">
        {/* Left column */}
        <div className="column">
          <MaskedText
            text="Design that converts."
            className="text-base sm:text-lg md:text-2xl font-light text-white"
            indent={false}
          />
        </div>

        {/* Right column */}
        <div className="column flex flex-col gap-4 sm:gap-6 tracking-tight col-span-1">
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
