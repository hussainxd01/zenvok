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
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [lastTranslateX, setLastTranslateX] = useState(0);

  const speed = 0.3; // continuous scroll speed
  const duplicatedData = [...portfolioData, ...portfolioData];

  useEffect(() => {
    let rafId;
    let position = translateX;

    const animate = () => {
      if (!isPaused && !isDragging) {
        position -= speed;
        if (Math.abs(position) >= containerRef.current.scrollWidth / 2) {
          position = 0;
        }
        containerRef.current.style.transform = `translateX(${position}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [isPaused, isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.clientX);
    setLastTranslateX(translateX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const delta = e.clientX - startX;
    const newTranslate = lastTranslateX + delta;
    containerRef.current.style.transform = `translateX(${newTranslate}px)`;
    setTranslateX(newTranslate);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.touches[0].clientX);
    setLastTranslateX(translateX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const delta = e.touches[0].clientX - startX;
    const newTranslate = lastTranslateX + delta;
    containerRef.current.style.transform = `translateX(${newTranslate}px)`;
    setTranslateX(newTranslate);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

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
        className="relative overflow-hidden pl-6"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ userSelect: "none", cursor: isDragging ? "grabbing" : "grab" }}
      >
        <div ref={containerRef} className="flex gap-6 will-change-transform">
          {duplicatedData.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-64 group cursor-pointer"
            >
              <div
                className="relative bg-black rounded-3xl p-2 shadow-2xl transition-transform duration-300"
                style={{ width: "256px", height: "520px" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center px-4">
                      <p className="text-xs font-medium mb-1">
                        {item.category}
                      </p>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-white rounded-full opacity-60"></div>
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
