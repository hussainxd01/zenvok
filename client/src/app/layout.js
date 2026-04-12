import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";

export const metadata = {
  title: "Zenvok | Premium Web Development Agency",
  description: "Building standout websites for bold brands. Zenvok creates industry-leading digital experiences and robust web applications.",
  keywords: "web development, web design, agency, digital experiences, Zenvok",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
