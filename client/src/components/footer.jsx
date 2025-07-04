import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Footer() {
  gsap.registerPlugin(ScrollTrigger);

  const footerRef = useRef(null);
  const svgRef = useRef(null);
  const letterRefs = useRef([]);
  const outerDivRef = useRef(null);
  const svgContainerRef = useRef(null);
  const [refsReady, setRefsReady] = useState(false);

  // Clear and reset letterRefs on each render
  letterRefs.current = [];

  const setLetterRef = (el) => {
    if (el) {
      letterRefs.current.push(el);
    }
  };

  // Check if all refs are ready after component mounts/updates
  useEffect(() => {
    // Wait a tick to ensure all refs are set
    const timer = setTimeout(() => {
      if (
        letterRefs.current.length > 0 &&
        svgContainerRef.current &&
        footerRef.current &&
        outerDivRef.current
      ) {
        setRefsReady(true);
      }
    }, 0);

    return () => clearTimeout(timer);
  });

  useEffect(() => {
    if (!refsReady || letterRefs.current.length === 0) return;

    // Refresh ScrollTrigger to recalculate positions
    ScrollTrigger.refresh();

    // Create timeline for animations that triggers when footer comes into view
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svgContainerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        onRefresh: () => {
          // Ensure animation state is reset on refresh
          gsap.set(letterRefs.current, {
            yPercent: 100,
            opacity: 0,
            scaleY: 1.2,
            transformOrigin: "bottom",
          });
        },
      },
    });

    // Set initial state explicitly
    gsap.set(letterRefs.current, {
      yPercent: 100,
      opacity: 0,
      scaleY: 1.2,
      transformOrigin: "bottom",
    });

    // ONLY animate the SVG letters
    tl.to(letterRefs.current, {
      yPercent: 0,
      opacity: 1,
      scaleY: 1,
      duration: 1.2,
      stagger: 0.08,
      ease: "power3.out",
    });

    // Height animation when scrolled to
    const heightTween = gsap.to(footerRef.current, {
      height: "100vh",
      ease: "power3.out",
      scrollTrigger: {
        trigger: outerDivRef.current,
        start: "bottom 90%",
        scrub: 1,
        duration: 2.5,
      },
    });

    // Cleanup function
    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      if (heightTween.scrollTrigger) heightTween.scrollTrigger.kill();
      tl.kill();
      heightTween.kill();
    };
  }, [refsReady]); // Depend on refsReady instead of letterRefs.current

  return (
    <div ref={outerDivRef}>
      <footer
        ref={footerRef}
        className="w-full min-h-[700px] bg-black flex flex-col text-white overflow-hidden p-10"
        data-theme="dark"
      >
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Do it once. Do it right.
            </h2>

            <div className="mb-8">
              <p className="font-medium">New Business:</p>
              <a href="mailto:hello@rejoice.com" className="hover:underline">
                hello@rejoice.com
              </a>
            </div>

            <div className="mb-8">
              <p className="mb-2">Sign up for our newsletter (No spam)</p>
              <div className="flex border-b border-white pb-2 max-w-xs">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent outline-none flex-grow"
                />
                <button className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <nav className="flex flex-col space-y-4">
                <a href="/" className="hover:underline">
                  Home
                </a>
                <a href="/work" className="hover:underline">
                  Work
                </a>
                <a href="/about" className="hover:underline">
                  About
                </a>
                <a href="/services" className="hover:underline">
                  Services
                </a>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </nav>
            </div>

            <div className="flex flex-col justify-between">
              <div className="flex flex-col space-y-4">
                <a
                  href="https://instagram.com"
                  className="flex items-center hover:underline"
                >
                  Instagram <span className="ml-1">↗</span>
                </a>
                <a
                  href="https://linkedin.com"
                  className="flex items-center hover:underline"
                >
                  LinkedIn <span className="ml-1">↗</span>
                </a>
              </div>

              <div className="mt-auto">
                <div className="mb-2">
                  <p>San Diego—USA</p>
                  <p>Paris—France</p>
                </div>

                <div>
                  <a href="/terms" className="hover:underline">
                    Terms of use
                  </a>
                  <p>©13—25</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SVG with letter animation */}
        <div
          className="logo-wrapper w-full sm:px-10 mt-auto overflow-hidden"
          ref={svgContainerRef}
        >
          <svg
            ref={svgRef}
            width="100%"
            height="auto"
            viewBox="0 0 1364 253"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            className="w-full"
          >
            <path
              ref={setLetterRef}
              d="M0.0500007 196.5L113.8 56.5H0.0500007V3.99998H183.45V56.5L69.7 196.5H183.45V249H0.0500007V196.5Z"
              fill="white"
            />
            <path
              ref={setLetterRef}
              d="M369.059 99.55V153.45H260.909V194.75H389.359V249H250.409C221.009 249 201.409 229.4 201.409 200V161.85C201.409 141.9 215.059 127.9 235.359 128.25H237.459V124.75H235.359C215.059 124.75 201.409 111.1 201.409 91.15V53C201.409 23.6 221.009 3.99998 250.409 3.99998H389.359V58.25H260.909V99.55H369.059Z"
              fill="white"
            />
            <path
              ref={setLetterRef}
              d="M468.38 103.4V249H408.88V102.7C408.88 35.85 451.23 0.499987 516.33 0.499987C579.68 0.499987 622.03 35.85 622.03 102.7V249H562.53V103.4C562.53 71.9 540.13 56.5 515.28 56.5C490.08 56.5 468.38 71.9 468.38 103.4Z"
              fill="white"
            />
            <path
              ref={setLetterRef}
              d="M641.986 249V3.99998H701.486V193H705.686C751.536 193 781.636 153.8 781.636 94.3V3.99998H841.136V91.5C841.136 193.7 784.786 249 680.136 249H641.986Z"
              fill="white"
            />
            <path
              ref={setLetterRef}
              d="M861.427 126.5C861.427 50.9 912.527 0.499987 988.827 0.499987C1065.48 0.499987 1116.23 50.9 1116.23 126.5C1116.23 202.1 1065.48 252.5 988.827 252.5C912.527 252.5 861.427 202.1 861.427 126.5ZM920.927 126.5C920.927 168.5 948.227 196.5 988.827 196.5C1029.43 196.5 1056.73 168.5 1056.73 126.5C1056.73 84.5 1029.43 56.5 988.827 56.5C948.227 56.5 920.927 84.5 920.927 126.5Z"
              fill="white"
            />
            <path
              ref={setLetterRef}
              d="M1136.22 249V3.99998H1195.72V147.15L1280.07 3.99998H1346.57L1278.32 114.6L1363.72 249H1295.47L1244.37 169.9L1195.72 249H1136.22Z"
              fill="white"
            />
          </svg>
        </div>
      </footer>
    </div>
  );
}
