"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useSpring } from "framer-motion"
import Image from "next/image"
export default function HeroMSTrading() {
    const { scrollYProgress } = useScroll()
    // mueve la capa blanca hacia arriba 
    const y = useTransform(scrollYProgress, [0, 0.15], ["0%", "-100%"])
    const smoothY = useSpring(y, { stiffness: 80, damping: 20, })
    return (
        <section className="relative h-[140vh] -mt-20">
            {/* 🖼 FONDO FIJO */}
            <div className="fixed top-0 left-0 w-full h-screen -z-10">
                <Image src="/images/trading.png" alt="Trading background" fill className="object-cover" priority />
            </div> {/* ⬜ CAPA BLANCA */}
            <motion.div style={{ y: smoothY }} className="absolute top-0 left-0 w-full h-[90vh] flex items-center justify-center bg-white" >
                <h1 className=" text-[12vw] font-extrabold leading-none text-center text-transparent bg-[url('/images/trading.png')] bg-size-[100vw_100vh] bg-center bg-no-repeat bg-clip-text" >
                    MS Trading
                </h1>
            </motion.div>
        </section>)
}