import { useEffect, useRef, useState } from "react";

// Mock API data - replace with your actual API
const portfolioData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Design",
    image: "/ecommerce.jpeg",
    color: "bg-blue-50",
  },
  {
    id: 2,
    title: "Fashion Blog",
    category: "UI/UX Design",
    image: "/blog.jpeg",
    color: "bg-pink-50",
  },
  {
    id: 3,
    title: "News Portal",
    category: "Editorial Design",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=800&fit=crop",
    color: "bg-gray-50",
  },
  {
    id: 4,
    title: "Travel App",
    category: "Mobile Design",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=800&fit=crop",
    color: "bg-green-50",
  },
  {
    id: 5,
    title: "Music Streaming",
    category: "App Design",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=800&fit=crop",
    color: "bg-purple-50",
  },
];

export default function WorkShowcase() {
  const scrollRef = useRef(null);

  // keep UI state (so you can still style depending on drag/pause)
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // internal refs to avoid stale closures inside RAF
  const isPausedRef = useRef(isPaused);
  const isDraggingRef = useRef(isDragging);
  const startXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);
  const scrollPositionRef = useRef(0);
  const rafIdRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  // keep refs in sync with state so UI updates still work
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);
  useEffect(() => {
    isDraggingRef.current = isDragging;
  }, [isDragging]);

  // Smooth auto scroll using RAF — improved infinite loop handling
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // initialize scrollPosition to current scrollLeft
    scrollPositionRef.current = scrollContainer.scrollLeft;

    const scrollSpeed = 0.5; // px per frame — tweak if you want faster/slower

    const step = () => {
      if (!scrollContainer) return;

      const halfWidth = scrollContainer.scrollWidth / 2 || 0;

      // when not paused and not dragging, advance continuously
      if (!isPausedRef.current && !isDraggingRef.current) {
        scrollPositionRef.current += scrollSpeed;

        // wrap-around smoothly by subtracting half width (since data is duplicated)
        if (halfWidth > 0 && scrollPositionRef.current >= halfWidth) {
          scrollPositionRef.current -= halfWidth;
        } else if (halfWidth > 0 && scrollPositionRef.current < 0) {
          scrollPositionRef.current += halfWidth;
        }

        scrollContainer.scrollLeft = scrollPositionRef.current;
      } else if (!isDraggingRef.current) {
        // if paused but not dragging, keep our internal pointer in sync
        scrollPositionRef.current = scrollContainer.scrollLeft;
      }

      rafIdRef.current = requestAnimationFrame(step);
    };

    rafIdRef.current = requestAnimationFrame(step);

    const handleResize = () => {
      // keep the internal pointer in sync after layout changes
      scrollPositionRef.current = scrollContainer.scrollLeft;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener("resize", handleResize);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
    // we intentionally do not depend on isPaused/isDragging here because we use refs
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Mouse handlers (desktop)
  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }

    setIsDragging(true);
    setIsPaused(true);
    isDraggingRef.current = true;
    isPausedRef.current = true;

    startXRef.current = e.pageX - scrollRef.current.offsetLeft;
    dragStartScrollLeftRef.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = "grabbing";
  };

  const handleMouseUp = () => {
    if (!scrollRef.current) return;

    setIsDragging(false);
    isDraggingRef.current = false;
    scrollRef.current.style.cursor = "grab";

    // resume auto-scroll after a short delay so user can do another touch without fight
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
      isPausedRef.current = false;
      resumeTimeoutRef.current = null;
    }, 900);
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 2; // same multiplier as before
    scrollRef.current.scrollLeft = dragStartScrollLeftRef.current - walk;
  };

  const handleMouseLeave = () => {
    if (!scrollRef.current) return;
    if (isDraggingRef.current) {
      setIsDragging(false);
      isDraggingRef.current = false;
      scrollRef.current.style.cursor = "grab";
    }

    // resume like mouseup
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
      isPausedRef.current = false;
      resumeTimeoutRef.current = null;
    }, 900);
  };

  // ✅ TOUCH SUPPORT for mobile — improved: treat touch as dragging and delay resume
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleTouchStart = (e) => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = null;
      }

      setIsDragging(true);
      setIsPaused(true);
      isDraggingRef.current = true;
      isPausedRef.current = true;

      const touchX = e.touches[0].pageX - scrollContainer.offsetLeft;
      startXRef.current = touchX;
      dragStartScrollLeftRef.current = scrollContainer.scrollLeft;
    };

    const handleTouchMove = (e) => {
      if (!isDraggingRef.current) return;
      const x = e.touches[0].pageX - scrollContainer.offsetLeft;
      const walk = (x - startXRef.current) * 1.5; // slight resistance for smooth feel
      scrollContainer.scrollLeft = dragStartScrollLeftRef.current - walk;
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      isDraggingRef.current = false;

      // small timeout before resuming auto-scroll so user's momentum/tap interactions don't fight the auto-scroll
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = setTimeout(() => {
        setIsPaused(false);
        isPausedRef.current = false;
        resumeTimeoutRef.current = null;
      }, 900);
    };

    scrollContainer.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    scrollContainer.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    scrollContainer.addEventListener("touchend", handleTouchEnd);
    scrollContainer.addEventListener("touchcancel", handleTouchEnd);

    return () => {
      scrollContainer.removeEventListener("touchstart", handleTouchStart);
      scrollContainer.removeEventListener("touchmove", handleTouchMove);
      scrollContainer.removeEventListener("touchend", handleTouchEnd);
      scrollContainer.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, []);

  const duplicatedData = [...portfolioData, ...portfolioData];

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

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden scrollbar-hide pl-6 cursor-grab active:cursor-grabbing touch-pan-x"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          userSelect: "none",
          WebkitOverflowScrolling: "touch", // ✅ smooth scroll for iOS
          scrollBehavior: "smooth", // ✅ smooth for modern browsers
        }}
      >
        {duplicatedData.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex-shrink-0 w-64 group cursor-pointer"
          >
            {/* Phone Frame */}
            <div
              className="relative bg-black rounded-3xl p-2 shadow-2xl transition-transform duration-300"
              style={{ width: "256px", height: "520px" }}
            >
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>

              {/* Screen */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center px-4">
                    <p className="text-xs font-medium mb-1">{item.category}</p>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>

              {/* Home Indicator */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-white rounded-full opacity-60"></div>
            </div>

            {/* Project Info */}
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
  );
}
