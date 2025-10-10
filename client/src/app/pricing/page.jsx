"use client";

import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar adaptiveMode={true} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[8rem] leading-[0.9] font-light tracking-tight mb-12">
            Pricing.
          </h1>
          <div className="h-px bg-gray-200 mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-lg leading-relaxed">
                Simple, transparent pricing.
              </p>
            </div>
            <div>
              <p className="text-lg leading-relaxed">
                Every project is unique, crafted with precision and care. We
                believe in quality over quantity, working with select clients to
                deliver transformative results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {/* Starter */}
            <div className="bg-white p-12">
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                  Starter
                </h3>
                <h2 className="text-5xl font-light mb-4">₹ 7,999</h2>
                <p className="text-sm text-gray-600">One-time engagement</p>
              </div>

              <div className="h-px bg-gray-200 my-8" />

              <ul className="space-y-4 text-sm leading-relaxed">
                <li>Functional Website</li>
                <li>1 Page</li>
                <li>Design Included</li>
                <li>Mobile Responsive</li>
                <li>Social Media Icons</li>
                <li>Delivery in 5-7 days</li>
              </ul>

              <button className="mt-12 w-full border border-black py-4 px-6 text-sm hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer">
                Get Started
              </button>
            </div>

            {/* Partnership */}
            <div className="bg-black text-white p-12">
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
                  Ecommerce
                </h3>
                <h2 className="text-5xl font-light mb-4">₹ 29,000</h2>
                <p className="text-sm text-gray-400">Unlimited Revision</p>
              </div>

              <div className="h-px bg-gray-800 my-8" />

              <ul className="space-y-4 text-sm leading-relaxed">
                <li>10 Pages </li>
                <li>Everything in Starter</li>
                <li>E-Commerce Functionality</li>
                <li>Payment Integration</li>
                <li>Hosting Setup</li>
                <li>Speed optimization</li>
                <li>14 Days Delivery</li>
              </ul>

              <button className="mt-12 w-full border border-white py-4 px-6 text-sm hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer">
                Let&apos;s Talk
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-white p-12">
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                  Premium
                </h3>
                <h2 className="text-5xl font-light mb-4">Custom</h2>
                <p className="text-sm text-gray-600">Unlimited Revision</p>
              </div>

              <div className="h-px bg-gray-200 my-8" />

              <ul className="space-y-4 text-sm leading-relaxed">
                <li>Everything in Ecommerce</li>
                <li>Fully Custom Design</li>
                <li>Advanced SEO</li>
                <li>Custom integrations</li>
                <li>Advanced analytics</li>
                <li>Multilingual Supoort</li>
              </ul>

              <button className="mt-12 w-full border border-black py-4 px-6 text-sm hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="h-px bg-gray-200 mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-light mb-6">
                Performance & emotion. You need both.
              </h3>
            </div>
            <div>
              <p className="text-lg leading-relaxed mb-6">
                We build brands that are fast, reliable, and designed for
                people—combining clean code with growth-focused design.
              </p>
              <p className="text-lg leading-relaxed">
                Every engagement includes strategic thinking, technical
                precision, and a commitment to measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
