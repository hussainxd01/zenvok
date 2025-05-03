"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initial animation for the loading screen
    gsap.fromTo(
      ".loading-content",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    // Set a timeout to trigger the exit animation
    const timer = setTimeout(() => {
      // Exit animation - slide down
      gsap.to(".loading-screen", {
        y: "100%",
        duration: 1.2,
        ease: "power3.inOut",
        onComplete: () => setIsLoading(false),
      });
    }, 2500); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-screen fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="loading-content text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Tomorrow&apos;s Brands, Today.™
        </h1>
      </div>
    </div>
  );
}
