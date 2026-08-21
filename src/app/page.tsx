"use client";

import Hero from "@/components/Hero";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Experience from "@/components/home/Experience";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/lib/language-context";
import content from "./page.i18n.json";

export default function Home() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <>
      <Hero title={t.heroTitle}
        description={t.heroDescription}
        buttonText={t.heroButtonText}
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
        title={
    <>
      {t.ctaTituloLinea1}
      <br />
      {t.ctaTituloLinea2}
    </>
  }
        description={t.ctaDescription}
        buttonText={t.ctaButtonText}
        bgClassName="bg-coral"
        textClassName="text-white"
        buttonClassName="bg-white text-coral hover:bg-gray-100"
      />
    </>
  );
}