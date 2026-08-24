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

    return (
        <div
            id="trading-internacional"
            className="bg-[#23262A] text-white py-24 px-6 relative overflow-hidden"
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Texto */}
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

                {/* Imagen */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7 }}
                    className="relative flex justify-center items-center"
                >
                    {/* Glow detrás de la imagen */}
                    <div className="absolute inset-0 bg-[#70A4DC]/20 blur-[100px] rounded-full" />

                    <Image
                        src="/images/trading.jpeg"
                        alt="Trading Internacional"
                        width={500}
                        height={500}
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="
                            relative
                            z-10
                            w-full
                            h-auto
                            max-w-125
                            object-cover
                            rounded-2xl
                        "
                    />
                </motion.div>

            </div>
        </div>
    );
}