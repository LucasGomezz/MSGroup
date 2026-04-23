import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import TradingBrokerage from "@/components/trading/TradingBrokerage";
import TradingConsulting from "@/components/trading/TradingConsulting";
import TradingInternational from "@/components/trading/TradingInternacional";
import TradingIntro from "@/components/trading/TradingIntro";


export default function MSTrading() {
    return (
        <>
            <Hero title="MT Trading"
                description="Intermediación comercial y asesoramiento estratégico. Impulsamos la expansión internacional de empresas mediante soluciones comerciales integrales."
                buttonText="Iniciá tu consulta"
                buttonColor="bg-tradingComplementario hover:tradingComplementario/90"
                mediaType="video"
                mediaSrc="/videos/mt-trading.mp4"
                overlayOpacity="bg-black/30"
                gradient={true}
                gradientColor="from-tradingPrincipal/40 via-tradingPrincipal/20"
                defaultService="MS Trading" />
            <section className="w-full bg-[#F4F1E8] text-[#5C5C5C] overflow-hidden">
                <TradingIntro />
                <TradingInternational />
                <TradingBrokerage />
                <TradingConsulting />
                <CTASection
                    title="IMPULSÁ TU CRECIMIENTO EN MERCADOS INTERNACIONALES"
                    description="Identificamos oportunidades y estructuramos operaciones comerciales a tu medida."
                    buttonText="Hablemos"
                    bgClassName="bg-tradingPrincipal"
                    textClassName="text-white"
                    buttonClassName="bg-white text-tradingComplementario hover:bg-gray-100"
                />
            </section>
        </>
    );
}