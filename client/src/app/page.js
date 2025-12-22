"use client";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import MediaShowcase from "@/components/media-showcase";
import Statement from "@/components/statement";
import WorkShowcase from "@/components/showcase";
import Approach from "@/components/approach";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar adaptiveMode={true} />
      <Hero />
      <MediaShowcase enableScaleAnimation={false} />
      <Statement />
      <WorkShowcase />
      <Approach />
      <Footer />
    </>
  );
}
