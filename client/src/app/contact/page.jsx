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
        className="min-h-screen w-full bg-black z-40 relative flex items-end justify-center pt-32 pb-20"
        data-theme="light"
      >
        <div className="max-w-[1400px] mx-auto sm:px-12 px-2 w-full">
          <MaskedText
            text={
              "Partnering with founders, startups, and brands to craft websites that scale, perform, and leave a lasting impact."
            }
            className="font-light text-[20px] sm:text-6xl text-left leading-[1.3] sm:leading-[0.9] tracking-tight sm:tracking-tighter text-white"
            indent={0}
            positioning="w-full"
          />
        </div>
      </div>
      <ContactSection />
    </main>
  );
}
