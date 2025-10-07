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
  const heroRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isListView, setIsListView] = useState(false); // ✅ NEW

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
    if (isListView) return; // ✅ skip GSAP logic in list mode

    gsap.registerPlugin(ScrollTrigger);
    const totalHeight = projects.length * 100;
    gsap.set(containerRef.current, { height: `${totalHeight}vh` });

    document.body.style.overflowX = "hidden";
    document.body.style.background = "#000";

    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `bottom bottom`,
      scrub: 1.2,
      onUpdate: (self) => {
        const progress = self.progress;
        const totalSections = projects.length;
        const rawIndex = progress * totalSections;
        const newIndex = Math.min(Math.floor(rawIndex), totalSections - 1);
        if (newIndex !== currentIndex) setCurrentIndex(newIndex);

        const currentSlide = slidesRef.current[newIndex];
        const nextSlide =
          slidesRef.current[Math.min(newIndex + 1, totalSections - 1)];
        if (!currentSlide || !nextSlide || newIndex >= totalSections - 1)
          return;

        const sectionProgress = rawIndex - newIndex;
        const currentMediaWrapper =
          currentSlide.querySelector(".media-wrapper");
        gsap.set(currentMediaWrapper, { y: `${sectionProgress * 30}%` });
        gsap.set(currentSlide, { y: `${sectionProgress * -100}%` });

        const nextMediaWrapper = nextSlide.querySelector(".media-wrapper");
        gsap.set(nextSlide, { y: `${100 - sectionProgress * 100}%` });
        gsap.set(nextMediaWrapper, { y: `${-30 + sectionProgress * 30}%` });
      },
    });

    return () => {
      scrollTrigger.kill();
      document.body.style.overflowX = "";
      document.body.style.background = "";
    };
  }, [projects.length, currentIndex, isListView]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      heroRef.current,
      { y: "-100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <div
        ref={heroRef}
        className="sm:min-h-[80vh] h-[90dvh] w-full bg-white z-40 relative flex  md:flex-row items-end justify-between px-2 md:px-10 py-10"
        data-theme="light"
      >
        <div className="max-w-[720px] sm:max-w-[1400px] mx-auto px-4  sm:px-12">
          <MaskedText
            text="We are a collective of seasoned creatives, strategists, growth marketers, and technologists, dedicated to transforming ambitious visions into high-performing brands."
            className="font-light text-[20px] sm:text-6xl text-left leading-[1.3] sm:leading-[0.9] tracking-tight sm:tracking-tighter"
            indent={0}
            positioning="w-full"
          />

          {/* ✅ Toggle Button */}
          <button
            onClick={() => setIsListView((prev) => !prev)}
            className="mt-6 md:mt-0 md:absolute bottom-10 left-10 z-50 flex items-center gap-2 text-black/70 hover:text-black transition-colors text-sm md:text-base"
          >
            <span className="w-6 h-6 flex items-center justify-center border border-black/30 rounded-full">
              :
            </span>
            <span>{isListView ? "Showcase view" : "List view"}</span>
          </button>
        </div>
      </div>

      {/* MAIN SECTION */}
      {!isListView ? (
        // ✅ Original cinematic scroll view
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden bg-black"
          data-theme="dark"
        >
          <div className="fixed inset-0 w-full h-full bg-black z-0"></div>
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
                <div className="media-wrapper w-full h-full overflow-hidden">
                  <div className="relative w-full h-full bg-black">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      priority={index === 0}
                      className="object-cover"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light tracking-tight border-b border-white/30 pb-2 text-white">
                      {project.name}
                    </h2>
                  </div>

                  <div className="absolute bottom-8 right-8 text-lg sm:text-xl font-light text-white">
                    {project.number}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        // ✅ List view (minimal and clean)
        <div className="w-full bg-black  sm:py-16">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.url}
              className="block group w-full relative"
              aria-label={project.name}
            >
              <div className="relative w-full h-[20vh] sm:h-[40vh] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-between px-6 sm:px-10">
                  <h3 className="text-3xl sm:text-5xl font-light text-white">
                    {project.name}
                  </h3>
                  <span className="text-white/60 text-xl">
                    {project.number}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default WorkShowcase;
