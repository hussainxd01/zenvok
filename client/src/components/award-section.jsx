export default function AwardSection() {
  return (
    <section className="w-full bg-white text-black overflow-x-hidden">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-24 pb-10 relative">
        <h1 className="text-[24vw] sm:text-[18vw] md:text-[12vw] lg:text-[10vw] leading-none font-[400] tracking-tight relative inline-block">
          Awards
          <span className="absolute top-[10%] right-[-2rem] md:right-[-1rem] text-[4vw] md:text-[1.5vw] font-normal text-gray-800">
            ( x70 )
          </span>
        </h1>
      </div>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <hr className="border-t border-gray-300 w-full" />
      </div>

      {/* Awards List */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-8">
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[3.5vw] sm:text-[2.2vw] md:text-[1rem] leading-snug font-light">
          {/* Left Column */}
          <div className="text-gray-900">
            <p>Awards for digital innovation</p>
          </div>

          {/* Right Column */}
          <div className="text-gray-900">
            <p>25 × Awwwards</p>
            <p>15 × FWA</p>
            <p>22 × CSS Design</p>
            <p>02 × Webby</p>
            <p>...and more.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
