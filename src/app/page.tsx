import { Aim } from "@/components/Aim";
import { BackgroundStar } from "@/components/BackgroundStar";
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
    </main>
  );
}
