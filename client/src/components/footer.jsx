"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const svgRef = useRef(null);
  const letterRefs = useRef([]);
  const svgContainerRef = useRef(null);
  const animationInitialized = useRef(false);

  // 🔌 newsletter state (NEW)
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const setLetterRef = (el) => {
    if (el && !letterRefs.current.includes(el)) {
      letterRefs.current.push(el);
    }
  };

  useEffect(() => {
    if (animationInitialized.current) return;

    if (
      !footerRef.current ||
      !svgContainerRef.current ||
      letterRefs.current.length === 0
    ) {
      return;
    }

    animationInitialized.current = true;

    gsap.set(letterRefs.current, {
      yPercent: 100,
      opacity: 0,
      scaleY: 1.2,
      transformOrigin: "bottom",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
        id: "footer-animation",
      },
    });

    tl.to(letterRefs.current, {
      yPercent: 0,
      opacity: 1,
      scaleY: 1,
      duration: 1.2,
      stagger: 0.08,
      ease: "power3.out",
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.id === "footer-animation") {
          trigger.kill();
        }
      });
    };
  }, []);

  // 🔌 submit handler (NEW)
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      setStatus("loading");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/newsletter`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setFeedback("Subscribed! Thank you.");
      setStatus("success");
      setEmail("");
    } catch (err) {
      setFeedback(err.message || "Something went wrong");
      setStatus("error");
    }
  };

  return (
    <footer
      ref={footerRef}
      className="w-full bg-black flex flex-col text-white overflow-hidden py-10 sm:px-2 px-2"
      data-theme="dark"
    >
      <div className="container sm:px-10 px-2 grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
        <div>
          <h2 className="text-4xl font-bold mb-8">Do it once. Do it right.</h2>

          {/* 📨 Newsletter (wired, not redesigned) */}
          <div className="mb-8">
            <p className="mb-2">Sign up for our newsletter</p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex border-b border-white pb-2 max-w-xs"
            >
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-transparent outline-none flex-grow"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="ml-2 cursor-pointer"
              >
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
            </form>

            {status !== "idle" && (
              <p className="mt-2 text-sm opacity-80">
                {status === "loading" && "Subscribing"}
                {(status === "success" || status === "error") && feedback}
              </p>
            )}
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
                href="https://www.instagram.com/zenvok.studio?igsh=djA3Y2JjcTJkMHhw"
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
                <p>India — Kolkata</p>
              </div>

              <div>
                <a href="/terms" className="hover:underline">
                  Terms of use
                </a>
                <p>©24-30</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SVG animated logo — untouched */}
      <div
        className="logo-wrapper w-full sm:px-10 mt-auto"
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
  );
}
