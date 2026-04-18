import Hero from "@/components/Hero";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTAHome from "@/components/home/CTAHome";
import Experience from "@/components/home/Experience";

export default function Home() {
  return (
    <>
      <Hero title="Un partner para toda tu operación internacional." 
                  description="Desde 1990 moviendo tu negocio sin fronteras con soluciones integrales de logística." 
                  buttonText="Contactanos" 
                  buttonColor="bg-coral hover:shippingComplementario/90" 
                  mediaType="image" 
                  mediaSrc="/images/heroBoat.png" 
                  overlayOpacity="bg-black/30" 
                  gradient={true} />
      <Experience />
      <Stats />
      <Services />
      <CTAHome />
      <WhyChooseUs />
    </>
  );
}