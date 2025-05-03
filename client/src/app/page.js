"use client";

import Hero from "@/components/hero";
import Showreel from "@/components/showreel";
import Statement from "@/components/statement";
import Navbar from "@/components/navbar";
import { useRef } from "react";
import AnimatedSlider from "@/components/animated-slider";
import Footer from "@/components/footer";

export default function Home() {
  const heroRef = useRef(null);
  return (
    <>
      {/* <Navbar heroRef={heroRef} /> */}
      <Hero heroRef={heroRef} />
      <Showreel />
      <Statement />
      <AnimatedSlider />
      <Footer />
    </>
  );
}
