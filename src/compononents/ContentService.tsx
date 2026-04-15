"use client";
import { motion } from "framer-motion";
import { Globe, ShieldCheck, Briefcase, Zap, ArrowRight, BarChart, CheckCircle2 } from "lucide-react";

export default function ContentService() {
  // Animaciones reutilizables
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="w-full bg-[#F4F1E8] text-[#5C5C5C] overflow-hidden">

      {/* SECCIÓN 1: MS TRADING - DESCRIPCIÓN PRINCIPAL */}
      <div className="relative py-28 px-6 flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#F4F1E8]">
        <motion.div {...fadeInUp} className="max-w-4xl text-center">
          <span className="text-[#70A4DC] font-black tracking-[0.3em] uppercase text-xs mb-4 block">División Comercio Exterior</span>
          <h2 className="text-5xl md:text-7xl font-black text-[#5C5C5C] leading-none mb-8">
            MS <span className="text-[#70A4DC]">TRADING</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-10 text-left mt-12 border-t border-[#8C8C8C]/20 pt-10">
            <p className="text-lg md:text-xl text-[#5C5C5C] leading-relaxed font-medium">
              Especializada en la intermediación comercial y el asesoramiento estratégico para empresas que buscan expandir sus operaciones en mercados internacionales.
            </p>
            <p className="text-lg text-[#777777] leading-relaxed font-light">
              Fundada en 1990 junto con el grupo empresarial, MS Trading combina el conocimiento profundo de los mercados globales con la capacidad logística integrada del grupo, ofreciendo soluciones comerciales completas que van desde la identificación de oportunidades hasta la entrega final del producto.
            </p>
          </div>
        </motion.div>
        {/* Marca de agua de fondo */}
        <div className="absolute -bottom-10 left-10 text-[180px] font-black text-[#5C5C5C]/5 pointer-events-none">
          +35
        </div>
      </div>

      {/* SECCIÓN 2: TRADING INTERNACIONAL (Gris Oscuro) */}
      <div className="bg-[#5C5C5C] text-white py-24 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="z-10"
          >
            <h3 className="text-[#70A4DC] text-4xl md:text-5xl font-bold mb-6 italic tracking-tighter">Trading Internacional</h3>
            <p className="text-2xl font-light leading-snug text-[#F4F1E8]">
              Actuamos como intermediarios comerciales conectando productores, exportadores e importadores en diferentes mercados del mundo.
            </p>
            <div className="mt-8 flex items-center gap-4 text-[#70A4DC]">
              <div className="h-[2px] w-12 bg-[#70A4DC]" />
              <p className="uppercase tracking-widest text-sm font-bold">Expertise en Argentina y Latinoamérica</p>
            </div>
          </motion.div>
          <div className="relative">
            <div className="absolute inset-0 bg-[#70A4DC]/20 blur-[100px] rounded-full" />
            <Globe size={400} strokeWidth={0.5} className="text-white/10 relative z-10 animate-pulse" />
          </div>
        </div>
      </div>

      {/* SECCIÓN 3: BROKERAGE COMERCIAL (El corazón de la info) */}
      <div className="bg-[#777777] py-28 px-6 text-white relative">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="mb-16">
            <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">Brokerage Comercial</h3>
            <p className="text-xl md:text-2xl text-[#F4F1E8]/80 max-w-3xl font-light">
              Facilitamos el encuentro entre compradores y vendedores a nivel internacional, actuando como intermediarios que garantizan <strong>transparencia, seguridad y cumplimiento</strong> en las operaciones comerciales.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Columna de Servicios de Brokerage */}
            <div className="md:col-span-2 grid md:grid-cols-1 gap-4">
              <p className="text-[#70A4DC] font-bold uppercase tracking-widest text-sm mb-2">Servicios de brokerage:</p>
              {[
                { title: "Identificación de compradores", desc: "Potenciales según producto y mercado objetivo" },
                { title: "Negociación comercial", desc: "Términos, precios, volúmenes e Incoterms" },
                { title: "Estructuración legal", desc: "Contratos internacionales sólidos" },
                { title: "Seguimiento", desc: "Cumplimiento de obligaciones contractuales" },
                { title: "Gestión de crisis", desc: "Resolución de contingencias comerciales" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 p-6 bg-black/10 border-l-4 border-[#70A4DC] hover:bg-black/20 transition-all"
                >
                  <span className="text-[#70A4DC] font-black text-xl">0{i + 1}</span>
                  <div>
                    <h4 className="font-bold text-lg uppercase tracking-tight">{item.title}</h4>
                    <p className="text-[#F4F1E8]/70 font-light">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Valor Agregado (Destacado en lateral) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-[#5C5C5C] p-10 rounded-3xl border border-white/10 flex flex-col justify-center relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                <Briefcase size={80} />
              </div>
              <h4 className="text-[#70A4DC] font-black text-2xl mb-6 leading-tight">Nuestro valor agregado como brokers</h4>
              <p className="text-[#F4F1E8] font-light leading-relaxed">
                Reside en la red de contactos consolidada a lo largo de más de tres décadas, que nos permite acceder directamente a decisores comerciales en múltiples industrias y geografías.
              </p>
              <div className="mt-8 pt-8 border-t border-white/10 italic text-[#8C8C8C]">
                "Más de 35 años de confianza global"
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* SECCIÓN 4: CONSULTORÍA - DISEÑO "DARK TECH" */}
      <div className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">

            <div className="md:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="text-[#5C5C5C] text-5xl font-black uppercase tracking-tighter">
                  Consultoría en<br />
                  <span className="text-[#70A4DC]">Comercio Exterior</span>
                </h3>
                <p className="text-xl text-[#777777] font-light border-l-8 border-[#70A4DC] pl-8 py-4">
                  Brindamos asesoramiento integral a empresas que desean iniciar o expandir sus operaciones de exportación e importación, cubriendo desde los aspectos regulatorios hasta las estrategias de penetración en nuevos mercados.
                </p>
              </motion.div>
            </div>

            <div className="md:col-span-5 grid grid-cols-2 gap-4">
              {/* Stats o Mini Cards de Consultoría */}
              <div className="p-8 bg-[#F4F1E8] rounded-3xl flex flex-col items-center justify-center text-center group hover:bg-[#70A4DC] transition-all duration-500">
                <Zap className="text-[#70A4DC] group-hover:text-white mb-4" size={32} />
                <span className="font-bold group-hover:text-white uppercase text-xs tracking-widest">Agilidad</span>
              </div>
              <div className="p-8 bg-[#5C5C5C] rounded-3xl flex flex-col items-center justify-center text-center text-white">
                <BarChart className="text-[#70A4DC] mb-4" size={32} />
                <span className="font-bold uppercase text-xs tracking-widest">Resultados</span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}