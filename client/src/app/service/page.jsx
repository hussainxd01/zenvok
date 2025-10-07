import Service from "@/components/service";
import Navbar from "@/components/navbar";
import MaskedText from "@/components/masked-text";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar adaptiveMode={true} />
      {/* Hero Section */}
      <div
        className="min-h-[90dvh] w-full bg-white z-40 relative flex items-end justify-center pt-32 pb-20"
        data-theme="light"
      >
        <div className="max-w-[1400px] mx-auto sm:px-12 px-2 w-full">
          <MaskedText
            text={
              "One mission. Two engagement models. Undeniable transformation and growth."
            }
            className="font-light text-[20px] sm:text-6xl text-left leading-[1.3] sm:leading-[0.9] tracking-tight sm:tracking-tighter"
            indent={0}
            positioning="w-full"
          />
        </div>
      </div>
      <Service />
    </main>
  );
}
