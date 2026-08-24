"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import content from "./TradingInternacional.i18n.json";

export default function TradingInternational() {
    const { language } = useLanguage();
    const t = content[language];

    const fadeInUp = {
        initial: { opacity: 0, x: -40 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: false },
        transition: { duration: 0.6 },
    };

    const fadeInImage = {
        initial: { opacity: 0, x: 40 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: false },
        transition: { duration: 0.8 },
    };

    return (
        <div
            id="trading-internacional"
            className="bg-[#23262A] text-white py-24 px-6 relative overflow-hidden"
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                <motion.div
                    {...fadeInUp}
                    className="z-10"
                >
                    <h3 className="text-[#70A4DC] text-4xl md:text-5xl font-bold mb-6 italic tracking-tighter">
                        {t.heading}
                    </h3>

                    <p className="text-2xl font-light leading-snug text-[#F4F1E8]">
                        {t.descripcion}
                    </p>
                </motion.div>

                <motion.div
                    {...fadeInImage}
                    className="relative w-full"
                >
                    <div className="absolute inset-0 bg-[#70A4DC]/20 blur-[80px] rounded-full" />

                    <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
                        <Image
                            src="/images/trading.jpeg"
                            alt="MS Trading - Comercio internacional"
                            width={1280}
                            height={853}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </motion.div>

            </div>
        </div>
    );
}