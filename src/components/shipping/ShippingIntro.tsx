"use client"
import { motion } from "framer-motion";

export default function ShippingIntro() {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: false },
        transition: { duration: 0.6 }
    };
    return (
        <div
            className="relative bg-[#f5f5f5] bg-cover bg-center bg-no-repeat py-12 px-6 text-center"
            style={{ backgroundImage: "url('/images/shipping/waves.png')" }}
        >
            <motion.div {...fadeInUp} >
                <div className="relative z-10 max-w-5xl mx-auto">

                    <h2 className="text-shippingPrincipal text-3xl md:text-4xl font-bold mb-4">
                        MS Shipping
                    </h2>

                    <p className="max-w-4xl mx-auto leading-relaxed font-light text-gray-700 text-xl md:text-2xl whitespace-pre-line">
                        División marítima de MS Group, especializada en el manejo comercial y operativo de buques como Operadores, Charterers y Brokers.
                    </p>

                    <div className="mt-8 flex items-center justify-center gap-4">
                        <div className="h-px w-32 md:w-64 bg-shippingPrincipal" />

                        <div className="text-shippingPrincipal">
                            <svg
                                viewBox="0 0 24 24"
                                width="28"
                                height="28"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 5V21M5 12H2M22 12H19M7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12M12 5C13.6569 5 15 3.65685 15 2C15 0.343146 13.6569 -1 12 -1C10.3431 -1 9 0.343146 9 2C9 3.65685 10.3431 5 12 5Z" />
                                <path d="M12 21C12 21 7 19 7 15M12 21C12 21 17 19 17 15" />
                            </svg>
                        </div>

                        <div className="h-px w-32 md:w-64 bg-shippingPrincipal" />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}