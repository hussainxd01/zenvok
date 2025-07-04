"use client";

import Hero from "@/components/hero";
import MediaShowcase from "@/components/media-showcase";
import Statement from "../components/statement";
import Footer from "@/components/footer";
import Approach from "@/components/approach";
import Space from "@/components/space";
import Navbar from "@/components/navbar";
import InfiniteCarousel from "@/components/infinite-carousel";

export default function Home() {
  return (
    <>
      <Navbar adaptiveMode={true} />
      <Hero />
      <MediaShowcase enableScaleAnimation={false} />
      <Statement />
      {/* <Space /> */}
      <Approach />
      <InfiniteCarousel />
      <Footer />
    </>
  );
}
