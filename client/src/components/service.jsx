"use client";
import React from "react";
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
    <div className="w-full h-px bg-gray-300 mb-8">
      <div ref={hrRef} className="w-full h-full bg-gray-400"></div>
    </div>
  );
};

export default function Service() {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const leftCol = leftColumnRef.current;
    const rightCol = rightColumnRef.current;
    const container = containerRef.current;

    if (!leftCol || !rightCol || !container) return;

    // Create scroll-triggered animation for left column
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const progress = self.progress;
        const maxTranslate = rightCol.scrollHeight - window.innerHeight;
        const translateY = progress * maxTranslate * 0.3; // Adjust multiplier as needed

        gsap.set(leftCol, {
          y: translateY,
          ease: "none",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const capabilities = [
    {
      category: "(01) Strategy & Design",
      items: [
        "Technical Consultation",
        "Requirements Analysis",
        "User Experience (UX) Design",
        "User Interface (UI) Design",
        "Wireframing & Prototyping",
        "Information Architecture",
        "Responsive Design",
        "Design Systems",
        "Technology Stack Selection",
        "Project Planning & Scoping",
      ],
    },
    {
      category: "(02) Development",
      items: [
        "Website Development",
        "Blog & Content Platforms",
        "E-Commerce Development",
        "Web Application Development",
        "Front-End Development",
        "Back-End Development",
        "API Development & Integration",
        "Database Design",
        "CMS Implementation",
        "Payment Gateway Integration",
      ],
    },
    {
      category: "(03) Optimization & Support",
      items: [
        "Performance Optimization",
        "Search Engine Optimization (SEO)",
        "Security Audits & Hardening",
        "Analytics Implementation",
        "Ongoing Maintenance",
        "Bug Fixes & Updates",
        "Speed Enhancement",
        "Technical Support",
        "Monitoring & Uptime",
        "Feature Enhancements",
      ],
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-16">
        <div className="grid grid-cols-12 gap-4 sm:gap-16">
          {/* Left Column - Fixed Title */}
          <div className="col-span-4 sm:col-span-3">
            <div ref={leftColumnRef} className="sticky top-8 sm:top-16">
              <MaskedText
                text="Capabilities"
                className="text-base sm:text-2xl font-light text-black tracking-tight"
                delay={0.2}
              />
            </div>
          </div>

          {/* Right Column - Scrollable Content */}
          <div ref={rightColumnRef} className="col-span-8 sm:col-span-9 w-full">
            <div className="space-y-8 sm:space-y-16">
              {capabilities.map((section, sectionIndex) => (
                <React.Fragment key={section.category}>
                  <AnimatedHR delay={sectionIndex * 0.1 + 0.5} />
                  <div className="space-y-4 sm:space-y-8 flex flex-col sm:flex-row gap-4 sm:gap-40">
                    <div className="space-y-4 sm:space-y-6 sm:min-w-[200px]">
                      <MaskedText
                        text={section.category}
                        className="text-sm sm:text-lg font-light text-black tracking-tight"
                        delay={sectionIndex * 0.1 + 0.3}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-2 sm:gap-3">
                      {section.items.map((item, itemIndex) => (
                        <MaskedText
                          key={item}
                          text={item}
                          className="text-sm sm:text-lg font-light text-black tracking-tight leading-relaxed"
                          delay={sectionIndex * 0.1 + itemIndex * 0.02 + 0.7}
                        />
                      ))}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
