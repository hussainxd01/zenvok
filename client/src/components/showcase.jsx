import { useEffect, useRef } from "react";

// Mock API data - replace with your actual API
const portfolioData = [
  {
    id: 1,
    title: "Clothing Store E-Commerce",
    category: "Web Development",
    image: "/Ecommerce Clothing Store.png",
  },
  {
    id: 2,
    title: "Minimal Skincare Website",
    category: "UI/UX Design",
    image: "/Skincare Minimal Website.png",
  },
  {
    id: 3,
    title: "Food Delivery Web App",
    category: "Product Design",
    image: "/Web App - Food Delivery App.png",
  },
  {
    id: 4,
    title: "Music Streaming Mobile App",
    category: "App Interface",
    image: "/Music Streaming App.png",
  },
  {
    id: 5,
    title: "Abaya Store Web Experience",
    category: "E-Commerce Design",
    image: "/Abaya Store Web App.png",
  },
];

export default function WorkShowcaseAutoSlide() {
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(0);
  const positionRef = useRef(0); // current translateX (px)
  const halfWidthRef = useRef(0);

  // px per second. Increase for faster scroll, decrease for slower.
  const SPEED_PX_PER_SEC = 80;

  const duplicatedData = [...portfolioData, ...portfolioData];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // compute half width (content duplicated => half = original content width)
    const updateSizes = () => {
      // track.scrollWidth is the full duplicated width
      halfWidthRef.current = track.scrollWidth / 2 || 0;
    };

    // ResizeObserver will recalc when images load / layout changes
    const ro = new ResizeObserver(() => updateSizes());
    ro.observe(track);
    updateSizes();

    // RAF tick with time-delta for stable speed across framerates
    const start = (time) => {
      lastTimeRef.current = time;
      rafRef.current = requestAnimationFrame(tick);
    };

    const tick = (time) => {
      const dt = (time - lastTimeRef.current) / 1000; // seconds
      lastTimeRef.current = time;

      // advance position to the left
      positionRef.current -= SPEED_PX_PER_SEC * dt;

      const half = halfWidthRef.current;
      // seamless wrap: when we've moved by half (the original width), jump forward by half
      if (half > 0 && Math.abs(positionRef.current) >= half) {
        positionRef.current += half;
      }

      // apply transform (GPU-accelerated)
      track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;

      rafRef.current = requestAnimationFrame(tick);
    };

    // start loop after a tiny delay to allow layout settle (helps when images still loading)
    const startTimeout = setTimeout(() => {
      rafRef.current = requestAnimationFrame(start);
    }, 50);

    return () => {
      clearTimeout(startTimeout);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Selected Works
        </h2>
        <p className="text-gray-600 text-lg">
          Crafting digital experiences that inspire and engage
        </p>
      </div>

      <div className="relative overflow-hidden pl-6">
        {/* track: duplicated items side-by-side */}
        <div
          ref={trackRef}
          className="flex gap-6 will-change-transform transition-transform"
          style={{ transform: "translate3d(0,0,0)" }}
        >
          {duplicatedData.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-64 group cursor-pointer"
            >
              <div
                className="relative bg-black rounded-3xl p-2 shadow-2xl transition-transform duration-300"
                style={{ width: "256px", height: "520px" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10" />
                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center px-4">
                      <p className="text-xs font-medium mb-1">
                        {item.category}
                      </p>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-white rounded-full opacity-60" />
              </div>

              <div className="mt-4 px-2">
                <p className="text-xs text-gray-500 mb-1">{item.category}</p>
                <h3 className="text-base font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
