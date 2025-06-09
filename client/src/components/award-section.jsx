export default function AwardSection() {
  return (
    <>
      <div className="w-full h-[400px] bg-white flex items-center justify-center">
        <h1 className="text-black text-[20vw]">Awards</h1>
      </div>

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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
