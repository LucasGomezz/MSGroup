"use client";

import { motion } from "framer-motion";
import { Zap, BarChart } from "lucide-react";

export default function TradingConsulting() {
    const fadeInUp = {
        initial: { opacity: 0, x: -50 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: false },
        transition: { duration: 0.6 },
    };
    return (
        <div id="consultoria-comercio-exterior" className="bg-white py-24 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">

                <div className="md:col-span-7">
                    <motion.div {...fadeInUp} className="space-y-6"
                    >
                        <h3 className="text-[#5C5C5C] text-5xl font-black uppercase tracking-tighter">
                            Consultoría en <br />
                            <span className="text-[#70A4DC]">Comercio Exterior</span>
                        </h3>

                        <p className="text-xl text-[#777777] font-light border-l-8 border-[#70A4DC] pl-8 py-4">
                            Brindamos asesoramiento integral a empresas que desean iniciar o expandir sus operaciones.
                        </p>
                    </motion.div>
                </div>

                <div className="md:col-span-5 grid grid-cols-2 gap-4">

                    <div className="p-8 bg-[#F4F1E8] rounded-3xl flex flex-col items-center justify-center text-center group hover:bg-[#70A4DC] transition-all duration-500">
                        <Zap className="text-[#70A4DC] group-hover:text-white mb-4" size={32} />
                        <span className="font-bold group-hover:text-white uppercase text-xs tracking-widest">
                            Agilidad
                        </span>
                    </div>

                    <div className="p-8 bg-[#5C5C5C] rounded-3xl flex flex-col items-center justify-center text-center text-white">
                        <BarChart className="text-[#70A4DC] mb-4" size={32} />
                        <span className="font-bold uppercase text-xs tracking-widest">
                            Resultados
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
}