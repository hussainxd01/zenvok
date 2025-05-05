"use client";

import Hero from "@/components/hero";
import Showreel from "@/components/showreel";
import Statement from "@/components/statement";
import Navbar from "@/components/navbar";
import { useRef } from "react";
import AnimatedSlider from "@/components/animated-slider";
import Footer from "@/components/footer";
import Approach from "@/components/approach";
import Space from "@/components/space";
// import InfiniteCarousel from "@/components/infinite-carousel";

export default function Home() {
  const heroRef = useRef(null);
  return (
    <>
      <Navbar heroRef={heroRef} />
      <Hero heroRef={heroRef} />
      <Showreel />
      <Statement />
      <AnimatedSlider />
      <Space />
      <Approach />
      {/* <InfiniteCarousel /> */}
      <Footer />
    </>
  );
}
