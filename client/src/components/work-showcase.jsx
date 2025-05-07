"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MaskedText from "./masked-text";
import Navbar from "./navbar";

const WorkShowcase = () => {
  const containerRef = useRef(null);
  const slidesRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample projects data
  const projects = [
    {
      id: 1,
      name: "Rivian",
      image: "/van.jpg",
      url: "/work/rivian",
      number: "01",
    },
    {
      id: 2,
      name: "Du Chateau",
      image: "/furniture.jpg",
      url: "/work/du-chateau",
      number: "02",
    },
    {
      id: 3,
      name: "Oura Ring",
      image: "/ring.png",
      url: "/work/oura-ring",
      number: "03",
    },
    {
      id: 4,
      name: "Tesla",
      image: "/fashion.jpg",
      url: "/work/tesla",
      number: "04",
    },
  ];

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Set container height to allow for scrolling
    const totalHeight = projects.length * 100; // 100vh per project
    gsap.set(containerRef.current, { height: `${totalHeight}vh` });

    // Force browser to respect the stacking and prevent repaints
    document.body.style.overflowX = "hidden";
    document.body.style.background = "#000";

    // Instead of animating each slide separately, we'll use ScrollTrigger
    // to track the progress and update the current index
    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `bottom bottom`,
      scrub: 1.2,
      onUpdate: (self) => {
        // Calculate current index based on scroll progress
        const progress = self.progress;
        const totalSections = projects.length;
        const rawIndex = progress * totalSections;
        const newIndex = Math.min(Math.floor(rawIndex), totalSections - 1);

        if (newIndex !== currentIndex) {
          setCurrentIndex(newIndex);
        }

        // Get current and next slide
        const currentSlide = slidesRef.current[newIndex];
        const nextSlide =
          slidesRef.current[Math.min(newIndex + 1, totalSections - 1)];

        if (!currentSlide || !nextSlide || newIndex >= totalSections - 1)
          return;

        // Calculate progress within this section (0 to 1)
        const sectionProgress = rawIndex - newIndex;

        // Apply parallax effect to current slide
        const currentMediaWrapper =
          currentSlide.querySelector(".media-wrapper");
        gsap.set(currentMediaWrapper, {
          y: `${sectionProgress * 30}%`,
        });

        // Move current slide up
        gsap.set(currentSlide, {
          y: `${sectionProgress * -100}%`,
        });

        // Move next slide up from the bottom
        const nextMediaWrapper = nextSlide.querySelector(".media-wrapper");
        gsap.set(nextSlide, {
          y: `${100 - sectionProgress * 100}%`,
        });
        gsap.set(nextMediaWrapper, {
          y: `${-30 + sectionProgress * 30}%`,
        });
      },
    });

    return () => {
      // Clean up
      scrollTrigger.kill();
      document.body.style.overflowX = "";
      document.body.style.background = "";
    };
  }, [projects.length, currentIndex]);

  return (
    <>
      <Navbar />
      <div
        className="h-[80vh] w-full bg-white z-40 relative flex items-end justify-between px-10"
        data-theme="light"
      >
        <MaskedText
          text={
            "Working to shape the future of your industry? We create brands that bring that ambition to life."
          }
          className="text-7xl leading-16"
          indent="false"
        />
      </div>
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden bg-black"
        data-theme="dark"
      >
        {/* Custom full-viewport background div to ensure no gaps */}
        <div className="fixed inset-0 w-full h-full bg-black z-0"></div>

        {/* Project Slides */}
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (slidesRef.current[index] = el)}
            className="slide w-full h-screen fixed top-0 left-0"
            style={{
              zIndex: projects.length - index,
              visibility: index <= currentIndex + 1 ? "visible" : "hidden",
              transform: "translate3d(0,0,0)",
              willChange: "transform",
              backfaceVisibility: "hidden",
            }}
            data-theme="dark"
          >
            <Link
              href={project.url}
              className="block w-full h-full"
              aria-label={project.name}
            >
              <div
                className="media-wrapper w-full h-full overflow-hidden"
                style={{
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="relative w-full h-full bg-black">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    priority={true}
                    className="object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight border-b border-white/30 pb-2 transition-all duration-300 hover:border-white text-white">
                    {project.name}
                  </h2>
                </div>

                <div className="absolute bottom-8 right-10 text-xl font-light text-white">
                  {project.number}
                </div>

                {index === 0 && (
                  <button className="absolute bottom-8 left-10 z-50 flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                    <span className="w-6 h-6 flex items-center justify-center border border-white/30 rounded-full">
                      :
                    </span>
                    <span>List view</span>
                  </button>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkShowcase;
