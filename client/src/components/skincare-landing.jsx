"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const SkincareLanding = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const circleImageRef = useRef(null);
  const speechBubbleRef = useRef(null);
  const ratingRef = useRef(null);
  const svgTextRef = useRef(null);
  const productImageRef = useRef(null);

  // Animation has been set up but not triggered yet
  const setupAnimations = () => {
    // Set initial states - everything hidden or in starting positions
    gsap.set(
      [
        headingRef.current,
        descriptionRef.current,
        buttonRef.current,
        circleImageRef.current,
        speechBubbleRef.current,
        ratingRef.current,
        productImageRef.current,
      ],
      { autoAlpha: 0, y: 20 }
    );

    gsap.set(svgTextRef.current, { autoAlpha: 0, y: 50 });
  };

  // Function to trigger animations
  const playAnimations = () => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(headingRef.current, { autoAlpha: 1, y: 0, duration: 0.8 })
      .to(
        descriptionRef.current,
        { autoAlpha: 1, y: 0, duration: 0.8 },
        "-=0.6"
      )
      .to(buttonRef.current, { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.6")
      .to(
        circleImageRef.current,
        { autoAlpha: 1, y: 0, duration: 0.8 },
        "-=0.7"
      )
      .to(
        speechBubbleRef.current,
        { autoAlpha: 1, y: 0, duration: 0.8 },
        "-=0.5"
      )
      .to(ratingRef.current, { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.7")
      .to(
        productImageRef.current,
        { autoAlpha: 1, y: 0, duration: 0.8 },
        "-=0.7"
      )
      .to(svgTextRef.current, { autoAlpha: 1, y: 0, duration: 1 }, "-=0.6");

    // Add subtle floating animation to the circle image
    gsap.to(circleImageRef.current, {
      y: -10,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1,
    });
  };

  useEffect(() => {
    // Set initial state
    setupAnimations();

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "bottom center",
          scrub: true,
        },
        defaults: { ease: "power3.out" },
      });

      tl.to(headingRef.current, { autoAlpha: 1, y: 0, duration: 0.8 })
        .to(
          descriptionRef.current,
          { autoAlpha: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .to(buttonRef.current, { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.6")
        .to(
          circleImageRef.current,
          { autoAlpha: 1, y: 0, duration: 0.8 },
          "-=0.7"
        )
        .to(
          speechBubbleRef.current,
          { autoAlpha: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .to(ratingRef.current, { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.7")
        .to(
          productImageRef.current,
          { autoAlpha: 1, y: 0, duration: 0.8 },
          "-=0.7"
        )
        .to(svgTextRef.current, { autoAlpha: 1, y: 0, duration: 1 }, "-=0.6");

      // Floating animation
      gsap.to(circleImageRef.current, {
        y: -10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });
    }, sectionRef);

    // Button hover effect
    const btn = buttonRef.current;
    const enter = () => gsap.to(btn, { scale: 1.05, duration: 0.3 });
    const leave = () => gsap.to(btn, { scale: 1, duration: 0.3 });

    btn?.addEventListener("mouseenter", enter);
    btn?.addEventListener("mouseleave", leave);

    return () => {
      ctx.revert();
      btn?.removeEventListener("mouseenter", enter);
      btn?.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-[#f0f5e1] flex items-center "
      data-theme="light"
    >
      {/* Main content container with proper spacing */}
      <div className="w-full h-full  relative">
        {/* Left side content */}
        <div
          ref={headingRef}
          className="absolute top-[5%] left-1/2 transform -translate-x-1/2 z-9"
        >
          <h1 className="text-[#2d3a2c] font-bold text-left">
            <div className="text-5xl lg:text-6xl xl:text-7xl">GLOW</div>
            <div className="text-5xl lg:text-6xl xl:text-7xl">NATURALLY</div>
            {/* <div className="text-5xl lg:text-6xl xl:text-7xl">ALLY</div> */}
          </h1>
        </div>

        <div
          ref={descriptionRef}
          className="absolute top-[40%] left-[8%] max-w-xs z-20"
        >
          <p className="text-[#2d3a2c] text-sm">
            Transform your skincare routine with premium products that restore,
            protect, and enhance your natural glow every day.
          </p>
        </div>

        <button
          ref={buttonRef}
          className="absolute top-[52%] left-[8%] bg-[#2d3a2c] text-white rounded-full py-2 px-8 
                    text-sm hover:shadow-lg transition-shadow z-20"
        >
          Shop Now
        </button>

        {/* Center image */}
        <div
          ref={circleImageRef}
          className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        >
          <div className="relative w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] bg-gray-100 rounded-full overflow-hidden">
            <Image
              src="/skincare.jpg"
              alt="Skincare product"
              width={400}
              height={400}
              className="object-cover rounded-full"
              priority
            />
          </div>

          {/* Speech bubble */}
          <div
            ref={speechBubbleRef}
            className="absolute bottom-12 left-0 bg-white p-3 rounded-lg shadow-md 
                      max-w-[200px] text-sm z-30"
          >
            <div className="flex items-start gap-2">
              <div className="bg-[#2d3a2c] rounded-full flex items-center justify-center text-white text-xs mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-[#2d3a2c]">
                While giving you an invigorating cleansing experience
              </p>
            </div>
          </div>
        </div>

        {/* Product image */}
        <div
          ref={productImageRef}
          className="absolute top-[5%] right-[8%] w-24 h-24 md:w-32 md:h-32 z-20"
        >
          <Image
            src="/skincare-product.jpg"
            alt="Product image"
            width={128}
            height={128}
            className="object-cover rounded-md"
          />
        </div>

        {/* Rating */}
        <div
          ref={ratingRef}
          className="absolute top-[40%] right-[8%] text-right z-20"
        >
          <div className="text-[#2d3a2c] font-bold text-2xl">4.8/5</div>
          <div className="text-[#2d3a2c] text-sm flex items-center justify-end gap-1">
            <span className="text-amber-500">★★★★★</span>
            <span>23,910</span>
          </div>
        </div>

        {/* Large SVG text at bottom */}
        <div
          ref={svgTextRef}
          className="absolute bottom-0 left-0 w-full z-0 pointer-events-none"
        >
          <svg viewBox="0 0 1200 200" className="w-full" aria-hidden="true">
            <text
              x="0"
              y="180"
              className="text-[235px] font-bold"
              fill="#2d3a2c"
              fillOpacity="0.9"
            >
              SKINCARE
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default SkincareLanding;
