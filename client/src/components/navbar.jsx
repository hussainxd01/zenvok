"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Masked Link Component for Mobile Menu
function MaskedLink({
  text,
  href,
  onClose,
  isMenuOpen,
  delay = 0,
  isActive = false,
}) {
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const hasAnimated = useRef(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!containerRef.current || !mounted) return;

    const words = text.split(" ");
    containerRef.current.innerHTML = "";
    wordRefs.current = [];

    const wrapper = document.createElement("div");
    wrapper.style.display = "flex";
    wrapper.style.flexWrap = "wrap";
    wrapper.style.alignItems = "flex-start";

    words.forEach((word, index) => {
      const container = document.createElement("div");
      container.style.display = "inline-block";
      container.style.overflow = "hidden";
      container.style.position = "relative";
      container.style.verticalAlign = "top";
      container.style.marginRight = index < words.length - 1 ? "0.20em" : "0";
      container.style.height = "1em";

      const wordSpan = document.createElement("span");
      wordSpan.textContent = word;
      wordSpan.style.display = "inline-block";
      wordSpan.style.willChange = "transform";

      container.appendChild(wordSpan);
      wrapper.appendChild(container);
      wordRefs.current.push(wordSpan);
    });

    containerRef.current.appendChild(wrapper);

    // Set initial state
    gsap.set(wordRefs.current, { y: "100%" });
  }, [text, mounted]);

  useEffect(() => {
    if (isMenuOpen && wordRefs.current.length > 0) {
      gsap.to(wordRefs.current, {
        y: "0%",
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.05,
        delay: delay,
      });
      hasAnimated.current = true;
    } else if (
      !isMenuOpen &&
      hasAnimated.current &&
      wordRefs.current.length > 0
    ) {
      gsap.to(wordRefs.current, {
        y: "100%",
        duration: 0.5,
        ease: "power3.in",
        stagger: 0.03,
      });
      hasAnimated.current = false;
    }
  }, [isMenuOpen, delay]);

  return (
    <Link href={href} onClick={onClose} className="overflow-hidden block">
      <div
        ref={containerRef}
        className={`text-5xl font-light text-white hover:opacity-70 transition-opacity ${
          isActive ? "opacity-50" : ""
        }`}
        style={{ lineHeight: "1.2" }}
      >
        {!mounted && text}
      </div>
    </Link>
  );
}

function MobileMenu({ isOpen, onClose }) {
  const pathname = usePathname();
  const menuRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    if (!menuRef.current) return;

    if (tl.current) tl.current.kill();

    tl.current = gsap.timeline({
      defaults: { ease: "power3.inOut", duration: 1 },
    });

    if (isOpen) {
      gsap.set(menuRef.current, {
        y: "-100%",
        opacity: 0,
        pointerEvents: "auto",
      });

      tl.current.to(menuRef.current, { y: "0%", opacity: 1 });
    } else {
      tl.current.to(menuRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.8,
        onComplete: () => {
          gsap.set(menuRef.current, { pointerEvents: "none" });
        },
      });
    }
  }, [isOpen]);

  const navItems = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Works", href: "/works" },
    { text: "Service", href: "/service" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <div
      ref={menuRef}
      className="fixed left-0 top-0 w-full min-h-[100dvh] bg-black text-white flex flex-col items-start justify-center gap-10 px-2 md:hidden z-[80] overflow-hidden pointer-events-none "
      style={{ transformOrigin: "top center" }}
    >
      <button
        onClick={onClose}
        className="mt-4 text-sm  hover:opacity-100 transition"
      >
        Let&apos;s Talk ↗
      </button>
      <section className="flex flex-col w-full text-5xl">
        {navItems.map((item, index) => (
          <MaskedLink
            key={item.text}
            text={item.text}
            href={item.href}
            onClose={onClose}
            isMenuOpen={isOpen}
            delay={0.3 + index * 0.1}
            isActive={pathname === item.href}
          />
        ))}
      </section>
      <section className="flex flex-col text-sm bottom-2 absolute">
        <span>Instagram</span>
        <span>Email</span>
      </section>
    </div>
  );
}

