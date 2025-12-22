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
    element.innerHTML = "";
    wordRefs.current = [];
    wordContainersRef.current = [];

    const wrapper = document.createElement("div");
    wrapper.style.display = "flex";
    wrapper.style.flexWrap = "wrap";
    wrapper.style.alignItems = "flex-start";
    wrapper.style.justifyContent = "flex-start";
    wrapper.style.lineHeight = "1";
    wrapper.classList.add("masked-wrapper");

    if (indent) {
      const indentDiv = document.createElement("div");
      indentDiv.style.width = "3em";
      indentDiv.style.display = "inline-block";
      indentDiv.style.height = "1px";
      wrapper.appendChild(indentDiv);
    }

    words.forEach((word, index) => {
      const container = document.createElement("div");
      container.style.display = "inline-block";
      container.style.overflow = "hidden";
      container.style.position = "relative";
      container.style.verticalAlign = "top";
      container.style.paddingBottom = "5px";
      container.style.paddingRight = "2px";
      container.style.marginRight = index < words.length - 1 ? "0.20em" : "0";

      const wordSpan = document.createElement("span");
      wordSpan.textContent = word;
      wordSpan.style.display = "inline-block";
      wordSpan.style.transform = "translateY(100%)";
      wordSpan.style.opacity = "0"; // 🔥 added - no flash
      wordSpan.style.willChange = "transform, opacity";

      container.appendChild(wordSpan);
      wrapper.appendChild(container);

      wordContainersRef.current.push(container);
      wordRefs.current.push(wordSpan);
    });

    element.appendChild(wrapper);

    wordContainersRef.current.forEach((container, i) => {
      const wordHeight = wordRefs.current[i].offsetHeight;
      container.style.height = `${wordHeight + 2}px`;
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    createMaskedWords();
  }, [text]);

  useEffect(() => {
    if (isInView && !animationExecuted.current && wordRefs.current.length > 0) {
      setTimeout(() => {
        gsap.to(wordRefs.current, {
          y: "0%",
          opacity: 1,
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
