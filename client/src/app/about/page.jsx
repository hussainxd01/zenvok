import MaskedText from "@/components/masked-text";
import MediaShowcase from "@/components/media-showcase";
import Navbar from "@/components/navbar";
import AwardSection from "@/components/award-section";

export default function About() {
  return (
    <>
      <Navbar adaptiveMode={true} />

      {/* Hero Section */}
      <div
        className="min-h-screen w-full bg-white z-40 relative flex items-end justify-center pb-24 sm:pt-32 sm:pb-20"
        data-theme="light"
      >
        <div className="max-w-[1400px] mx-auto px-2 sm:px-12 w-full">
          <MaskedText
            text={
              "We are a collective of designers, developers, strategists, and storytellers, dedicated to building digital experiences that drive growth, scale seamlessly, and leave lasting impact."
            }
            className="font-light text-2xl sm:text-6xl text-left leading-[0.5] sm:leading-[0.5] tracking-tighter"
            indent={0}
            positioning="w-full"
          />
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="w-full bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          <hr className="border-t border-gray-300 w-full" />
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white w-full text-black py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-10 sm:gap-16">
            {/* Left Column */}
            <div className="sm:col-span-3">
              <p className="text-base sm:text-lg font-light text-gray-600 leading-relaxed">
                We operate on
                <br />
                simple principles
              </p>
            </div>

            {/* Right Column */}
            <div className="sm:col-span-9">
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-10 sm:gap-20">
                {/* Principles List */}
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-base sm:text-lg font-light">
                    <span className="text-gray-400">(01)</span>
                    &nbsp;&nbsp;Put people first
                  </p>
                  <p className="text-base sm:text-lg font-light">
                    <span className="text-gray-400">(02)</span>
                    &nbsp;&nbsp;Pursue excellence
                  </p>
                  <p className="text-base sm:text-lg font-light">
                    <span className="text-gray-400">(03)</span>
                    &nbsp;&nbsp;Embrace challenges
                  </p>
                </div>

                {/* Description */}
                <div className="pt-0 sm:pt-8">
                  <p className="text-base sm:text-lg font-light text-gray-600 leading-relaxed">
                    These three principles have earned us numerous awards. While
                    we don't chase accolades, they are proof of our dedication
                    to impact, quality, and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AwardSection />
      <MediaShowcase type="video" src="/reel.mp4" title="Show Reel" />
    </>
  );
}
