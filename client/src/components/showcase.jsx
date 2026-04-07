import { useEffect, useRef } from "react";

const portfolioData = [
  {
    id: 1,
    title: "Clothing Store E-Commerce",
    category: "Web Development",
    image: "/ecom.png",
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
    image: "/food.png",
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
  const positionRef = useRef(0);
  const halfWidthRef = useRef(0);
  const isPausedRef = useRef(false);

  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartPosRef = useRef(0);
  const velocityRef = useRef(0);
  const lastDragXRef = useRef(0);
  const lastDragTimeRef = useRef(0);

  const SPEED_PX_PER_SEC = 80;

  const duplicatedData = [...portfolioData, ...portfolioData];

  const wrapPosition = () => {
    const half = halfWidthRef.current;
    if (!half) return;
    if (positionRef.current <= -half) positionRef.current += half;
    if (positionRef.current > 0) positionRef.current -= half;
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateSizes = () => {
      halfWidthRef.current = track.scrollWidth / 2 || 0;
    };

    const ro = new ResizeObserver(updateSizes);
    ro.observe(track);
    updateSizes();

    const tick = (time) => {
      const dt = Math.min((time - lastTimeRef.current) / 1000, 0.05);
      lastTimeRef.current = time;

      if (isDraggingRef.current) {
      } else if (!isPausedRef.current) {
        positionRef.current -= SPEED_PX_PER_SEC * dt;
      } else if (Math.abs(velocityRef.current) > 0.5) {
        positionRef.current += velocityRef.current * dt;
        velocityRef.current *= 0.92;
      }

      wrapPosition();
      track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    const startTimeout = setTimeout(() => {
      lastTimeRef.current = performance.now();
      rafRef.current = requestAnimationFrame(tick);
    }, 50);

    // --- Drag handlers ---
    const onMouseDown = (e) => {
      e.preventDefault(); // 🔥 FIX
      isDraggingRef.current = true;
      isPausedRef.current = true;
      dragStartXRef.current = e.clientX;
      dragStartPosRef.current = positionRef.current;
      lastDragXRef.current = e.clientX;
      lastDragTimeRef.current = performance.now();
      velocityRef.current = 0;
      track.style.cursor = "grabbing";
    };

    const onMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      e.preventDefault(); // 🔥 FIX

      const dx = e.clientX - dragStartXRef.current;
      positionRef.current = dragStartPosRef.current + dx;
      wrapPosition();

      const now = performance.now();
      const elapsed = now - lastDragTimeRef.current;
      if (elapsed > 0) {
        velocityRef.current =
          ((e.clientX - lastDragXRef.current) / elapsed) * 16;
      }
      lastDragXRef.current = e.clientX;
      lastDragTimeRef.current = now;
    };

    const onMouseUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      track.style.cursor = "grab";
      setTimeout(() => {
        isPausedRef.current = false;
        velocityRef.current = 0;
      }, 1200);
    };

    const onTouchStart = (e) => {
      isDraggingRef.current = true;
      isPausedRef.current = true;
      dragStartXRef.current = e.touches[0].clientX;
      dragStartPosRef.current = positionRef.current;
      lastDragXRef.current = e.touches[0].clientX;
      lastDragTimeRef.current = performance.now();
      velocityRef.current = 0;
    };

    const onTouchMove = (e) => {
      if (!isDraggingRef.current) return;

      const dx = e.touches[0].clientX - dragStartXRef.current;
      positionRef.current = dragStartPosRef.current + dx;
      wrapPosition();

      const now = performance.now();
      const elapsed = now - lastDragTimeRef.current;
      if (elapsed > 0) {
        velocityRef.current =
          ((e.touches[0].clientX - lastDragXRef.current) / elapsed) * 16;
      }
      lastDragXRef.current = e.touches[0].clientX;
      lastDragTimeRef.current = now;
    };

    const onTouchEnd = () => {
      isDraggingRef.current = false;
      setTimeout(() => {
        isPausedRef.current = false;
        velocityRef.current = 0;
      }, 1200);
    };

    const onMouseEnter = () => {
      if (!isDraggingRef.current) isPausedRef.current = true;
    };
    const onMouseLeave = () => {
      if (!isDraggingRef.current) {
        isPausedRef.current = false;
        velocityRef.current = 0;
      }
      if (isDraggingRef.current) onMouseUp();
    };

    track.style.cursor = "grab";

    track.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    track.addEventListener("touchstart", onTouchStart, { passive: true });
    track.addEventListener("touchmove", onTouchMove, { passive: true });
    track.addEventListener("touchend", onTouchEnd);
    track.addEventListener("mouseenter", onMouseEnter);
    track.addEventListener("mouseleave", onMouseLeave);

    return () => {
      clearTimeout(startTimeout);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      track.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      track.removeEventListener("touchstart", onTouchStart);
      track.removeEventListener("touchmove", onTouchMove);
      track.removeEventListener("touchend", onTouchEnd);
      track.removeEventListener("mouseenter", onMouseEnter);
      track.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div className="w-full py-20 bg-white overflow-hidden select-none">
      {" "}
      {/* 🔥 FIX */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Selected Works
        </h2>
        <p className="text-gray-600 text-lg">
          Crafting digital experiences that inspire and engage
        </p>
      </div>
      <div className="relative overflow-hidden pl-6">
        <div
          ref={trackRef}
          className="flex gap-6 will-change-transform select-none" // 🔥 FIX
          style={{ transform: "translate3d(0,0,0)" }}
        >
          {duplicatedData.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-64 group select-none" // 🔥 FIX
            >
              <div
                className="relative bg-black rounded-3xl p-2 shadow-2xl"
                style={{ width: "256px", height: "520px" }}
              >
                <div
                  className="absolute bg-black rounded-full z-20"
                  style={{
                    top: "12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "80px",
                    height: "20px",
                  }}
                />

                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white pt-8">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover pointer-events-none select-none" // 🔥 FIX
                    loading="lazy"
                    draggable={false}
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
