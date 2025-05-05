"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WorkShowcase = () => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  // Sample projects data
  const projects = [
    {
      id: 1,
      name: "Rivian",
      image: "/fashion.jpg",
      url: "/work/rivian",
      number: "01",
    },
    {
      id: 2,
      name: "Du Chateau",
      image: "/fashion.jpg",
      url: "/work/du-chateau",
      number: "02",
    },
    {
      id: 3,
      name: "Oura Ring",
      image: "/fashion.jpg",
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

    // Calculate total scroll height based on number of projects
    const totalHeight = projects.length * 100; // 100vh per project

    // Set container height to allow scrolling
    gsap.set(containerRef.current, { height: `${totalHeight}vh` });

    // Initialize all sections at full height
    gsap.set(sectionsRef.current, {
      height: "100vh",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
    });

    // Create the scroll-driven animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `bottom bottom`,
        scrub: 1,
      },
    });

    // Add animations for each section
    sectionsRef.current.forEach((section, i) => {
      // For each section, we want to:
      // 1. Keep it at full height until its "turn" to shrink
      // 2. Shrink it to minimum height (20vh) as we scroll through the next section
      // 3. Keep it at minimum height for all subsequent scrolling

      const minHeight = 20; // Minimum height in vh
      const maxHeight = 100; // Maximum height in vh

      // Calculate when this section should start shrinking
      const startShrink = i * maxHeight; // Start shrinking when we reach the next section
      const endShrink = startShrink + maxHeight; // Finish shrinking after scrolling through one full section

      // Add to timeline
      tl.fromTo(
        section,
        { height: `${maxHeight}vh` },
        {
          height: `${minHeight}vh`,
          ease: "none",
        },
        startShrink / totalHeight // Normalize to 0-1 range for timeline positioning
      );

      // Set z-index to ensure proper stacking (earlier sections on top)
      gsap.set(section, { zIndex: projects.length - i });
    });

    // Clean up ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [projects.length]);

  return (
    <div ref={containerRef} className="relative w-full bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-8 pointer-events-none">
        <div className="pointer-events-auto">
          <Link
            href="/"
            className="text-white/80 hover:text-white transition-colors"
          >
            <span className="font-light">re/</span>jouice
          </Link>
        </div>
        <nav className="flex gap-8 pointer-events-auto">
          <Link
            href="/"
            className="text-white/60 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/work"
            className="text-white hover:text-white transition-colors"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="text-white/60 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-white/60 hover:text-white transition-colors"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-white/60 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div className="pointer-events-auto">
          <Link
            href="/contact"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            Let's talk{" "}
            <span className="inline-block transform rotate-45">↗</span>
          </Link>
        </div>
      </header>

      {/* Project Sections */}
      {projects.map((project, index) => (
        <section
          key={project.id}
          ref={(el) => (sectionsRef.current[index] = el)}
          className="w-full h-screen overflow-hidden text-white"
        >
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.name}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <Link href={project.url} className="group">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight border-b border-white/30 pb-2 transition-all duration-300 group-hover:border-white">
                {project.name}
              </h2>
            </Link>
          </div>

          <div className="absolute bottom-8 right-10 text-xl font-light">
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
        </section>
      ))}
    </div>
  );
};

export default WorkShowcase;
