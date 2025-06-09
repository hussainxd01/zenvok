"use client";
import { useRef, useState, useEffect } from "react";
import {
  X,
  Volume2,
  VolumeX,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MediaShowcase = ({
  // Media configuration
  type = "video", // "video", "image", "slideshow"
  src = "/reel.mp4", // Single source for video/image
  sources = [], // Array of sources for slideshow: [{ src: "...", alt: "..." }]

  // Display configuration
  title = "Show Reel",
  height = "800px",
  backgroundColor = "bg-white",
  titleColor = "white",
  titleSize = "text-7xl",

  // Animation configuration
  enableScaleAnimation = true, // New prop to control scale animation

  // Video specific options
  autoPlay = true,
  muted = true,
  loop = true,
  preload = "none",

  // Interaction text
  playText = "Play Reel",
  closeText = "Close Reel",

  // Custom styling
  containerClassName = "",
  titleClassName = "",

  // Callbacks
  onOpen = () => {},
  onClose = () => {},
  onPlay = () => {},
  onPause = () => {},
}) => {
  gsap.registerPlugin(ScrollTrigger);

  // State variables
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Refs
  const sectionRef = useRef(null);
  const mediaContainerRef = useRef(null);
  const showreelCursorRef = useRef(null);
  const modalCursorRef = useRef(null);
  const modalRef = useRef(null);
  const mediaRef = useRef(null);
  const overlayRef = useRef(null);
  const timelineRef = useRef(null);

  // Cursor position tracking
  const cursor = useRef({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });

  // Get current media source
  const getCurrentSrc = () => {
    if (type === "slideshow" && sources.length > 0) {
      return sources[currentSlide]?.src || "";
    }
    return src;
  };

  // Video playback functions
  const playVideo = () => {
    if (type === "video" && mediaRef.current) {
      mediaRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          onPlay();
        })
        .catch((error) => {
          console.error("Playback error:", error);
          if (!isMuted) {
            setIsMuted(true);
            mediaRef.current.muted = true;
            mediaRef.current.play().then(() => {
              setIsPlaying(true);
              onPlay();
            });
          }
        });
    }
  };

  // Slideshow navigation
  const nextSlide = (e) => {
    e.stopPropagation();
    if (type === "slideshow" && sources.length > 0) {
      setCurrentSlide((prev) => (prev + 1) % sources.length);
    }
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    if (type === "slideshow" && sources.length > 0) {
      setCurrentSlide((prev) => (prev - 1 + sources.length) % sources.length);
    }
  };

  const openModal = () => {
    setIsOpen(true);
    onOpen();
  };

  const closeModal = () => {
    if (timelineRef.current) {
      timelineRef.current.reverse().then(() => {
        setIsOpen(false);
        if (type === "video" && mediaRef.current) {
          mediaRef.current.pause();
          setIsPlaying(false);
          onPause();
        }
        onClose();
      });
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (type === "video" && mediaRef.current) {
      const newMuted = !isMuted;
      mediaRef.current.muted = newMuted;
      setIsMuted(newMuted);
      if (!newMuted && !isPlaying) playVideo();
    }
  };

  const togglePlayPause = (e) => {
    e.stopPropagation();
    if (type === "video" && mediaRef.current) {
      if (isPlaying) {
        mediaRef.current.pause();
        setIsPlaying(false);
        onPause();
      } else {
        playVideo();
      }
    }
  };

  // Initialize scroll animation and cursor followers
  useEffect(() => {
    // Scroll Animation - Only if enableScaleAnimation is true
    if (enableScaleAnimation) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "center center",
          scrub: 1,
        },
      });

      gsap.set(mediaContainerRef.current, {
        scale: 0.3,
        opacity: 0,
      });

      tl.to(mediaContainerRef.current, {
        scale: 1,
        opacity: 1,
        ease: "power2.out",
      });
    } else {
      // If scale animation is disabled, ensure the container is visible
      gsap.set(mediaContainerRef.current, {
        scale: 1,
        opacity: 1,
      });
    }

    // Cursor following functionality
    const showreelFollower = showreelCursorRef.current;
    const modalFollower = modalCursorRef.current;

    gsap.set([showreelFollower, modalFollower], {
      xPercent: -50,
      yPercent: -50,
      opacity: 0,
      scale: 0.5,
    });

    const onMouseMove = (e) => {
      cursor.current.targetX = e.clientX;
      cursor.current.targetY = e.clientY;
    };

    const followCursor = () => {
      cursor.current.x += (cursor.current.targetX - cursor.current.x) * 0.1;
      cursor.current.y += (cursor.current.targetY - cursor.current.y) * 0.1;

      if (showreelFollower && modalFollower) {
        gsap.set([showreelFollower, modalFollower], {
          x: cursor.current.x,
          y: cursor.current.y,
        });
      }

      requestAnimationFrame(followCursor);
    };

    followCursor();
    document.addEventListener("mousemove", onMouseMove);

    // Escape key to close modal
    const handleEsc = (e) => {
      if (e.key === "Escape" && isOpen) closeModal();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, enableScaleAnimation]); // Added enableScaleAnimation to dependency array

  // Modal animation when opened
  useEffect(() => {
    if (isOpen) {
      const tl = gsap.timeline();

      // Start hidden
      gsap.set([overlayRef.current, modalRef.current], { opacity: 0 });
      gsap.set(modalRef.current, { scale: 0.95, rotate: 5 });

      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      })
        .to(
          modalRef.current,
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .call(() => {
          if (type === "video" && mediaRef.current) {
            mediaRef.current.style.visibility = "visible";
            playVideo();
          }
        });

      timelineRef.current = tl;

      // Show the modal cursor follower
      gsap.to(modalCursorRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
      });
    } else {
      // Hide the modal cursor follower when modal is closed
      if (modalCursorRef.current) {
        gsap.to(modalCursorRef.current, {
          opacity: 0,
          scale: 0.5,
          duration: 0.3,
          ease: "power3.out",
        });
      }
    }
  }, [isOpen, type]);

  // Hover state management
  const handleMouseEnter = () => {
    if (!isOpen) {
      setIsHovering(true);
      gsap.to(showreelCursorRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    gsap.to(showreelCursorRef.current, {
      opacity: 0,
      scale: 0.5,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  // Render preview media
  const renderPreviewMedia = () => {
    const currentSrc = getCurrentSrc();

    if (type === "video") {
      return (
        <video
          src={currentSrc}
          draggable={false}
          autoPlay={autoPlay}
          preload={preload}
          playsInline={true}
          muted
          loop={loop}
          className="w-full h-full object-cover"
        />
      );
    } else {
      return (
        <img
          src={currentSrc}
          alt={
            type === "slideshow" ? sources[currentSlide]?.alt || "" : "Preview"
          }
          draggable={false}
          className="w-full h-full object-cover"
        />
      );
    }
  };

  // Render modal media
  const renderModalMedia = () => {
    const currentSrc = getCurrentSrc();

    if (type === "video") {
      return (
        <video
          ref={mediaRef}
          className="w-full h-full object-cover"
          playsInline
          loop={loop}
          muted={isMuted}
          style={{ visibility: "hidden" }}
        >
          <source src={currentSrc} type="video/mp4" />
        </video>
      );
    } else {
      return (
        <img
          ref={mediaRef}
          src={currentSrc}
          alt={
            type === "slideshow" ? sources[currentSlide]?.alt || "" : "Modal"
          }
          className="w-full h-full object-cover"
        />
      );
    }
  };

  return (
    <>
      {/* Play/View cursor follower */}
      <div
        ref={showreelCursorRef}
        className="pointer-events-none fixed top-0 left-0 w-auto h-20 flex items-center justify-center gap-2 bg-opacity-20 rounded-full z-50"
        style={{
          opacity: 0,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="w-6 h-6 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-full h-full"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <p className="text-white">{playText}</p>
      </div>

      {/* Close cursor follower */}
      <div
        ref={modalCursorRef}
        className="pointer-events-none fixed top-0 left-0 w-auto h-20 flex items-center justify-center gap-2 bg-opacity-20 rounded-full z-[9999]"
        style={{
          opacity: 0,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="w-6 h-6 flex items-center justify-center">
          <X size={20} color="white" />
        </div>
        <p className="text-white">{closeText}</p>
      </div>

      {/* Media Section */}
      <section
        ref={sectionRef}
        className={`w-full flex items-center justify-center relative overflow-hidden ${backgroundColor} ${containerClassName}`}
        style={{ height }}
      >
        {/* Media Container */}
        <div
          ref={mediaContainerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={openModal}
          className="w-full h-full flex items-center justify-center cursor-pointer relative"
        >
          {renderPreviewMedia()}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className={`${titleSize} ${titleColor} ${titleClassName}`}>
              {title}
            </h1>
          </div>
        </div>
      </section>

      {/* Media Modal */}
      {isOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            ref={modalRef}
            className="relative w-full max-w-5xl aspect-video bg-black overflow-hidden rounded shadow-xl"
          >
            {renderModalMedia()}

            {/* Controls */}
            <div className="absolute bottom-4 left-4 flex gap-2">
              {/* Video Controls */}
              {type === "video" && (
                <>
                  <button
                    onClick={toggleMute}
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 text-white transition-all"
                  >
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </button>

                  <button
                    onClick={togglePlayPause}
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 text-white transition-all"
                  >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  </button>
                </>
              )}

              {/* Slideshow Controls */}
              {type === "slideshow" && sources.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 text-white transition-all"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <div className="bg-white bg-opacity-20 rounded-full px-3 py-2 text-white text-sm flex items-center">
                    {currentSlide + 1} / {sources.length}
                  </div>

                  <button
                    onClick={nextSlide}
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 text-white transition-all"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MediaShowcase;
