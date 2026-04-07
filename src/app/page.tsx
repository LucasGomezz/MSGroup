import Navbar from "@/compononents/Navbar";
import Hero from "@/compononents/Hero";
import Services from "@/compononents/Services";
import Stats from "@/compononents/Stats";
import WhyChooseUs from "@/compononents/WhyChooseUs";
import CTAHome from "@/compononents/CTAHome";
import Footer from "@/compononents/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <WhyChooseUs />
      <CTAHome />
      <Footer />
    </>
  );
}