"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "Honestly, we were skeptical — we'd worked with two agencies before and both times it felt like they were just ticking boxes. These guys actually understood what we were trying to build.",
    author: "Raghav Singhania",
    role: "Founder, Singhania & Sons",
  },
  {
    quote:
      "Our old site looked like it was made in 2014. I kept delaying fixing it because I didn't trust anyone with it. Glad I finally did. The new one doesn't even feel like the same company.",
    author: "Priya Nambiar",
    role: "Director, Nambiar Estates",
  },
  {
    quote:
      "They pushed back on a few of our ideas and they were right to. That's rare. Most people just say yes and deliver something average.",
    author: "Karan Bajaj",
    role: "Co-Founder, Bajaj Ventures",
  },
  {
    quote:
      "We launched during peak wedding season and the enquiries literally doubled. My team thought we'd run some ad campaign — I had to explain it was just the new website.",
    author: "Ananya Iyer",
    role: "Creative Director, Studio Iyer",
  },
  {
    quote:
      "I've recommended them to three other people already. That's probably the most honest thing I can say.",
    author: "Mihir Desai",
    role: "CEO, Desai Group",
  },
];

export default function TestimonialSection() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="w-full bg-white text-black overflow-x-hidden">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-24 pb-10 relative">
        <h1 className="text-[24vw] sm:text-[18vw] md:text-[12vw] lg:text-[10vw] leading-none font-[400] tracking-tight relative inline-block">
          Clients
          <span className="absolute top-[10%] right-[-2rem] md:right-[-1rem] text-[4vw] md:text-[1.5vw] font-normal text-gray-800">
            ( x{testimonials.length.toString().padStart(2, "0")} )
          </span>
        </h1>
      </div>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <hr className="border-t border-gray-300 w-full" />
      </div>

      {/* Testimonial Body */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-8">
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[3.5vw] sm:text-[2.2vw] md:text-[1rem] leading-snug font-light">
          {/* Left Column — navigation */}
          <div className="text-gray-400 space-y-1">
            {testimonials.map((t, i) => (
              <p
                key={i}
                onClick={() => setActive(i)}
                className={`cursor-pointer transition-colors duration-200 ${
                  active === i ? "text-gray-900" : "hover:text-gray-600"
                }`}
              >
                {i === active ? "→ " : ""}
                {t.author}
              </p>
            ))}
          </div>

          {/* Right Column — active quote */}
          <div
            key={active}
            className="text-gray-900 space-y-3"
            style={{ animation: "fadeUp 0.35s ease forwards" }}
          >
            <p className="leading-snug">&ldquo;{current.quote}&rdquo;</p>
            <p className="text-gray-400 text-[3vw] sm:text-[1.8vw] md:text-[0.85rem]">
              {current.role}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
