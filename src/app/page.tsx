import { About } from "@/components/About";
import { Aim } from "@/components/Aim";
import { BackgroundStar } from "@/components/BackgroundStar";
import { Founder, marisaBio, ritaBio } from "@/components/Founder";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { World } from "@/components/World";

export default function Home() {
  return (
    <main className="main">
      <BackgroundStar />
      <Hero />
      <Aim />
      <Services />
      <World />
      <About />
      <Founder
        className="marisa"
        name="Marisa Bellani"
        headingId="marisa__heading"
        bio={marisaBio}
      />
      <Founder
        className="rita"
        name="Rita Almeida Freitas"
        headingId="rita__heading"
        bio={ritaBio}
      />
    </main>
  );
}
