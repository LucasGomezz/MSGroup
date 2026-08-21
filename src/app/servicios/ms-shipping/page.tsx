"use client";

import Hero from "@/components/Hero";
import ShippingShipManagment from "@/components/shipping/ShippingShipManagement";
import ShippingCherating from "@/components/shipping/ShippingChartering";
import ShippingBrokerage from "@/components/shipping/ShippingBrokerage";
import ShippingBrokerageServices from "@/components/shipping/ShippingBrokerageServices";
import ShippingAgency from "@/components/shipping/ShippingAgency";
import ServiceIntro from "@/components/ServiceIntro";
import { useLanguage } from "@/lib/language-context";
import content from "./page.i18n.json";



export default function MSShipping() {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <>
            <Hero title={t.heroTitle}
                description={t.heroDescription}
                buttonText={t.heroButtonText}
                buttonColor="bg-shippingComplementario hover:shippingComplementario/90"
                mediaType="video"
                mediaSrc="/videos/ms-shipping-video.mp4"
                overlayOpacity="bg-black/30"
                gradient={true}
                gradientColor="from-shippingPrincipal/40 via-shippingPrincipal/20"
                defaultService="MS Shipping" />
            <section className="relative w-full overflow-hidden">
                <ServiceIntro
                    title={t.serviceIntroTitle}
                    colorClass="text-shippingPrincipal"
                    description={t.serviceIntroDescription}
                />
                <ShippingShipManagment />
                <ShippingCherating />
                <ShippingBrokerage />
                <ShippingBrokerageServices />
                <ShippingAgency />
            </section>
        </>
    );
}




