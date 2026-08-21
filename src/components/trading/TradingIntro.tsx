"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import content from "./TradingIntro.i18n.json";

export default function TradingIntro() {
  const { language } = useLanguage();
  const t = content[language];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false },
    transition: { duration: 0.6 },
  };

  return (
    <div className="relative py-28 px-6 flex flex-col items-center justify-center bg-linear-to-b from-white to-[#F4F1E8]">
      <motion.div {...fadeInUp} className="max-w-4xl text-center">
        <span className="text-[#70A4DC] font-black tracking-[0.3em] uppercase text-xs mb-4 block">
          {t.eyebrow}
        </span>

        <h2 className="text-5xl md:text-7xl font-black text-[#23262A] leading-none mb-8">
          {t.headingMs} <span className="text-[#70A4DC]">{t.headingTrading}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-left mt-12 border-t border-[#7E868D]/20 pt-10">
          <p className="text-lg md:text-xl text-[#23262A] leading-relaxed font-medium">
            {t.parrafo1}
          </p>

          <p className="text-lg text-[#4A5158] leading-relaxed font-light">
            {t.parrafo2}
          </p>
        </div>
      </motion.div>

      <div className="absolute -bottom-10 left-10 text-[180px] font-black text-[#23262A]/5 pointer-events-none">
        +35
      </div>
    </div>
  );
}