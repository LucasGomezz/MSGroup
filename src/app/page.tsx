import Navbar from "@/compononents/Navbar";
import Hero from "@/compononents/Hero";
import Services from "@/compononents/Services";
import Stats from "@/compononents/Stats";
import WhyChooseUs from "@/compononents/WhyChooseUs";
import CTAHome from "@/compononents/CTAHome";
import Footer from "@/compononents/Footer";
import Experience from "@/compononents/Experience";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Stats />
      <Services />
      <CTAHome />
      <WhyChooseUs />
      <Footer />
    </>
  );
}