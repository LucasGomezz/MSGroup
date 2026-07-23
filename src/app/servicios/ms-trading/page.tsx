import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import ServiceIntro from "@/components/ServiceIntro";
import TradingBrokerage from "@/components/trading/TradingBrokerage";
import TradingConsulting from "@/components/trading/TradingConsulting";
import TradingInternational from "@/components/trading/TradingInternacional";
import TradingIntro from "@/components/trading/TradingIntro";


export default function MSTrading() {
    return (
        <>
            <Hero title="MS Trading"
                description="Intermediación comercial y asesoramiento estratégico. Impulsamos la expansión internacional de empresas mediante soluciones comerciales integrales."
                buttonText="Inicia tu consulta"
                buttonColor="bg-tradingComplementario hover:bg-tradingComplementario/90"
                mediaType="video"
                mediaSrc="/videos/mt-trading.mp4"
                overlayOpacity="bg-black/30"
                gradient={true}
                gradientColor="from-tradingPrincipal/40 via-tradingPrincipal/20"
                defaultService="MS Trading" />
            <section className="w-full bg-[#F4F1E8] text-[#5C5C5C] overflow-hidden">
                <div className="relative z-10 shadow-[0_12px_30px_-15px_rgba(0,0,0,0.25)]">
                    <ServiceIntro
                        title="MS Trading"
                        colorClass="text-tradingPrincipal"
                        description="Desde 1990, MS Trading acompaña sus operaciones de comercio exterior desde y hacia Argentina, conectando empresas locales e internacionales mediante soluciones comerciales, logísticas y estratégicas."
                    />
                </div>
                <TradingIntro />
                <TradingInternational />
                <TradingBrokerage />
                <TradingConsulting />
                <CTASection
                    title="IMPULSÁ TU CRECIMIENTO EN MERCADOS INTERNACIONALES"
                    description="Identificamos oportunidades y estructuramos operaciones comerciales a tu medida."
                    buttonText="Hablemos"
                    bgClassName="bg-[#23262A]"
                    textClassName="text-white"
                    buttonClassName="bg-white text-tradingComplementario hover:bg-gray-100"
                />
            </section>
        </>
    );
}