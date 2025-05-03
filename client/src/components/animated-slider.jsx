"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SkincareLanding from "./skincare-landing";
import ModestLanding from "./modest-landing";
import Ecomlanding from "./ecommerce-landin";
import RestLanding from "./restaurant-landing";
import MaskedText from "./masked-text";
gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    id: 1,
    bgColor: "bg-indigo-900",
    title: "Creative Portfolio",
    subtitle: "Web Developer & UI/UX Designer",
    description: "Creating digital experiences that connect and inspire",
  },
  {
    id: 2,
    bgColor: "bg-purple-900",
    title: "Featured Projects",
    subtitle: "Innovative Solutions",
    description: "Discover my latest work and creative process",
  },
  {
    id: 3,
    bgColor: "bg-blue-900",
    title: "Technical Skills",
    subtitle: "Expert Technologies",
    description: "Frontend, backend, and everything in between",
  },
  {
    id: 4,
    bgColor: "bg-pink-900",
    title: "Let's Connect",
    subtitle: "Work Together",
    description: "Ready to bring your vision to life",
  },
  {
    id: 5,
    bgColor: "bg-pink-900",
    title: "Let's Connect",
    subtitle: "Work Together",
    description: "Ready to bring your vision to life",
  },
];

const AnimatedSlider = () => {
  const containerRef = useRef(null);
  const slidesRef = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;
    const totalSlides = slides.length;

    // Set widths dynamically
    gsap.set(slidesRef.current, { width: "100vw", height: "100vh" });

    // Create sections for each slide
    const sections = slidesRef.current;

    // Set up the scroll trigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        anticipatePin: 1,
        scrub: 1, // Smoother scrub for butter-like transitions
        snap: {
          snapTo: 1 / (totalSlides - 1),
          duration: 0.5, // Slightly longer for smoother snapping
          ease: "power2.inOut", // Smoother easing
        },
        end: () => `+=${window.innerHeight * (totalSlides - 1)}`,
      },
    });

    // Animate horizontal scroll with improved easing
    tl.to(sections, {
      xPercent: -100 * (totalSlides - 1),
      ease: "none", // Keep this as none for the main movement
      duration: totalSlides - 1, // Duration based on number of slides
    });

    // Make the first slide immediately visible (no fade animation)
    const firstSlideContent = sections[0].querySelector(".slide-content");
    gsap.set(firstSlideContent, { opacity: 1, y: 0 });

    // Animate content inside each slide with better timing (starting from the second slide)
    sections.forEach((slide, index) => {
      // Skip the first slide - it's already set to be visible
      if (index === 0) return;

      const content = slide.querySelector(".slide-content");

      // Create a separate timeline for each slide's content
      gsap.fromTo(
        content,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: slide,
            containerAnimation: tl,
            start: "left center-=10%", // Adjust start position for better timing
            end: "right center-=40%", // End animation before the slide leaves
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Handle resize to maintain proper dimensions
    const handleResize = () => {
      ScrollTrigger.refresh(true);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen overflow-hidden"
    >
      <div className="flex w-max h-full">
        {slides.map((slide, index) => (
          <section
            key={slide.id}
            ref={(el) => (slidesRef.current[index] = el)}
            className="w-screen h-screen flex items-center justify-center"
          >
            <div
              className={`slide-content text-white w-full h-full ${
                index === 0 ? "opacity-100" : "opacity-0"
              }`}
            >
              {index === 0 && <SkincareLanding />}
              {index === 1 && <ModestLanding />}
              {index === 2 && <Ecomlanding />}
              {index === 3 && <RestLanding />}
              {index === 4 && (
                <div className="h-full w-full bg-white text-black flex items-end justify-end px-10">
                  <MaskedText text="Every detail earns its place. Landing pages that feel right — and work even better." />
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default AnimatedSlider;
