"use client";

import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import ServiceIntro from "@/components/ServiceIntro";
import ImportChina from "@/components/trading/ImportChina";
import TradingBrokerage from "@/components/trading/TradingBrokerage";
import TradingConsulting from "@/components/trading/TradingConsulting";
import TradingInternational from "@/components/trading/TradingInternacional";
import TradingIntro from "@/components/trading/TradingIntro";
import { useLanguage } from "@/lib/language-context";
import content from "./page.i18n.json";


export default function MSTrading() {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <>
            <Hero title={t.heroTitle}
                description={t.heroDescription}
                buttonText={t.heroButtonText}
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
                        title={t.serviceIntroTitle}
                        colorClass="text-tradingPrincipal"
                        description={t.serviceIntroDescription}
                    />
                </div>
                <TradingIntro />
                <TradingInternational />
                <ImportChina/>
                <TradingBrokerage />
                <TradingConsulting />
                <CTASection
                    title={t.ctaTitle}
                    description={t.ctaDescription}
                    buttonText={t.ctaButtonText}
                    bgClassName="bg-[#23262A]"
                    textClassName="text-white"
                    buttonClassName="bg-white text-tradingComplementario hover:bg-gray-100"
                />
            </section>
        </>
    );
}