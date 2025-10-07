"use client";
import { useLayoutEffect, useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MaskedText = ({ text, className = "", delay = 0 }) => {
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
    wrapper.style.lineHeight = "1.2";

    words.forEach((word, index) => {
      const container = document.createElement("div");
      container.style.display = "inline-block";
      container.style.overflow = "hidden";
      container.style.position = "relative";
      container.style.verticalAlign = "top";
      container.style.paddingBottom = "2px";
      container.style.marginRight = index < words.length - 1 ? "0.25em" : "0";

      const wordSpan = document.createElement("span");
      wordSpan.textContent = word;
      wordSpan.style.display = "inline-block";
      wordSpan.style.transform = "translateY(100%)";
      wordSpan.style.willChange = "transform";

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

  useLayoutEffect(() => {
    createMaskedWords();
    gsap.set(wordRefs.current, {
      y: "100%",
      immediateRender: true,
    });
  }, [text]);

  useEffect(() => {
    if (isInView && !animationExecuted.current && wordRefs.current.length > 0) {
      setTimeout(() => {
        gsap.to(wordRefs.current, {
          y: "0%",
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.05,
          delay: delay,
          onComplete: () => {
            animationExecuted.current = true;
          },
        });
      }, 100);
    }
  }, [isInView, delay]);

  return (
    <div ref={containerRef}>
      <div ref={textRef} className={className}>
        {text}
      </div>
    </div>
  );
};

const AnimatedHR = ({ delay = 0 }) => {
  const hrRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

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

    if (hrRef.current) {
      observer.observe(hrRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (isInView && hrRef.current) {
      gsap.fromTo(
        hrRef.current,
        {
          scaleX: 0,
          transformOrigin: "left center",
        },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: delay,
        }
      );
    }
  }, [isInView, delay]);

  return (
    <div className="w-full h-px bg-gray-600 overflow-hidden">
      <div ref={hrRef} className="w-full h-full bg-gray-400"></div>
    </div>
  );
};

export default function ContactSection() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = now
        .toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
        .replace(" ", "");
      setTime(istTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white py-16 px-4 sm:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Mobile Layout - Two Column Grid */}
        <div className="block sm:hidden">
          {/* Get in touch Section */}
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <MaskedText
                text="Get in touch"
                className="text-base font-light mb-6"
                delay={0.1}
              />
            </div>
            <div className="space-y-6">
              <div>
                <MaskedText
                  text="New Business."
                  className="text-base font-light mb-1"
                  delay={0.2}
                />
                <MaskedText
                  text="hello@rejouice.com"
                  className="text-base font-light"
                  delay={0.3}
                />
              </div>
              <div>
                <MaskedText
                  text="Join the Team."
                  className="text-base font-light mb-1"
                  delay={0.4}
                />
                <MaskedText
                  text="jobs@rejouice.com"
                  className="text-base font-light"
                  delay={0.5}
                />
              </div>
            </div>
          </div>

          <AnimatedHR delay={0.6} />

          {/* San Diego Office */}
          <div className="grid grid-cols-2 gap-8 my-12">
            <div>
              <MaskedText
                text="San Diego"
                className="text-base font-light"
                delay={0.7}
              />
            </div>
            <div className="space-y-6">
              <div>
                <MaskedText
                  text="4375 30th Street"
                  className="text-base font-light"
                  delay={0.8}
                />
                <MaskedText
                  text="California, 92104"
                  className="text-base font-light"
                  delay={0.9}
                />
                <MaskedText
                  text="USA"
                  className="text-base font-light"
                  delay={1.0}
                />
              </div>
              <span className="text-base font-light">{time}</span>
            </div>
          </div>

          <AnimatedHR delay={1.1} />

          {/* Paris Office */}
          <div className="grid grid-cols-2 gap-8 mt-12">
            <div>
              <MaskedText
                text="Paris"
                className="text-base font-light"
                delay={1.2}
              />
            </div>
            <div className="space-y-6">
              <div>
                <MaskedText
                  text="26 rue du Chalet"
                  className="text-base font-light"
                  delay={1.3}
                />
                <MaskedText
                  text="75010 Paris,"
                  className="text-base font-light"
                  delay={1.4}
                />
                <MaskedText
                  text="France"
                  className="text-base font-light"
                  delay={1.5}
                />
              </div>
              <span className="text-base font-light">{time}</span>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Horizontal with AnimatedHR */}
        <div className="hidden sm:block">
          {/* First Row */}
          <div className="grid grid-cols-3 gap-8 mb-16">
            <div>
              <MaskedText
                text="Get in touch"
                className="text-2xl md:text-3xl tracking-tight"
                delay={0.1}
              />
            </div>
            <div>
              <MaskedText
                text="New Business."
                className="text-sm text-gray-400 mb-2"
                delay={0.2}
              />
              <MaskedText
                text="hello@rejouice.com"
                className="text-2xl md:text-3xl font-light tracking-tight"
                delay={0.3}
              />
            </div>
            <div>
              <MaskedText
                text="Join the Team."
                className="text-sm text-gray-400 mb-2"
                delay={0.4}
              />
              <MaskedText
                text="jobs@rejouice.com"
                className="text-2xl md:text-3xl font-light tracking-tight"
                delay={0.5}
              />
            </div>
          </div>

          {/* First HR */}
          <AnimatedHR delay={0.6} />

          {/* Second Row - San Diego */}
          <div className="grid grid-cols-3 gap-8 my-16">
            <div>
              <MaskedText
                text="San Diego"
                className="text-2xl md:text-3xl font-light tracking-tight"
                delay={0.7}
              />
            </div>
            <div>
              <MaskedText
                text="4375 30th Street"
                className="text-2xl md:text-3xl font-light tracking-tight mb-2"
                delay={0.8}
              />
              <MaskedText
                text="California, 92104"
                className="text-2xl md:text-3xl font-light tracking-tight mb-2"
                delay={0.9}
              />
              <MaskedText
                text="USA"
                className="text-2xl md:text-3xl font-light tracking-tight"
                delay={1.0}
              />
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-light tracking-tight">
                {time}
              </span>
            </div>
          </div>

          <AnimatedHR delay={1.1} />

          {/* Third Row - Paris */}
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div>
              <MaskedText
                text="Paris"
                className="text-2xl md:text-3xl font-light tracking-tight"
                delay={1.2}
              />
            </div>
            <div>
              <MaskedText
                text="26 rue du Chalet"
                className="text-2xl md:text-3xl font-light tracking-tight mb-2"
                delay={1.3}
              />
              <MaskedText
                text="75010 Paris,"
                className="text-2xl md:text-3xl font-light tracking-tight mb-2"
                delay={1.4}
              />
              <MaskedText
                text="France"
                className="text-2xl md:text-3xl font-light tracking-tight"
                delay={1.5}
              />
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-light tracking-tight">
                {time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
