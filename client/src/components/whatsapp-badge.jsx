"use client";

import { useState } from "react";

export default function WhatsAppBadge() {
  const [isHovering, setIsHovering] = useState(false);

  const whatsappNumber = "919876543210"; // Replace with your WhatsApp number
  const message = "Hello! How can I help you?"; // Default message

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        aria-label="Contact us on WhatsApp"
      >
        {/* Official WhatsApp Icon */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path
            fill="currentColor"
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.052 0-2.082.398-2.847 1.12-.735.709-1.14 1.712-1.14 2.759 0 1.055.404 2.061 1.128 2.775 1.817 1.74 4.768 2.652 7.422 2.652.992 0 1.954-.115 2.86-.334l.643-.11 4.888 2.582-.787-3.123.455-.712c.516-.81.822-1.741.822-2.77 0-3.024-2.488-5.474-5.565-5.474"
          />
        </svg>

        {/* Tooltip on hover */}
        <div className={`absolute bottom-20 right-0 bg-gray-800 text-white text-sm font-medium py-2 px-3 rounded-lg whitespace-nowrap shadow-md transition-opacity duration-200 ${isHovering ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          Message us on WhatsApp
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
        </div>

        {/* Pulsing animation ring */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-25"></div>
      </button>
    </div>
  );
}
