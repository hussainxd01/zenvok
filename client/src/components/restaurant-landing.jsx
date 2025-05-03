"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function RestLanding() {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const logoRef = useRef(null);
  const eventLabelRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // IntersectionObserver to trigger animations when the component comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Initial animations on load
            const tl = gsap.timeline();

            tl.fromTo(
              logoRef.current,
              { opacity: 0, y: -20 },
              { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
            );

            tl.fromTo(
              eventLabelRef.current,
              { opacity: 0, x: -20 },
              { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
              "-=0.5"
            );

            // Masked text animation for title
            tl.fromTo(
              titleRef.current.querySelectorAll(".line-mask"),
              { y: "100%" },
              {
                y: "0%",
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
              },
              "-=0.3"
            );

            tl.fromTo(
              descRef.current,
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
              "-=0.5"
            );

            // Scroll animations for background
            gsap.fromTo(
              containerRef.current,
              { backgroundPosition: "50% 0%" },
              {
                backgroundPosition: "50% 20%",
                ease: "none",
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: "top top",
                  end: "bottom top",
                  scrub: true,
                },
              }
            );

            // Stop observing once triggered
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the component is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Clean up observer on unmount
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/restaurant.jpg"
          alt="Alibi lounge atmosphere"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col h-full px-6 md:px-16 lg:px-24 justify-center">
        {/* Logo */}
        <div
          ref={logoRef}
          className="absolute top-8 right-8 md:top-12 md:right-16"
        >
          <h2 className="text-2xl md:text-3xl font-serif text-yellow-400">
            alibi
          </h2>
        </div>

        {/* Main content */}
        <div className="max-w-3xl">
          {/* Event label */}
          <div ref={eventLabelRef} className="mb-6">
            <span className="inline-block px-3 py-1 text-xs tracking-wider text-yellow-400 border border-yellow-400">
              EVENTS
            </span>
          </div>

          {/* Title with masked animation */}
          <div ref={titleRef} className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
              <div className="overflow-hidden">
                <div className="line-mask">Every Night</div>
              </div>
              <div className="overflow-hidden">
                <div className="line-mask">Sparkles with</div>
              </div>
              <div className="overflow-hidden">
                <div className="line-mask">Alibi</div>
              </div>
            </h1>
          </div>

          {/* Description */}
          <div ref={descRef}>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl">
              Alibi nights shine with excitement! Join us for vibrant events and
              live entertainment, making every evening sparkle at our lounge.
            </p>
          </div>

          {/* CTA Button */}
          <div
            className="mt-10 opacity-0 animate-fadeIn"
            style={{ animationDelay: "1.8s", animationFillMode: "forwards" }}
          >
            <Link
              href="/reservations"
              className="px-8 py-3 text-sm uppercase tracking-wider border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors duration-300"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
