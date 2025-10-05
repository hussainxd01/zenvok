"use client";
import { useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Statement = () => {
  const statementRef = useRef(null);
  const statementSectionRef = useRef(null);
  const hrRef = useRef(null);
  const textContainersRef = useRef([]);
  const columnOneRef = useRef(null);
  const columnTwoParaRefs = useRef([]);
  const columnOneContainersRef = useRef([]);
  const columnTwoContainersRef = useRef([]);

  // ✅ Conditionally apply indent only for md+ screens
  const shouldIndent = () => {
    if (typeof window === "undefined") return false;
    return window.innerWidth >= 768; // Tailwind's md breakpoint
  };

  const createMaskedTextAnimation = (
    element,
    text,
    containersRef,
    indent = false
  ) => {
    if (!element) return;

    const words = text.split(" ");
    element.innerHTML = "";

    const textWrapper = document.createElement("div");
    textWrapper.style.display = "inline";
    textWrapper.style.lineHeight = "inherit";

    // ✅ Only indent on larger screens
    if (indent && shouldIndent()) {
      const indentSpan = document.createElement("span");
      indentSpan.style.display = "inline-block";
      indentSpan.style.width = "3em";
      indentSpan.innerHTML = "&nbsp;";
      textWrapper.appendChild(indentSpan);
    }

    words.forEach((word, index) => {
      const container = document.createElement("span");
      container.style.display = "inline-block";
      container.style.overflow = "hidden";
      container.style.verticalAlign = "top";
      container.style.position = "relative";

      const wordSpan = document.createElement("span");
      wordSpan.innerHTML = word;
      wordSpan.style.display = "inline-block";
      wordSpan.style.transform = "translateY(100%)";
      wordSpan.style.willChange = "transform";

      container.appendChild(wordSpan);
      containersRef.current.push({ container, wordSpan });

      textWrapper.appendChild(container);

      if (index < words.length - 1) {
        const space = document.createElement("span");
        space.innerHTML = "&nbsp;";
        space.style.display = "inline";
        textWrapper.appendChild(space);
      }
    });

    element.appendChild(textWrapper);
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    textContainersRef.current = [];
    columnOneContainersRef.current = [];
    columnTwoContainersRef.current = [];

    const ctx = gsap.context(() => {
      createMaskedTextAnimation(
        statementRef.current,
        statementRef.current.textContent,
        textContainersRef,
        true // keep indent logic dynamic
      );

      createMaskedTextAnimation(
        columnOneRef.current,
        columnOneRef.current.textContent,
        columnOneContainersRef,
        false
      );

      const columnTwoWordSpans = [];

      columnTwoParaRefs.current.forEach((paraRef) => {
        if (paraRef) {
          const paraContainers = [];
          const tempRef = { current: paraContainers };
          createMaskedTextAnimation(
            paraRef,
            paraRef.textContent,
            tempRef,
            false
          );
          paraContainers.forEach((item) =>
            columnTwoWordSpans.push(item.wordSpan)
          );
        }
      });

      textContainersRef.current.forEach(({ wordSpan }, index) => {
        gsap.to(wordSpan, {
          y: 0,
          duration: 0.3,
          ease: "power2.out",
          delay: index * 0.05,
          scrollTrigger: {
            trigger: statementSectionRef.current,
            start: "top 80%",
            end: "bottom 90%",
          },
        });
      });

      gsap.fromTo(
        hrRef.current,
        { width: "0%" },
        {
          width: "100%",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: hrRef.current,
            start: "top 90%",
            end: "bottom 90%",
          },
        }
      );

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: statementSectionRef.current,
          start: "top 90%",
          end: "bottom 20%",
        },
      });

      columnOneContainersRef.current.forEach(({ wordSpan }, index) => {
        timeline.to(
          wordSpan,
          {
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          index * 0.05
        );
      });

      timeline.to(
        columnTwoWordSpans,
        {
          y: 0,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.03,
        },
        "+=0.2"
      );
    }, statementSectionRef);

    return () => ctx.revert();
  }, []);

  const addParaRef = (el) => {
    if (el && !columnTwoParaRefs.current.includes(el)) {
      columnTwoParaRefs.current.push(el);
    }
  };

  useEffect(() => {
    columnTwoParaRefs.current = [];
  }, []);

  return (
    <section
      ref={statementSectionRef}
      className="bg-black text-white py-12 px-4 sm:py-16 sm:px-6 md:px-8 lg:px-16 w-full"
    >
      <div className="max-w-7xl mx-auto">
        <h1
          ref={statementRef}
          className="text-[1.5rem] sm:text-3xl md:text-5xl lg:text-6xl font-extralight leading-snug sm:leading-tight tracking-tight sm:tracking-tighter mb-8 sm:mb-12"
        >
          We blend the power of strategy, design, and performance marketing to
          transform founders' visions into remarkable brands. See{" "}
          <a href="#services" className="underline">
            our services
          </a>
          .
        </h1>
      </div>

      <div
        ref={hrRef}
        className="w-0 border-gray-50/30 border-b h-[0.5px] max-w-7xl mx-auto"
      ></div>

      {/* Two-column layout stays on mobile */}
      <div className="max-w-7xl mx-auto mt-10 sm:mt-12 grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-8 md:gap-16">
        <div className="column">
          <h3
            ref={columnOneRef}
            className="text-base sm:text-lg md:text-2xl font-light"
          >
            Design that converts.
          </h3>
        </div>

        <div className="column flex flex-col gap-4 sm:gap-6 tracking-tight col-span-1">
          <p
            ref={addParaRef}
            className="text-sm sm:text-base md:text-lg font-light leading-relaxed"
          >
            Since day one, Zenvok has helped businesses launch, scale, and stay
            sharp — through strategy, design, and clean engineering.
          </p>
          <p
            ref={addParaRef}
            className="text-sm sm:text-base md:text-lg font-light leading-relaxed"
          >
            In 2025, we introduced our selective model — partnering with a few
            bold teams at a time to go deep, not wide.
          </p>

          <a
            href="#"
            className="underline underline-offset-4 text-sm sm:text-base font-light mt-2"
          >
            Learn more ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default Statement;
