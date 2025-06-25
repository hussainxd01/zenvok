import Service from "@/components/service";
import Navbar from "@/components/navbar";
import MaskedText from "@/components/masked-text";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar adaptiveMode={true} />
      {/* Hero Section */}
      <div
        className="min-h-screen w-full bg-white z-40 relative flex items-center justify-center pt-32 pb-20"
        data-theme="light"
      >
        <div className="max-w-[1400px] mx-auto px-12 w-full">
          <MaskedText
            text={
              "One mission. Two engagement models. Undeniable transformation and growth."
            }
            className="font-light text-6xl text-left leading-[0.5] tracking-tighter"
            indent={5}
            positioning="w-full"
          />
        </div>
      </div>
      <Service />
    </main>
  );
}
