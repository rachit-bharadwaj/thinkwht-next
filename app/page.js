import Hero from "@/components/Hero";
import Internship from "@/components/Internship";
import Job from "@/components/Job";
import MidBanner from "@/components/MidBanner";
import Training from "@/components/Training";

export default function Home() {
  return (
    <main>
      <Hero />
      <Training />
      <MidBanner />
      <Internship />
      <Job />
    </main>
  );
}
