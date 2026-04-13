import Hero from "@/compononents/HeroHome";
import Services from "@/compononents/Services";
import Stats from "@/compononents/Stats";
import WhyChooseUs from "@/compononents/WhyChooseUs";
import CTAHome from "@/compononents/CTAHome";
import Experience from "@/compononents/Experience";

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