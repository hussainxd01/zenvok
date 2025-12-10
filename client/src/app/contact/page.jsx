"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/navbar";
import MaskedText from "@/components/masked-text";

export default function Page() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-white">
      <div
        className="fixed top-0 left-0 h-0.5 bg-black z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar adaptiveMode={true} />

      {/* Hero Section */}
      <div className="min-h-screen w-full bg-black relative flex items-end justify-center pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto sm:px-12 px-2 w-full">
          <MaskedText
            text="Partnering with founders, startups, and brands to craft websites that scale, perform, and leave a lasting impact."
            className="font-light text-[20px] sm:text-6xl text-left leading-[1.3] sm:leading-[0.9] tracking-tight sm:tracking-tighter text-white"
            indent={0}
            positioning="w-full"
          />
        </div>
      </div>

      <section
        ref={contactRef}
        className="min-h-screen w-full bg-black relative py-20 sm:py-32"
      >
        <div className="max-w-[1400px] mx-auto sm:px-12 px-2 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Contact Info */}
            <div
              className={`flex flex-col justify-center transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-xs tracking-widest text-gray-400 mb-8">
                Got A Project In Mind?
              </p>

              <h2 className="font-light text-[32px] sm:text-6xl leading-tight mb-12 text-white border-b border-white pb-8">
                LET'S TALK
              </h2>

              <div className="space-y-10">
                {/* Address */}
                <div
                  className={`transition-all duration-1000 delay-100 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <p className="text-xs tracking-widest text-gray-400 mb-2">
                    Address
                  </p>
                  <p className="text-sm font-light text-white">Kolkata</p>
                  <p className="text-sm font-light text-white">
                    West Bengal, 7000
                  </p>
                </div>

                {/* Socials */}
                <div
                  className={`transition-all duration-1000 delay-200 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <p className="text-xs tracking-widest text-gray-400 mb-3">
                    Follow
                  </p>
                  <div className="flex gap-6">
                    <a
                      href="#"
                      className="text-sm font-light text-white hover:text-gray-300 transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="#"
                      className="text-sm font-light text-white hover:text-gray-300 transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>

                {/* Careers */}
                <div
                  className={`transition-all duration-1000 delay-300 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <a
                    href="/works"
                    className="text-sm font-light text-white hover:text-gray-300 transition-colors"
                  >
                    Works
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div
              className={`flex flex-col justify-center transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="border-b border-gray-600 pb-3 group focus-within:border-white transition-colors">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm font-light"
                  />
                </div>

                {/* Email Input */}
                <div className="border-b border-gray-600 pb-3 group focus-within:border-white transition-colors">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm font-light"
                  />
                </div>

                {/* Company Input */}
                <div className="border-b border-gray-600 pb-3 group focus-within:border-white transition-colors">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company (Optional)"
                    className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm font-light"
                  />
                </div>

                {/* Message Input */}
                <div className="border-b border-gray-600 pb-3 group focus-within:border-white transition-colors">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project..."
                    required
                    rows="4"
                    className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm font-light resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  {isSubmitted ? (
                    <div className="text-gray-400 font-light text-sm">
                      ✓ Thank you. We'll be in touch soon.
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="w-full bg-white text-black font-light py-3 hover:bg-gray-200 transition-colors duration-300 disabled:bg-gray-600 text-sm cursor-pointer"
                    >
                      Send Message
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
