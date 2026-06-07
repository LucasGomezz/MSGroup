import IntroForwarding from "@/components/forwarding/IntroForwarding";
import CardsServicios from "@/components/forwarding/CardsServicios";
import TransporteContent from "@/components/forwarding/TransporteContent";
import StatsForwarding from "@/components/forwarding/StatsForwarding";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import ServiceIntro from "@/components/ServiceIntro";


export default function MSforwarding() {
    return (
        <>
            <Hero title="MS Forwarding"
                description="Gestionamos el transporte internacional y manejo de su mercadería de importación y exportación con eficiencia y transparencia total en cada etapa del proceso."
                buttonText="Inicia tu consulta"
                buttonColor="bg-navy hover:bg-navy/90"
                mediaType="video"
                mediaSrc="/videos/ms-forwarding.mp4"
                overlayOpacity="bg-black/30"
                gradient={true}
                gradientColor="from-forwardingPrincipal/60 via-forwardingPrincipal/20"
                defaultService="MS Forwarding" />
            <ServiceIntro
                title="MS Forwarding"
                colorClass="text-forwardingPrincipal"
                description="Desde 1990, MS Forwarding brinda soluciones de transporte internacional desde Argentina, coordinando operaciones marítimas, aéreas y terrestres para empresas locales e internacionales."
            />
            <StatsForwarding />
            <IntroForwarding />
            <TransporteContent />
            <CardsServicios />
            <CTASection
                title="¿COORDINAMOS TU PRÓXIMA CARGA?"
                description="Te acompañamos con soluciones claras, ágiles y sin costos ocultos."
                buttonText="Hablemos"
                bgClassName="bg-navy"
                textClassName="text-white"
                buttonClassName="bg-white text-navy hover:bg-grey/90"
            />
        </>
    );
}