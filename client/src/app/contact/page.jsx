"use client";
import ContactSection from "@/components/contact-section";
import Navbar from "@/components/navbar";
import MaskedText from "@/components/masked-text";
export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar adaptiveMode={true} />
      {/* Hero Section */}
      <div
        className="min-h-screen w-full bg-black z-40 relative flex items-center justify-center pt-32 pb-20"
        data-theme="light"
      >
        <div className="max-w-[1400px] mx-auto px-12 w-full">
          <MaskedText
            text={
              "One Partnering with global brands, founders, startups, and VCs to deliver brands that drive profitable growth and lasting impact."
            }
            className="font-light text-6xl text-left leading-[0.5] tracking-tighter text-white"
            indent={5}
            positioning="w-full"
          />
        </div>
      </div>
      <ContactSection />
    </main>
  );
}