export default function Navbar({
  initialColor = "white",
  adaptiveMode = true,
  blendMode = "difference",
}) {
  gsap.registerPlugin(ScrollTrigger);
  const pathname = usePathname();
  const navbarRef = useRef(null);
  const textRef = useRef(null);
  const svgNavRef = useRef(null);
  const logoContainerRef = useRef(null);
  const scrollTriggersRef = useRef([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    scrollTriggersRef.current.forEach((trigger) => trigger?.kill?.());
    scrollTriggersRef.current = [];

    if (textRef.current) gsap.set(textRef.current, { y: 0, opacity: 1 });
    if (svgNavRef.current)
      gsap.set(svgNavRef.current, { opacity: 0, y: "100%" });

    ScrollTrigger.refresh();
  }, [pathname]);

  useEffect(() => {
    if (!navbarRef.current) return;
    gsap.set(navbarRef.current, { opacity: 1, y: 0 });
    const navAnimation = gsap.from(navbarRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.5,
    });
    return () => navAnimation.kill();
  }, [pathname]);

  useEffect(() => {
    if (!textRef.current || !svgNavRef.current) return;
    const ctx = gsap.context(() => {
      const trigger = ScrollTrigger.create({
        start: "top -100",
        end: "bottom top",
        onEnter: () => {
          gsap.to(textRef.current, {
            y: "-100%",
            opacity: 0.3,
            duration: 0.4,
            ease: "power2.inOut",
          });
          gsap.to(svgNavRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.inOut",
          });
        },
        onLeaveBack: () => {
          gsap.to(textRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.inOut",
          });
          gsap.to(svgNavRef.current, {
            opacity: 0,
            y: "100%",
            duration: 0.4,
            ease: "power2.inOut",
          });
        },
      });
      scrollTriggersRef.current.push(trigger);
    });
    return () => {
      scrollTriggersRef.current.forEach((t) => t?.kill?.());
      scrollTriggersRef.current = [];
      ctx.revert();
    };
  }, [pathname]);

  const getNavbarStyle = () => {
    const baseStyle = {};
    if (menuOpen) {
      return {
        ...baseStyle,
        backgroundColor: "black",
        color: "white",
        mixBlendMode: "normal",
      };
    }
    if (adaptiveMode) {
      return {
        ...baseStyle,
        color: "white",
        mixBlendMode: "difference",
      };
    } else {
      return {
        ...baseStyle,
        color: initialColor,
        mixBlendMode: blendMode,
      };
    }
  };

  const navbarStyle = getNavbarStyle();

  return (
    <>
      <section
        ref={navbarRef}
        className={`fixed top-0 left-0 w-full py-5  z-[90] flex items-center justify-between px-2 sm:px-10 transition-colors duration-500 ${
          menuOpen ? "bg-black" : "bg-transparent md:bg-transparent"
        }`}
        style={navbarStyle}
      >
        <div className="flex items-center gap-2">
          <div ref={logoContainerRef} className="relative overflow-hidden">
            <p
              ref={textRef}
              className="text text-sm sm:text-normal font-bold sm:font-medium whitespace-nowrap"
            >
              The Brand Catalyst
            </p>
            <svg
              ref={svgNavRef}
              className="absolute inset-0"
              viewBox="0 0 1364 253"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
              style={{ width: "50%", height: "100%" }}
            >
              {" "}
              <path
                d="M0.0500007 196.5L113.8 56.5H0.0500007V3.99998H183.45V56.5L69.7 196.5H183.45V249H0.0500007V196.5Z"
                fill="currentColor"
              />{" "}
              <path
                d="M369.059 99.55V153.45H260.909V194.75H389.359V249H250.409C221.009 249 201.409 229.4 201.409 200V161.85C201.409 141.9 215.059 127.9 235.359 128.25H237.459V124.75H235.359C215.059 124.75 201.409 111.1 201.409 91.15V53C201.409 23.6 221.009 3.99998 250.409 3.99998H389.359V58.25H260.909V99.55H369.059Z"
                fill="currentColor"
              />{" "}
              <path
                d="M468.38 103.4V249H408.88V102.7C408.88 35.85 451.23 0.499987 516.33 0.499987C579.68 0.499987 622.03 35.85 622.03 102.7V249H562.53V103.4C562.53 71.9 540.13 56.5 515.28 56.5C490.08 56.5 468.38 71.9 468.38 103.4Z"
                fill="currentColor"
              />{" "}
              <path
                d="M641.986 249V3.99998H701.486V193H705.686C751.536 193 781.636 153.8 781.636 94.3V3.99998H841.136V91.5C841.136 193.7 784.786 249 680.136 249H641.986Z"
                fill="currentColor"
              />{" "}
              <path
                d="M861.427 126.5C861.427 50.9 912.527 0.499987 988.827 0.499987C1065.48 0.499987 1116.23 50.9 1116.23 126.5C1116.23 202.1 1065.48 252.5 988.827 252.5C912.527 252.5 861.427 202.1 861.427 126.5ZM920.927 126.5C920.927 168.5 948.227 196.5 988.827 196.5C1029.43 196.5 1056.73 168.5 1056.73 126.5C1056.73 84.5 1029.43 56.5 988.827 56.5C948.227 56.5 920.927 84.5 920.927 126.5Z"
                fill="currentColor"
              />{" "}
              <path
                d="M1136.22 249V3.99998H1195.72V147.15L1280.07 3.99998H1346.57L1278.32 114.6L1363.72 249H1295.47L1244.37 169.9L1195.72 249H1136.22Z"
                fill="currentColor"
              />{" "}
            </svg>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link
            href="/"
            className={`hover:opacity-70 transition-opacity ${
              pathname === "/" ? "opacity-70" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hover:opacity-70 transition-opacity ${
              pathname === "/about" ? "opacity-70" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/works"
            className={`hover:opacity-70 transition-opacity ${
              pathname === "/works" ? "opacity-70" : ""
            }`}
          >
            Works
          </Link>
          <Link
            href="/service"
            className={`hover:opacity-70 transition-opacity ${
              pathname === "/service" ? "opacity-70" : ""
            }`}
          >
            Service
          </Link>
          <Link
            href="/contact"
            className={`hover:opacity-70 transition-opacity ${
              pathname === "/contact" ? "opacity-70" : ""
            }`}
          >
            Contact
          </Link>
          <div className="cursor-pointer px-4 py-2 flex gap-1 items-center transition-all duration-200 hover:mix-blend-difference">
            Let&apos;s Talk ↗
          </div>
        </div>

        <div className="md:hidden flex items-center relative">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white bg-[#2e2e2e] px-4 py-1 text-xs  active:scale-95 transition-all"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </section>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
