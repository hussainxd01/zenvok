"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/navbar";
import MaskedText from "@/components/masked-text";
import emailjs from "@emailjs/browser";

export default function Page() {
  return (
    <Suspense fallback={<ContactFallback />}>
      <ContactPage />
    </Suspense>
  );
}

/* Inner component — safe to use useSearchParams */
function ContactPage() {
  const searchParams = useSearchParams();
  const selectedPlan = searchParams.get("plan");

  const [scrollProgress, setScrollProgress] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (selectedPlan && !formData.message) {
      setFormData((prev) => ({
        ...prev,
        message: `I'm interested in the ${selectedPlan} plan. `,
      }));
    }
  }, [selectedPlan]);

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
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (contactRef.current) observer.observe(contactRef.current);
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Backend API call commented out but preserved for future use
      /*
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, selectedPlan }),
        }
      );

      if (!res.ok) throw new Error("Failed submitting form");
      */

      // Send to email directly via EmailJS
      await emailjs.send(
        "service_ih9x22k",
        "template_stuympf",
        {
          from_name: formData.name,
          reply_to: formData.email,
          company: formData.company,
          message: formData.message,
          selected_plan: selectedPlan,
        },
        "HVcHfFDNuxjrvtW-w"
      );

      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", company: "", message: "" });
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      alert(err.text || err.message || "Failed submitting form");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Scroll bar */}
      <div
        className="fixed top-0 left-0 h-0.5 bg-black z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar adaptiveMode />

      {/* Hero */}
      <div className="min-h-screen bg-black flex items-end pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-4 w-full">
          <MaskedText
            text="Ready to transform your vision into a standout website? Connect with us to start your digital journey."
            className="text-white text-[20px] sm:text-6xl leading-tight tracking-tight"
            indent={0}
          />
        </div>
      </div>

      {/* Contact section */}
      <section
        ref={contactRef}
        className="min-h-screen bg-black py-20 sm:py-32"
      >
        <div className="max-w-[1400px] mx-auto px-4 grid lg:grid-cols-2 gap-20">
          {/* Left */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xs tracking-widest text-gray-400 mb-8">
              Got A Project In Mind?
            </p>

            <h2 className="text-white text-6xl font-light border-b pb-8 mb-8">
              LET&apos;S TALK
            </h2>

            {selectedPlan && (
              <p className="text-sm text-white/80 border border-white/20 inline-block px-4 py-2 rounded">
                Selected Plan:{" "}
                <span className="capitalize">{selectedPlan}</span>
              </p>
            )}
          </div>

          {/* Right – Form */}
          <form
            onSubmit={handleSubmit}
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
              className="w-full bg-transparent border-b border-gray-600 pb-3 text-white text-sm outline-none"
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              required
              className="w-full bg-transparent border-b border-gray-600 pb-3 text-white text-sm outline-none"
            />

            <input
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Company (Optional)"
              className="w-full bg-transparent border-b border-gray-600 pb-3 text-white text-sm outline-none"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              required
              placeholder="Tell us about your project..."
              className="w-full bg-transparent border-b border-gray-600 pb-3 text-white text-sm outline-none resize-none"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-black py-3 text-sm"
            >
              {isLoading ? "Sending…" : "Send Message"}
            </button>

            {isSubmitted && (
              <p className="text-gray-400 text-sm">
                ✓ Thank you. We'll be in touch soon.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

function ContactFallback() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <p className="text-white text-sm opacity-60">Loading…</p>
    </main>
  );
}
