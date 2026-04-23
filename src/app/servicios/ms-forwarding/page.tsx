import IntroForwarding from "@/components/forwarding/IntroForwarding";
import CardsServicios from "@/components/forwarding/CardsServicios";
import TransporteContent from "@/components/forwarding/TransporteContent";
import StatsForwarding from "@/components/forwarding/StatsForwarding";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";


export default function MSforwarding() {
    return (
        <>
            <Hero title="MS Forwarding"
                description="Gestionamos el transporte internacional de tu carga con eficiencia y transparencia total en cada etapa del proceso."
                buttonText="Iniciá tu consulta"
                buttonColor="bg-forwardingComplementario hover:forwardingComplementario/90"
                mediaType="video"
                mediaSrc="/videos/ms-forwarding.mp4"
                overlayOpacity="bg-black/30"
                gradient={true}
                gradientColor="from-forwardingPrincipal/60 via-forwardingPrincipal/20"
                defaultService="MS Forwarding" />
            <StatsForwarding />
            <IntroForwarding />
            <TransporteContent />
            <CardsServicios />
            <CTASection
                title="¿COORDINAMOS TU PRÓXIMO ENVÍO?"
                description="Te acompañamos con soluciones claras, ágiles y sin costos ocultos."
                buttonText="Hablemos"
                bgClassName="bg-coral"
                textClassName="text-white"
                buttonClassName="bg-white text-coral hover:bg-gray-100"
            />
        </>
    );
}