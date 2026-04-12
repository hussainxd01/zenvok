import "./globals.css";
<<<<<<< HEAD
import SmoothScroll from "@/components/smooth-scroll";

export const metadata = {
  title: "Zenvok | Premium Web Development Agency",
  description: "Building standout websites for bold brands. Zenvok creates industry-leading digital experiences and robust web applications.",
  keywords: "web development, web design, agency, digital experiences, Zenvok",
};
=======
import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";
import WhatsAppBadge from "@/components/whatsapp-badge";
>>>>>>> c3f674bbe3214a22a6adf496044eb0739edd365d

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
<<<<<<< HEAD
        <SmoothScroll>
          {children}
        </SmoothScroll>
=======
        {/* Only show loading screen on homepage */}

        {children}
        <WhatsAppBadge />
>>>>>>> c3f674bbe3214a22a6adf496044eb0739edd365d
      </body>
    </html>
  );
}
