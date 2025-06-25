"use client";
import { useLayoutEffect, useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const MaskedText = ({
  text,
  className = "",
  indent = true,
  positioning = "",
}) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const wordContainersRef = useRef([]);
  const wordRefs = useRef([]);
  const [isInView, setIsInView] = useState(false);
  const animationExecuted = useRef(false);

  const createMaskedWords = () => {
    const element = textRef.current;
    if (!element) return;

    const words = text.split(" ");
    element.innerHTML = ""; // Clear any content
    wordRefs.current = [];
    wordContainersRef.current = [];

    const wrapper = document.createElement("div");
    wrapper.style.display = "flex";
    wrapper.style.flexWrap = "wrap";
    wrapper.style.alignItems = "flex-start";
    wrapper.style.justifyContent = "flex-start";
    wrapper.style.lineHeight = "1"; // Tighter line height for better control

    if (indent) {
      const indentDiv = document.createElement("div");
      indentDiv.style.width = "3em";
      indentDiv.style.display = "inline-block";
      indentDiv.style.height = "1px";
      wrapper.appendChild(indentDiv);
    }

    words.forEach((word, index) => {
      // Create container with overflow hidden
      const container = document.createElement("div");
      container.style.display = "inline-block";
      container.style.overflow = "hidden";
      container.style.position = "relative";
      container.style.verticalAlign = "top";
      container.style.paddingBottom = "5px";
      container.style.paddingRight = "2px";
      container.style.marginRight = index < words.length - 1 ? "0.20em" : "0"; // Better word spacing

      // Create word span that will be animated
      const wordSpan = document.createElement("span");
      wordSpan.textContent = word;
      wordSpan.style.display = "inline-block";
      wordSpan.style.transform = "translateY(100%)";
      wordSpan.style.willChange = "transform";

      container.appendChild(wordSpan);
      wrapper.appendChild(container);

      // Store references for animation
      wordContainersRef.current.push(container);
      wordRefs.current.push(wordSpan);
    });

    element.appendChild(wrapper);

    // Force layout calculation to ensure proper sizing
    wordContainersRef.current.forEach((container, i) => {
      const wordHeight = wordRefs.current[i].offsetHeight;
      container.style.height = `${wordHeight + 2}px`;
    });
  };

  // Setup Intersection Observer
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      });
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  // Handle creating masked words
  useLayoutEffect(() => {
    createMaskedWords();

    gsap.set(wordRefs.current, {
      y: "100%",
      immediateRender: true,
    });
  }, [text]);

  // Handle animation when in view
  useEffect(() => {
    if (isInView && !animationExecuted.current && wordRefs.current.length > 0) {
      setTimeout(() => {
        gsap.to(wordRefs.current, {
          y: "0%",
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.05,
          onComplete: () => {
            animationExecuted.current = true;

            wordContainersRef.current.forEach((container, i) => {
              const wordHeight = wordRefs.current[i].offsetHeight;
              container.style.height = `${wordHeight + 6}px`;
            });
          },
        });
      }, 100);
    }
  }, [isInView]);

  return (
    <div ref={containerRef} className={positioning}>
      <h1
        ref={textRef}
        className={`text-black font-light tracking-tight ${className}`}
      >
        {text}
      </h1>
    </div>
  );
};

export default MaskedText;
