"use client";
import { useState, useEffect, useRef } from "react";
import type React from "react";

interface ContactFormProps {
  scrollProgress: number;
}

export default function ContactForm({ scrollProgress }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef < HTMLDivElement > null;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "", company: "" });
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <div
      ref={sectionRef}
      className="min-h-screen w-full bg-white relative overflow-hidden"
    >
      {/* Animated background line */}
      <div
        className="absolute top-0 left-0 h-1 bg-black transition-all duration-300"
        style={{ width: `${Math.max(0, scrollProgress - 33)}%` }}
      />

      <div className="max-w-[1400px] mx-auto sm:px-12 px-2 w-full h-full py-20 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side - Heading & Info */}
          <div
            className={`flex flex-col justify-start transition-all duration-1000 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {/* Subheading with animation */}
            <div
              className={`mb-8 transition-all duration-500 delay-100 ${
                inView ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-sm tracking-widest text-gray-600 uppercase">
                Got a Project in Mind?
              </p>
            </div>

            {/* Main heading */}
            <h2
              className={`text-5xl sm:text-7xl font-light leading-tight mb-12 transition-all duration-1000 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Let&apos;s
              <br />
              <span className="relative inline-block">
                Talk
                {/* Animated underline */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-black transition-all duration-1000 delay-300 ${
                    inView ? "w-full" : "w-0"
                  }`}
                />
              </span>
            </h2>

            {/* Contact info */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-300 ${
                inView ? "opacity-100" : "opacity-0"
              }`}
            >
              <div>
                <p className="text-xs tracking-widest text-gray-600 uppercase mb-2">
                  Address
                </p>
                <p className="text-sm leading-relaxed text-black">
                  #15-7015 Tranmere Dr
                  <br />
                  Mississauga, ON L5S 1T7
                </p>
              </div>

              <div>
                <p className="text-xs tracking-widest text-gray-600 uppercase mb-2">
                  Socials
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-sm text-black hover:text-gray-600 transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="text-sm text-black hover:text-gray-600 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <div>
                <a
                  href="#"
                  className="text-sm text-black hover:text-gray-600 transition-colors"
                >
                  Careers
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div
            className={`flex flex-col justify-start transition-all duration-1000 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {isSubmitted ? (
              <div className="flex items-center justify-center h-full min-h-96">
                <div className="text-center">
                  <div className="mb-6">
                    <svg
                      className="w-16 h-16 mx-auto stroke-black"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-light mb-2">
                    Thanks for reaching out
                  </h3>
                  <p className="text-sm text-gray-600">
                    We&apos;ll get back to you shortly
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-sm placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-sm placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                {/* Company Input */}
                <div className="relative">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company (optional)"
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-sm placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                {/* Message Input */}
                <div className="relative pt-4">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-sm placeholder-gray-400 focus:outline-none focus:border-black transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="group relative inline-flex items-center gap-2 text-sm font-light tracking-wide uppercase transition-all hover:gap-3"
                  >
                    <span>Send Message</span>
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-gray-50 to-white rounded-full opacity-50 blur-3xl -z-10" />
    </div>
  );
}
