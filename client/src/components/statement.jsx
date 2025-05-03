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

  // Function to create masked text animation
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
    textWrapper.className = "text-wrapper";
    textWrapper.style.display = "flex";
    textWrapper.style.flexWrap = "wrap";
    textWrapper.style.alignItems = "flex-start";
    textWrapper.style.justifyContent = "flex-start";

    if (indent) {
      const indentDiv = document.createElement("div");
      indentDiv.style.width = "3em";
      indentDiv.style.display = "inline-block";
      indentDiv.style.height = "1px";
      textWrapper.appendChild(indentDiv);
    }

    words.forEach((word, index) => {
      const container = document.createElement("div");
      container.style.display = "inline-block";
      container.style.overflow = "hidden";
      container.style.verticalAlign = "top";
      container.style.position = "relative";

      const wordSpan = document.createElement("span");
      wordSpan.innerHTML = word;
      wordSpan.style.display = "inline-block";
      wordSpan.style.transform = "translateY(100%)";

      container.appendChild(wordSpan);
      containersRef.current.push({ container, wordSpan });

      textWrapper.appendChild(container);

      if (index < words.length - 1) {
        const space = document.createElement("span");
        space.innerHTML = "\u00A0";
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
      // Main statement animation
      createMaskedTextAnimation(
        statementRef.current,
        statementRef.current.textContent,
        textContainersRef,
        true
      );

      // Column one animation
      createMaskedTextAnimation(
        columnOneRef.current,
        columnOneRef.current.textContent,
        columnOneContainersRef,
        false
      );

      // Column two paragraphs
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

      // Animate statement headline
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

      // Animate the HR
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

      // Timeline for column one → then column two
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: statementSectionRef.current,
          start: "top 90%",
          end: "bottom 20%",
        },
      });

      // Column one animation
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

      // Column two animation (starts after column one)
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
    <div
      ref={statementSectionRef}
      className="bg-black text-white py-16 px-4 md:px-8 lg:px-16 statement-section w-full"
    >
      <div className="max-w-7xl mx-auto">
        <h1
          ref={statementRef}
          className="text-4xl text-white md:text-5xl lg:text-6xl font-extralight leading-12 tracking-tighter mb-12"
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

      <div className="max-w-7xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="column">
          <h3 ref={columnOneRef} className="text-2xl font-light mb-6">
            Design that converts.
          </h3>
        </div>
        <div className="column flex flex-col gap-5 w-full md:w-4/5 lg:w-[60%] tracking-tight">
          <p ref={addParaRef} className="text-lg font-light">
            We are the brand catalyst.
          </p>
          <p ref={addParaRef} className="text-lg font-light">
            Since day one, Zenvok has helped businesses launch, scale, and stay
            sharp — through strategy, design, and clean engineering.
          </p>
          <p ref={addParaRef} className="text-lg font-light">
            In 2025, we introduced our selective model — partnering with a few
            bold teams at a time to go deep, not wide.
          </p>
          <p ref={addParaRef} className="text-lg font-light">
            No noise. Just focus, precision, and digital built to perform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statement;
