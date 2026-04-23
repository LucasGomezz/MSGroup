import Hero from "@/components/Hero";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Experience from "@/components/home/Experience";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero title="Un partner para toda tu operación internacional."
        description="Desde 1990 moviendo tu negocio sin fronteras con soluciones integrales de logística."
        buttonText="Iniciá tu consulta"
        buttonColor="bg-coral hover:shippingComplementario/90"
        mediaType="image"
        mediaSrc="/images/heroBoat.png"
        overlayOpacity="bg-black/30"
        gradient={true} />
      <Experience />
      <Stats />
      <Services />
      <WhyChooseUs />
      <CTASection
        title="¿Listo para potenciar tu logística internacional?"
        description="Solicitá tu cotización ahora y recibí asesoramiento a medida."
        buttonText="Hablemos"
        bgClassName="bg-coral"
        textClassName="text-white"
        buttonClassName="bg-white text-coral hover:bg-gray-100"
      />
    </>
  );
}