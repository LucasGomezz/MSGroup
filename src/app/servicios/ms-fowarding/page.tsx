import IntroForwarding from "@/components/IntroForwarding";
import CardsServicios from "@/components/CardsServicios";
import TransporteContent from "@/components/TransporteContent";
import HeroMSForwarding from "@/components/HeroMSForwarding";
import StatsForwarding from "@/components/StatsForwarding";


export default function MSFowarding() {
    return (
        <>
            <HeroMSForwarding />
            <StatsForwarding />
            <IntroForwarding />
            <TransporteContent />
            <CardsServicios />
        </>
    );
}