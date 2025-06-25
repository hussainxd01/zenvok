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
        className="min-h-screen w-full bg-white z-40 relative flex items-center justify-center pt-32 pb-20"
        data-theme="light"
      >
        <div className="max-w-[1400px] mx-auto px-12 w-full">
          <MaskedText
            text={
              "We are a collective of seasoned creatives, strategists, growth marketers, and technologists, dedicated to transforming ambitious visions into high-performing brands."
            }
            className="font-light text-6xl text-left leading-[0.5] tracking-tighter"
            indent={5}
            positioning="w-full"
          />
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="w-full bg-white">
        <div className="max-w-[1400px] mx-auto px-12">
          <hr className="border-t border-gray-300 w-full" />
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white w-full text-black py-24">
        <div className="max-w-[1400px] mx-auto px-12">
          <div className="grid grid-cols-12 gap-16">
            {/* Left Column */}
            <div className="col-span-3">
              <p className="text-lg font-light text-gray-600 leading-relaxed">
                We operate on
                <br />
                simple principles
              </p>
            </div>

            {/* Right Column */}
            <div className="col-span-9">
              <div className="grid grid-cols-2 gap-20">
                {/* Principles List */}
                <div className="space-y-4">
                  <p className="text-lg font-light">
                    <span className="text-gray-400">(01)</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;Put people first
                  </p>
                  <p className="text-lg font-light">
                    <span className="text-gray-400">(02)</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;Pursue excellence
                  </p>
                  <p className="text-lg font-light">
                    <span className="text-gray-400">(03)</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;Embrace challenges
                  </p>
                </div>

                {/* Description */}
                <div className="pt-8">
                  <p className="text-lg font-light text-gray-600 leading-relaxed">
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
