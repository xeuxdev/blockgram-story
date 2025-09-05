import { Navbar } from "~/components/navbar";
import { About } from "~/components/sections/about";
import { Footer } from "~/components/sections/footer";
import { Introduction } from "~/components/sections/introduction";
import { Keys } from "~/components/sections/keys";
import { Features } from "~/components/sections/features";
import { PainPoints } from "~/components/sections/points";
import { TableOfContent } from "~/components/sections/table-of-content";
import { Tools } from "~/components/sections/tools";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blockgram" },
    { name: "description", content: "Welcome to Blockgram!" },
  ];
}

export default function Home() {
  return (
    <div className="md:flex px-[2.564vw] py-[1.563vw] md:px-[1.3vw] gap-[1.563vw]">
      <Navbar />

      <main className="w-full max-md:pt-[17vw] md:w-[77.604vw] bg-[#f0f0f0] text-dark-purple flex flex-col gap-[2.564vw] md:gap-[1.563vw] mt-[1.563vw]">
        <Introduction />
        <TableOfContent />
        <Keys />
        <PainPoints />
        <Tools />
        <Features />
        <About />
        <Footer />
      </main>
    </div>
  );
}
