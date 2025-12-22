import MaskedText from "@/components/masked-text";
import MediaShowcase from "@/components/media-showcase";
import Navbar from "@/components/navbar";
import AwardSection from "@/components/award-section";

export default function About() {
  return (
    <div className="w-full overflow-x-hidden bg-white" data-theme="light">
      {/* Navbar */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-12">
        <Navbar adaptiveMode={true} />
      </div>

      {/* Hero Section */}
      <section className="w-full flex items-end justify-center pt-16 h-[90dvh] sm:pt-32 pb-10 sm:pb-20">
        <div className="max-w-[720px] sm:max-w-[1400px] mx-auto px-4  sm:px-12">
          <MaskedText
            text={
              "We are a team of experienced designers, strategists, and technologists passionate about crafting websites that turn bold ideas into industry-leading digital experiences."
            }
            className="font-light text-[20px] sm:text-6xl text-left leading-[1.3] sm:leading-[0.9] tracking-tight sm:tracking-tighter"
            indent={0}
            positioning="w-full"
          />
        </div>
      </section>

      {/* Divider */}
      <div className="w-full">
        <div className="max-w-[720px] sm:max-w-[1400px] mx-auto px-4 sm:px-12">
          <hr className="border-t border-gray-300 w-full" />
        </div>
      </div>

      {/* Principles Section */}
      <section className="w-full py-10 sm:py-24">
        <div className="max-w-[720px] sm:max-w-[1400px] mx-auto px-4 sm:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 sm:gap-16">
            {/* Left Column */}
            <div className="sm:col-span-3">
              <p className="text-[15px] sm:text-lg font-light text-gray-800 leading-snug">
                We operate on
                <br />
                simple principles
              </p>
            </div>

            {/* Right Column */}
            <div className="sm:col-span-9">
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-8 sm:gap-20">
                {/* Principles List */}
                <div className="space-y-2 sm:space-y-4">
                  <p className="text-[15px] sm:text-lg font-light">
                    <span className="text-gray-400">(01)</span>
                    &nbsp;&nbsp;Put people first
                  </p>
                  <p className="text-[15px] sm:text-lg font-light">
                    <span className="text-gray-400">(02)</span>
                    &nbsp;&nbsp;Pursue excellence
                  </p>
                  <p className="text-[15px] sm:text-lg font-light">
                    <span className="text-gray-400">(03)</span>
                    &nbsp;&nbsp;Embrace challenges
                  </p>
                </div>

                {/* Description */}
                <div>
                  <p className="text-[15px] sm:text-lg font-light text-gray-700 leading-snug">
                    These three principles have earned us numerous awards. While
                    we don’t chase accolades, they are proof of our dedication
                    to impact, quality, and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <AwardSection />

      {/* Media Showcase */}
      <section className="w-full">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-12">
          <MediaShowcase type="video" src="/showreel.mp4" title="Show Reel" />
        </div>
      </section>
    </div>
  );
}
