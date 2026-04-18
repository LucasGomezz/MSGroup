"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export default function TradingInternational() {
    const fadeInUp = {
        initial: { opacity: 0, x: -40 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: false },
        transition: { duration: 0.6 },
    };
    return (
        <div className="bg-[#5C5C5C] text-white py-24 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                <motion.div {...fadeInUp}
                    className="z-10"
                >
                    <h3 className="text-[#70A4DC] text-4xl md:text-5xl font-bold mb-6 italic tracking-tighter">
                        Trading Internacional
                    </h3>

                    <p className="text-2xl font-light leading-snug text-[#F4F1E8]">
                        Actuamos como intermediarios comerciales conectando productores, exportadores e importadores en diferentes mercados del mundo.
                    </p>

                    <div className="mt-8 flex items-center gap-4 text-[#70A4DC]">
                        <div className="h-0.5 w-12 bg-[#70A4DC]" />
                        <p className="uppercase tracking-widest text-sm font-bold">
                            Expertise en Argentina y Latinoamérica
                        </p>
                    </div>
                </motion.div>

                <div className="relative">
                    <div className="absolute inset-0 bg-[#70A4DC]/20 blur-[100px] rounded-full" />
                    <Globe size={400} strokeWidth={0.5} className="text-white/10 relative z-10 animate-pulse" />
                </div>

            </div>
        </div>
    );
}