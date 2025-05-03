"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const RestaurantLanding = () => {
  const componentRef = useRef(null);
  const textRef = useRef(null);
  const circleRef = useRef(null);
  const imageRef = useRef(null);
  const navRef = useRef(null);
  const featureRefs = useRef([]);

  // Register ScrollTrigger plugin
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const component = componentRef.current;

    // Create a timeline for the animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: component,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate the navigation
    tl.fromTo(
      navRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    // Animate the main heading
    tl.fromTo(
      textRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    );

    // Animate the circle
    tl.fromTo(
      circleRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.6"
    );

    // Animate the image
    tl.fromTo(
      imageRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    );

    // Animate the feature points
    featureRefs.current.forEach((feature, index) => {
      tl.fromTo(
        feature,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        `-=${0.3 + index * 0.1}`
      );
    });

    return () => {
      // Clean up ScrollTrigger when component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Add feature point to refs
  const addToFeatureRefs = (el) => {
    if (el && !featureRefs.current.includes(el)) {
      featureRefs.current.push(el);
    }
  };

  return (
    <div
      ref={componentRef}
      className="w-full h-screen overflow-hidden bg-white  text-black"
    >
      {/* Navigation */}
      <nav
        ref={navRef}
        className="w-full h-14 bg-black text-white flex justify-between items-center px-6"
      >
        <div className="flex space-x-8">
          <button className="text-sm tracking-wider hover:text-gray-300 transition-colors">
            MENU
          </button>
          <button className="text-sm tracking-wider hover:text-gray-300 transition-colors">
            RESERVATION
          </button>
          <button className="text-sm tracking-wider hover:text-gray-300 transition-colors">
            ABOUT
          </button>
          <button className="text-sm tracking-wider hover:text-gray-300 transition-colors">
            CONTACT
          </button>
        </div>

        <div className="text-center">
          <h1 className="text-xl font-light">
            Fusion <span className="italic">Bistro</span>
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-sm">EN / NO</span>
          <span className="text-sm">(704) 555-0127</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-3.5rem)]">
        {/* Left Section */}
        <div className="w-1/2 bg-[#f3f5e6] relative overflow-hidden">
          <div
            ref={circleRef}
            className="absolute w-[120%] h-[120%] border border-black/20 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            {/* Feature Points */}
            <div
              ref={addToFeatureRefs}
              className="absolute top-[15%] left-[15%]"
            >
              <div className="text-xs text-black/70">[01]</div>
              <div className="mt-2 text-sm uppercase leading-tight max-w-[150px]">
                A thoughtful and unique concept
              </div>
            </div>

            <div
              ref={addToFeatureRefs}
              className="absolute top-[15%] right-[25%]"
            >
              <div className="text-xs text-black/70">[02]</div>
              <div className="mt-2 text-sm uppercase leading-tight max-w-[150px]">
                Gourmet cuisine from the chef
              </div>
            </div>

            <div
              ref={addToFeatureRefs}
              className="absolute bottom-[15%] left-[15%]"
            >
              <div className="text-xs text-black/70">[03]</div>
              <div className="mt-2 text-sm uppercase leading-tight max-w-[150px]">
                Incredible cocktails from our bartender
              </div>
            </div>

            <div
              ref={addToFeatureRefs}
              className="absolute bottom-[15%] right-[25%]"
            >
              <div className="text-xs text-black/70">[04]</div>
              <div className="mt-2 text-sm uppercase leading-tight max-w-[150px]">
                The freshest ingredients for dishes
              </div>
            </div>

            {/* Center Content */}
            <div
              ref={textRef}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-xs font-serif"
            >
              <h2 className="text-5xl font-bold mb-1">Unlock a new</h2>
              <p className="text-5xl italic font-light mb-6">experience</p>
              <button className="uppercase text-xs tracking-wider border-b border-black pb-1 hover:pb-2 transition-all">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div ref={imageRef} className="w-1/2 bg-[#1a3a32] overflow-hidden">
          <div className="h-full w-full relative">
            <Image
              src="/restaurant.jpg"
              fill
              alt="Elegant cocktails"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a32]/30 to-transparent mix-blend-multiply"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantLanding;
