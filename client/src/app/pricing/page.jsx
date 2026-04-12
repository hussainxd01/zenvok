"use client";

import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import MaskedText from "@/components/masked-text";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar adaptiveMode={true} />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:pt-28 sm:pb-20 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <MaskedText
            text="Pricing."
            className="text-[clamp(3rem,12vw,8rem)] leading-[0.9] font-light tracking-tight mb-12"
            indent={false}
          />
          <div className="h-px bg-gray-200 mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16">
            <div>
              <MaskedText
                text="Simple, transparent pricing."
                className="text-lg leading-relaxed text-pretty"
                indent={false}
              />
            </div>
            <div>
              <MaskedText
                text="Every project is unique, crafted with precision and care. We believe in quality over quantity, working with select clients to deliver transformative results."
                className="text-lg leading-relaxed text-pretty"
                indent={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-16 px-4 sm:px-6 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {/* Starter */}
            <div className="bg-white p-8 sm:p-10 lg:p-12">
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                  Starter
                </h3>
                <h2 className="text-5xl font-light mb-4">₹ 7,999</h2>
                <p className="text-sm text-gray-600">One-time engagement</p>
              </div>

              <div className="h-px bg-gray-200 my-8" />

              <ul className="space-y-4 text-sm leading-relaxed text-pretty">
                <li>Functional Website</li>
                <li>1 Page</li>
                <li>Design Included</li>
                <li>Mobile Responsive</li>
                <li>Social Media Icons</li>
                <li>Delivery in 5-7 days</li>
              </ul>

              <Link
                href="/contact?plan=starter"
                className="mt-12 w-full max-w-xs mx-auto text-center border border-black py-4 px-6 text-sm hover:bg-black hover:text-white transition-colors duration-300 block"
              >
                Get Started
              </Link>
            </div>

            {/* Ecommerce */}
            <div className="bg-black text-white p-8 sm:p-10 lg:p-12">
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
                  Ecommerce
                </h3>
                <h2 className="text-5xl font-light mb-4">₹ 29,000</h2>
                <p className="text-sm text-gray-400">Unlimited Revision</p>
              </div>

              <div className="h-px bg-gray-800 my-8" />

              <ul className="space-y-4 text-sm leading-relaxed text-pretty">
                <li>10 Pages</li>
                <li>Everything in Starter</li>
                <li>E-Commerce Functionality</li>
                <li>Payment Integration</li>
                <li>Hosting Setup</li>
                <li>Speed optimization</li>
                <li>14 Days Delivery</li>
              </ul>

              <Link
                href="/contact?plan=ecommerce"
                className="mt-12 w-full max-w-xs mx-auto text-center border border-white py-4 px-6 text-sm hover:bg-white hover:text-black transition-colors duration-300 block"
              >
                Let&apos;s Talk
              </Link>
            </div>

            {/* Premium */}
            <div className="bg-white p-8 sm:p-10 lg:p-12">
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                  Premium
                </h3>
                <h2 className="text-5xl font-light mb-4">Custom</h2>
                <p className="text-sm text-gray-600">Unlimited Revision</p>
              </div>

              <div className="h-px bg-gray-200 my-8" />

              <ul className="space-y-4 text-sm leading-relaxed text-pretty">
                <li>Everything in Ecommerce</li>
                <li>Fully Custom Design</li>
                <li>Advanced SEO</li>
                <li>Custom integrations</li>
                <li>Advanced analytics</li>
                <li>Multilingual Support</li>
              </ul>

              <Link
                href="/contact?plan=premium"
                className="mt-12 w-full max-w-xs mx-auto text-center border border-black py-4 px-6 text-sm hover:bg-black hover:text-white transition-colors duration-300 block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="py-16 px-4 sm:px-6 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="h-px bg-gray-200 mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16">
            <div>
              <MaskedText
                text="Performance & emotion. You need both."
                className="text-3xl font-light mb-6 text-pretty"
                indent={false}
              />
            </div>
            <div>
              <MaskedText
                text="We build brands that are fast, reliable, and designed for people—combining clean code with growth-focused design."
                className="text-lg leading-relaxed mb-6 text-pretty"
                indent={false}
              />
              <MaskedText
                text="Every engagement includes strategic thinking, technical precision, and a commitment to measurable results."
                className="text-lg leading-relaxed text-pretty"
                indent={false}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
