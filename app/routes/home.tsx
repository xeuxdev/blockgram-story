import { Navbar } from "~/components/navbar";
import { About } from "~/components/sections/about";
import { Footer } from "~/components/sections/footer";
import { Introduction } from "~/components/sections/introduction";
import { Keys } from "~/components/sections/keys";
import { Next } from "~/components/sections/next";
import { PainPoints } from "~/components/sections/points";
import { TableOfContent } from "~/components/sections/table";
import type { Route } from "./+types/home";
import { Tools } from "~/components/sections/tools";
import { AISection } from "~/components/sections/ai";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blockgram" },
    { name: "description", content: "Welcome to Blockgram!" },
  ];
}

export default function Home() {
  return (
    <div className="flex py-[1.563vw] px-[1.3vw] gap-[1.563vw]">
      <Navbar />

      <main className="w-full md:w-[77.604vw] bg-[#f0f0f0] text-dark-purple flex flex-col gap-[1.563vw] mt-[1.563vw]">
        <Introduction />
        <TableOfContent />
        <Keys />
        <PainPoints />
        <Tools />
        <AISection />
        <Next />
        <About />
        <Footer />
      </main>
    </div>
  );
}
