"use client";

import { useState } from "react";

export default function WhatsAppBadge() {
  const [isHovering, setIsHovering] = useState(false);

  const whatsappNumber = "919330533787";
  const message = "Hello! How can I help you?";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank",
    );
  };

  return (
    <>
      <style>{`
        @keyframes wa-ping {
          0% { transform: scale(1); opacity: 0.6; }
          80%, 100% { transform: scale(2); opacity: 0; }
        }
        .wa-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: #25D366;
          animation: wa-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .wa-ring-delayed { animation-delay: 0.7s; }
      `}</style>

      <div className="fixed bottom-6 right-6 z-40 flex items-center">
        {/* Tooltip */}
        <div
          className={`mr-3 bg-gray-900 text-white text-sm font-medium py-2 px-3 rounded-xl whitespace-nowrap shadow-lg transition-all duration-200 ${
            isHovering
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-2 pointer-events-none"
          }`}
        >
          Message us on WhatsApp
          <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 border-[6px] border-transparent border-l-gray-900" />
        </div>

        {/* Button */}
        <button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="relative flex items-center cursor-pointer justify-center w-14 h-14 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition-transform duration-200 hover:scale-110 active:scale-95"
          style={{
            background: "#25D366",
            boxShadow: "0 4px 16px rgba(37,211,102,0.45)",
          }}
          aria-label="Contact us on WhatsApp"
        >
          <div className="wa-ring" />
          <div className="wa-ring wa-ring-delayed" />

          {/* WhatsApp icon */}
          <svg
            width="30"
            height="30"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 4C9.373 4 4 9.373 4 16c0 2.193.594 4.248 1.631 6.01L4.5 27.5l5.65-1.109A11.94 11.94 0 0016 28c6.627 0 12-5.373 12-12S22.627 4 16 4z"
              fill="white"
            />
            <path
              d="M21.8 19.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.19 5.06 4.35.71.3 1.26.48 1.69.62.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.28-.19-.58-.34z"
              fill="#25D366"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
