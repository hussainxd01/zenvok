"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import "./globals.css";
import LoadingScreen from "@/components/loading-screen";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Initialize smooth scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="en">
      <body className="antialiased">
        {/* Only show loading screen on homepage */}
        {isHomePage && <LoadingScreen />}
        {children}
      </body>
    </html>
  );
}
