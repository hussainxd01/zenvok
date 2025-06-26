import { useEffect, useRef, useState, useCallback } from "react";

export default function InfiniteCarousel() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);
  const animationRef = useRef(null);
  const lastTimeRef = useRef(0);

  // Sample slides - simplified without images
  const slides = [
    {
      id: 1,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      text: "Slide 1",
    },
    {
      id: 2,
      color: "bg-gradient-to-br from-red-500 to-red-600",
      text: "Slide 2",
    },
    {
      id: 3,
      color: "bg-gradient-to-br from-green-500 to-green-600",
      text: "Slide 3",
    },
    {
      id: 4,
      color: "bg-gradient-to-br from-yellow-500 to-yellow-600",
      text: "Slide 4",
    },
    {
      id: 5,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      text: "Slide 5",
    },
  ];

  // Create tripled slides for seamless infinite loop
  const tripledSlides = [...slides, ...slides, ...slides];

  // Smooth animation with requestAnimationFrame and deltaTime
  const animate = useCallback(
    (currentTime) => {
      if (!carouselRef.current || isDragging) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      const carousel = carouselRef.current;
      const scrollSpeed = 10; // pixels per second
      const scrollAmount = (scrollSpeed * deltaTime) / 1000;

      carousel.scrollLeft += scrollAmount;

      // Get slide width dynamically
      const slideWidth = carousel.offsetWidth / 3; // Assuming 3 slides visible
      const totalSlides = slides.length;
      const sectionWidth = slideWidth * totalSlides;

      // Seamless loop logic
      if (carousel.scrollLeft >= sectionWidth * 2) {
        carousel.scrollLeft = sectionWidth;
      } else if (carousel.scrollLeft <= 0) {
        carousel.scrollLeft = sectionWidth;
      }

      animationRef.current = requestAnimationFrame(animate);
    },
    [isDragging, slides.length]
  );

  // Initialize carousel position and start animation
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Set initial position to middle section
    const slideWidth = carousel.offsetWidth / 3;
    carousel.scrollLeft = slideWidth * slides.length;

    // Start animation
    lastTimeRef.current = performance.now();
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, slides.length]);

  // Optimized mouse handlers
  const handleStart = useCallback((clientX) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    setIsDragging(true);
    setStartX(clientX - carousel.offsetLeft);
    setScrollLeft(carousel.scrollLeft);

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  }, []);

  const handleEnd = useCallback(() => {
    setIsDragging(false);

    // Resume animation
    lastTimeRef.current = performance.now();
    animationRef.current = requestAnimationFrame(animate);
  }, [animate]);

  const handleMove = useCallback(
    (clientX) => {
      if (!isDragging) return;

      const carousel = carouselRef.current;
      if (!carousel) return;

      const x = clientX - carousel.offsetLeft;
      const walk = (x - startX) * 1.5;
      carousel.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  // Mouse events
  const handleMouseDown = (e) => handleStart(e.pageX);
  const handleMouseUp = () => handleEnd();
  const handleMouseMove = (e) => handleMove(e.pageX);

  // Touch events
  const handleTouchStart = (e) => {
    e.preventDefault();
    handleStart(e.touches[0].pageX);
  };
  const handleTouchEnd = (e) => {
    e.preventDefault();
    handleEnd();
  };
  const handleTouchMove = (e) => {
    e.preventDefault();
    handleMove(e.touches[0].pageX);
  };

  return (
    <div className="w-full bg-white py-10">
      <div className="w-full mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Smooth Infinite Carousel
        </h2>
        <div
          ref={carouselRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex gap-6" style={{ width: "max-content" }}>
            {tripledSlides.map((slide, index) => (
              <div
                key={`${slide.id}-${index}`}
                className={`flex-shrink-0 w-100 h-90 bg-gray-100
                  flex items-center justify-center text-white 
                   transition-shadow duration-300
                  transform  transition-transform`}
              >
                <div className="text-center p-6">
                  <div
                    className="w-16 h-16 bg-white bg-opacity-20 rounded-full 
                    flex items-center justify-center mb-4 mx-auto"
                  >
                    <span className="text-2xl font-bold">{slide.id}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{slide.text}</h3>
                  <p className="text-white text-opacity-90">
                    Beautiful smooth scrolling carousel
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-6 text-gray-600">
          Drag to scroll manually or let it auto-scroll smoothly
        </div>
      </div>
    </div>
  );
}
