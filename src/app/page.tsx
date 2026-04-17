import Hero from "@/components/HeroHome";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTAHome from "@/components/CTAHome";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Stats />
      <Services />
      <CTAHome />
      <WhyChooseUs />
    </>
  );
}