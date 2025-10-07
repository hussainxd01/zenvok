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
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollPosition = scrollContainer.scrollLeft;
    const scrollSpeed = 0.5;

    const scroll = () => {
      if (!isPaused && !isDragging && scrollContainer) {
        scrollPosition += scrollSpeed;

        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }

        scrollContainer.scrollLeft = scrollPosition;
      } else if (!isDragging) {
        scrollPosition = scrollContainer.scrollLeft;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused, isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.cursor = "grabbing";
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsPaused(false);
    scrollRef.current.style.cursor = "grab";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      scrollRef.current.style.cursor = "grab";
    }
    setIsPaused(false);
  };

  // ✅ TOUCH SUPPORT for mobile
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let touchStartX = 0;
    let touchScrollLeft = 0;

    const handleTouchStart = (e) => {
      setIsPaused(true);
      touchStartX = e.touches[0].pageX - scrollContainer.offsetLeft;
      touchScrollLeft = scrollContainer.scrollLeft;
    };

    const handleTouchMove = (e) => {
      const x = e.touches[0].pageX - scrollContainer.offsetLeft;
      const walk = (x - touchStartX) * 1.5; // slight resistance for smooth feel
      scrollContainer.scrollLeft = touchScrollLeft - walk;
    };

    const handleTouchEnd = () => {
      setIsPaused(false);
    };

    scrollContainer.addEventListener("touchstart", handleTouchStart);
    scrollContainer.addEventListener("touchmove", handleTouchMove);
    scrollContainer.addEventListener("touchend", handleTouchEnd);

    return () => {
      scrollContainer.removeEventListener("touchstart", handleTouchStart);
      scrollContainer.removeEventListener("touchmove", handleTouchMove);
      scrollContainer.removeEventListener("touchend", handleTouchEnd);
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
