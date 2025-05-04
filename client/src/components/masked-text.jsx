"use client";
import { useLayoutEffect, useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const MaskedText = ({ text, className = "", indent = true }) => {
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
      container.style.height = "auto"; // Allow height to adjust based on content

      // Create word span that will be animated
      const wordSpan = document.createElement("span");
      wordSpan.textContent = word;
      wordSpan.style.display = "inline-block";
      wordSpan.style.transform = "translateY(100%)"; // Start below - will slide up
      wordSpan.style.willChange = "transform"; // Optimize for animation

      container.appendChild(wordSpan);
      wrapper.appendChild(container);

      // Store references for animation
      wordContainersRef.current.push(container);
      wordRefs.current.push(wordSpan);

      // Add space between words
      if (index < words.length - 1) {
        const space = document.createElement("span");
        space.innerHTML = "\u00A0";
        wrapper.appendChild(space);
      }
    });

    element.appendChild(wrapper);

    // Force layout calculation to ensure proper sizing
    wordContainersRef.current.forEach((container, i) => {
      const wordHeight = wordRefs.current[i].offsetHeight;
      container.style.height = `${wordHeight}px`;
    });
  };

  // Setup Intersection Observer
  useEffect(() => {
    const options = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.1, // Trigger when at least 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Once we've observed it coming into view, we can disconnect
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

    // Set initial position - explicitly position words outside their containers
    gsap.set(wordRefs.current, {
      y: "100%",
      immediateRender: true,
    });
  }, [text]);

  // Handle animation when in view
  useEffect(() => {
    if (isInView && !animationExecuted.current && wordRefs.current.length > 0) {
      // Add a small delay to ensure everything is properly set
      setTimeout(() => {
        gsap.to(wordRefs.current, {
          y: "0%",
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.05,
          onComplete: () => {
            animationExecuted.current = true;
          },
        });
      }, 100);
    }
  }, [isInView]);

  return (
    <div ref={containerRef}>
      <h1
        ref={textRef}
        className={` text-black font-extralight tracking-tight mb-12 ${className}`}
      >
        {text}
      </h1>
    </div>
  );
};

export default MaskedText;
