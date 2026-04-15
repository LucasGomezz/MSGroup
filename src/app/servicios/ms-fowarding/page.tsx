import IntroForwarding from "@/compononents/IntroForwarding";
import CardsServicios from "@/compononents/CardsServicios";
import TransporteContent from "@/compononents/TransporteContent";
import HeroMSForwarding from "@/compononents/HeroMSForwarding";
import StatsForwarding from "@/compononents/StatsForwarding";


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