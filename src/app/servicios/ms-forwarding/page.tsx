"use client";

import IntroForwarding from "@/components/forwarding/IntroForwarding";
import CardsServicios from "@/components/forwarding/CardsServicios";
import TransporteContent from "@/components/forwarding/TransporteContent";
import StatsForwarding from "@/components/forwarding/StatsForwarding";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import ServiceIntro from "@/components/ServiceIntro";
import { useLanguage } from "@/lib/language-context";
import content from "./page.i18n.json";


export default function MSforwarding() {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <>
            <Hero title={t.heroTitle}
                description={t.heroDescription}
                buttonText={t.heroButtonText}
                buttonColor="bg-navy hover:bg-navy/90"
                mediaType="video"
                mediaSrc="/videos/ms-forwarding-video.mp4"
                overlayOpacity="bg-black/30"
                gradient={true}
                gradientColor="from-forwardingPrincipal/60 via-forwardingPrincipal/20"
                defaultService="MS Forwarding" />
            <ServiceIntro
                title={t.serviceIntroTitle}
                colorClass="text-forwardingPrincipal"
                description={t.serviceIntroDescription}
            />
            <StatsForwarding />
            <IntroForwarding />
            <TransporteContent />
            <CardsServicios />
            <CTASection
                title={t.ctaTitle}
                description={t.ctaDescription}
                buttonText={t.ctaButtonText}
                bgClassName="bg-navy"
                textClassName="text-white"
                buttonClassName="bg-white text-navy hover:bg-grey/90"
            />
        </>
    );
}