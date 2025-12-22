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
  const [isLoading, setIsLoading] = useState(false); // ✅ added
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // ✅ start loader

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to submit");
      }

      await res.json();

      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", company: "", message: "" });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      alert(`Something went wrong: ${error.message}`);
    } finally {
      setIsLoading(false); // ✅ stop loader
    }
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
            text="Ready to transform your vision into a standout website? Connect with us to start your digital journey."
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
            {/* Left Column */}
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
                LET&apos;S TALK
              </h2>

              <div className="space-y-10">
                <div>
                  <p className="text-xs tracking-widest text-gray-400 mb-2">
                    Address
                  </p>
                  <p className="text-sm font-light text-white">Kolkata</p>
                  <p className="text-sm font-light text-white">
                    West Bengal, 7000
                  </p>
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
                <div className="border-b border-gray-600 pb-3">
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

                <div className="border-b border-gray-600 pb-3">
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

                <div className="border-b border-gray-600 pb-3">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company (Optional)"
                    className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm font-light"
                  />
                </div>

                <div className="border-b border-gray-600 pb-3">
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

                {/* Submit */}
                <div className="pt-2">
                  {isSubmitted ? (
                    <div className="text-gray-400 font-light text-sm">
                      ✓ Thank you. We'll be in touch soon.
                    </div>
                  ) : (
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="relative w-full bg-white text-black font-light py-3 text-sm overflow-hidden group cursor-pointer disabled:cursor-not-allowed"
                    >
                      {/* Button text */}
                      <span
                        className={`relative z-10 transition-opacity duration-300 ${
                          isLoading ? "opacity-0" : "opacity-100"
                        }`}
                      >
                        Send Message
                      </span>

                      {/* Sending text */}
                      <span
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                          isLoading ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        Sending
                      </span>

                      {/* Minimal progress line */}
                      {isLoading && (
                        <span className="absolute bottom-0 left-0 h-[2px] w-full bg-black/10 overflow-hidden">
                          <span className="absolute left-0 top-0 h-full w-1/3 bg-black animate-[slide_1.2s_linear_infinite]" />
                        </span>
                      )}
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
