import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function InfiniteCarousel() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const animationRef = useRef(null);

  // Sample slides with images - replace with your own content
  const slides = [
    {
      id: 1,
      color: "bg-blue-500",
      text: "Slide 1",
      imageSrc: "/api/placeholder/800/500",
      alt: "Slide 1 Image",
    },
    {
      id: 2,
      color: "bg-red-500",
      text: "Slide 2",
      imageSrc: "/api/placeholder/800/500",
      alt: "Slide 2 Image",
    },
    {
      id: 3,
      color: "bg-green-500",
      text: "Slide 3",
      imageSrc: "/api/placeholder/800/500",
      alt: "Slide 3 Image",
    },
    {
      id: 4,
      color: "bg-yellow-500",
      text: "Slide 4",
      imageSrc: "/api/placeholder/800/500",
      alt: "Slide 4 Image",
    },
    {
      id: 5,
      color: "bg-purple-500",
      text: "Slide 5",
      imageSrc: "/api/placeholder/800/500",
      alt: "Slide 5 Image",
    },
  ];

  // Setup automatic infinite scrolling
  useEffect(() => {
    const carousel = carouselRef.current;
    const slider = sliderRef.current;

    // Create duplicated slides for infinite effect
    const duplicateSlides = () => {
      // First duplicate all slides for the beginning
      const originalSlides = Array.from(slider.children);
      originalSlides.forEach((slide) => {
        const clone = slide.cloneNode(true);
        slider.appendChild(clone);
      });

      // Then duplicate again for the end
      originalSlides.forEach((slide) => {
        const clone = slide.cloneNode(true);
        slider.prepend(clone);
      });

      // Position in the middle
      const slideWidth = slider.children[0].offsetWidth;
      carousel.scrollLeft = slideWidth * originalSlides.length;
    };

    duplicateSlides();

    // Setup automatic animation
    const autoScroll = () => {
      const carousel = carouselRef.current;
      if (!carousel || isDragging) return;

      const scrollAmount = 1; // Pixels to scroll per frame
      carousel.scrollLeft += scrollAmount;

      // Check if we need to loop back
      const totalWidth = slider.scrollWidth;
      const visibleWidth = carousel.offsetWidth;
      const maxScrollLeft = totalWidth - visibleWidth;

      if (carousel.scrollLeft >= maxScrollLeft - 5) {
        // Reset to one-third point (after first set of duplicates)
        carousel.scrollLeft = visibleWidth;
      } else if (carousel.scrollLeft <= 5) {
        // Reset to two-thirds point (before last set of duplicates)
        carousel.scrollLeft = maxScrollLeft - visibleWidth;
      }

      animationRef.current = requestAnimationFrame(autoScroll);
    };

    // Start the animation
    animationRef.current = requestAnimationFrame(autoScroll);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDragging]);

  // Mouse and touch event handlers for manual sliding
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);

    // Pause the automatic animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    // Resume the automatic animation
    if (!animationRef.current) {
      animationRef.current = requestAnimationFrame(() => {
        const autoScroll = () => {
          const carousel = carouselRef.current;
          if (!carousel || isDragging) return;

          carousel.scrollLeft += 1;

          // Check if we need to loop back
          const totalWidth = sliderRef.current.scrollWidth;
          const visibleWidth = carousel.offsetWidth;
          const maxScrollLeft = totalWidth - visibleWidth;

          if (carousel.scrollLeft >= maxScrollLeft - 5) {
            carousel.scrollLeft = visibleWidth;
          } else if (carousel.scrollLeft <= 5) {
            carousel.scrollLeft = maxScrollLeft - visibleWidth;
          }

          animationRef.current = requestAnimationFrame(autoScroll);
        };
        autoScroll();
      });
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust speed
    carouselRef.current.scrollLeft = scrollLeft - walk;

    e.preventDefault();
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);

    // Pause the automatic animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;

    e.preventDefault();
  };

  // Apply smooth animation when dragging ends
  useEffect(() => {
    if (!isDragging && carouselRef.current) {
      gsap.to(carouselRef.current, {
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [isDragging]);

  return (
    <div className="w-full bg-white py-10">
      <div
        ref={carouselRef}
        className="overflow-hidden cursor-grab relative"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        <div
          ref={sliderRef}
          className="flex transition-transform whitespace-nowrap gap-10"
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4 ${slide.color} h-96 flex flex-col items-center justify-center text-white rounded-lg overflow-hidden`}
            >
              <div className="relative w-full h-52 mb-4">
                <Image
                  src={slide.imageSrc}
                  alt={slide.alt}
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              <div className="absolute inset-0">{slide.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
