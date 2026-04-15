import BloqueWithCompleto from "@/compononents/BloqueWithCompleto";
import HeroVideo from "@/compononents/HeroVideo";
import SplitGrid from "@/compononents/SplitGrid";
import { FaHandshake, FaGlobe, FaTools, FaShip, FaBalanceScale } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import {
    HiOutlineGlobeAlt,
    HiOutlineShieldCheck,
    HiOutlineLink,
    HiOutlinePresentationChartLine,
    HiOutlineStatusOnline,
    HiOutlineLocationMarker,
    HiOutlineSwitchHorizontal,
    HiOutlineBadgeCheck
} from "react-icons/hi";
import {
    Ship, Container, Eye, Users, Languages,
    FileText, Anchor, UserCheck, Box,
    Settings, HardHat, Fuel, ArrowLeftRight
} from 'lucide-react';



export default function MSShipping() {
    return (
        <>
            <HeroVideo />
            <section className="relative w-full overflow-hidden">
                {/* Contenedor principal con fondo de ondas */}
                <div
                    className="relative bg-[#f5f5f5] bg-cover bg-center bg-no-repeat py-12 px-6 text-center"
                    style={{ backgroundImage: "url('/images/shipping/waves.png')" }}
                >
                    <div className="relative z-10 max-w-5xl mx-auto">

                        {/* Título (incorporado según tu petición) */}
                        <h2 className="text-shippingPrincipal text-3xl md:text-4xl font-bold mb-4">
                            MS Shipping
                        </h2>

                        {/* Descripción - Texto principal */}
                        <p className="max-w-4xl mx-auto leading-relaxed font-light text-gray-700 text-xl md:text-2xl whitespace-pre-line">
                            División marítima de MS Group, especializada en el manejo comercial y operativo de buques como Operadores, Charterers y Brokers.
                        </p>

                        {/* Divisor Náutico */}
                        <div className="mt-8 flex items-center justify-center gap-4">
                            <div className="h-[1px] w-32 md:w-64 bg-shippingPrincipal" />

                            {/* Icono de Ancla / Náutico */}
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

                            <div className="h-[1px] w-32 md:w-64 bg-shippingPrincipal" />
                        </div>
                    </div>
                </div>
            </section>
            <SplitGrid
                data={[
                    {
                        custom: (
                            <div className="w-full bg-shippingPrincipal py-16 px-6 md:px-12 lg:px-16">

                                <div className="grid md:grid-cols-2 gap-10 items-stretch">

                                    {/* LEFT - CARDS */}
                                    <div className="grid sm:grid-cols-2 gap-6">

                                        {[
                                            {
                                                icon: <GiTakeMyMoney />,
                                                title: "Maximización de Rentabilidad",
                                                text: "Gestionamos todo tipo de contratos de cargas, buscando negociar el mayor beneficio para nuestros clientes.",
                                            },
                                            {
                                                icon: <FaBalanceScale />,
                                                title: "Términos Competitivos",
                                                text: "Negociamos términos contractuales óptimos según las condiciones vigentes del mercado para cada tipo de carga y tráfico.",
                                            },
                                            {
                                                icon: <MdSecurity />,
                                                title: "Gestión de Riesgos",
                                                text: "Analizamos cuidadosamente cada viaje para minimizar riesgos y explorar oportunidades en nuevas rutas y mercados..",
                                            },
                                            {
                                                icon: <FaGlobe />,
                                                title: "Red Global",
                                                text: "Monitoreamos en tiempo real las condiciones de mercado y mantenemos contacto directo con productores, traders y operadores globales, lo que nos permite identificar las mejores oportunidades de empleo para cada buque.",
                                            },
                                            {
                                                icon: <FaTools />,
                                                title: "Mantenimiento y Costos",
                                                text: "Cubrimos todos los requerimientos y necesidades de los armadores manteniendo los buques con altos estándares técnicos y operativos, optimizando costos sin comprometer la calidad del servicio. ",
                                            },
                                            {
                                                icon: <FaShip />,
                                                title: "Servicios Preferenciales",
                                                text: "Accedemos a las mejores alternativas para la contratación de bunkers, agencias marítimas, tripulación, seguros, reparaciones y demás servicios relacionados con el manejo de buques.  ",
                                            },
                                        ].map((item, i) => (

                                            <div
                                                key={i}
                                                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                                            >

                                                {/* ICONO + TITULO */}
                                                <div className="flex items-center gap-3 mb-2">

                                                    <div className="bg-shippingPrincipal/10 text-shippingPrincipal p-2 rounded-lg text-lg flex items-center justify-center transition-all duration-300 group-hover:bg-shippingPrincipal group-hover:text-white">
                                                        {item.icon}
                                                    </div>

                                                    <h4 className="text-lg font-semibold text-gray-900 leading-snug">
                                                        {item.title}
                                                    </h4>

                                                </div>

                                                {/* TEXTO */}
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    {item.text}
                                                </p>

                                            </div>

                                        ))}
                                    </div>

                                    {/* RIGHT - IMAGE WITH OVERLAY */}
                                    <div className="relative w-full h-[420px] md:h-auto rounded-2xl overflow-hidden shadow-md">

                                        <img
                                            src="/images/shipping/shipping-operacionDeBuques.jpg"
                                            alt="Operación de Buques"
                                            className="w-full h-full object-cover"
                                        />

                                        {/* OVERLAY */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

                                        {/* TEXT */}
                                        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10 lg:px-12 text-white">

                                            <span className="text-xs tracking-[0.3em] uppercase text-white/70">
                                                Ship Management
                                            </span>

                                            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight max-w-md">
                                                Operación de Buques
                                            </h2>

                                            <p className="mt-6 text-base md:text-lg leading-relaxed text-white/90 max-w-md">
                                                Gestionamos la operación integral para diversos armadores internacionales,
                                                especializándonos en buques Bulk Carrier, Multipropósito y Roll-on/Roll-off,
                                                entre otros.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ),
                    },
                    {
                        custom: (
                            <div className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden">
                                <img
                                    src="/images/shipping/shipping-cherating.jpg"
                                    alt="Chartering background"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
                                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12">
                                    <div className="text-center mb-16">
                                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                                            Chartering
                                        </h2>
                                        <div className="w-24 h-1 bg-[#F6AD55] mx-auto mb-8" />
                                        <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-5xl mx-auto font-light leading-relaxed px-4">
                                            Proveemos servicios de chartering por viaje <span className="font-medium text-white">(voyage charter)</span> y por tiempo <span className="font-medium text-white">(time charter)</span> para atender tanto los contratos de carga de nuestros clientes como nuestros propios contratos de cargas y tráficos regulares, concentrándonos principalmente en el servicio de transporte de commodities, graneles, carga rodante y carga general desde y hacia cualquier puerto del mundo.
                                        </p>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                                        {/* COLUMNA 1: TIPOS DE CONTRATOS */}
                                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
                                            <h3 className="text-[#F6AD55] font-bold mb-6 uppercase text-sm tracking-[0.2em] flex items-center gap-2">
                                                <span className="w-8 h-[2px] bg-[#F6AD55]" /> Tipos de contratos
                                            </h3>

                                            <ul className="grid grid-cols-1 gap-4">
                                                {[
                                                    {
                                                        title: "Voyage Charter:",
                                                        desc: "Contratación de buque por viaje específico."
                                                    },
                                                    {
                                                        title: "Time Charter:",
                                                        desc: "Arrendamiento de buque por período determinado."
                                                    },
                                                    {
                                                        title: "Contract of Affreightment (COA):",
                                                        desc: "Contratos de volumen para tráficos regulares."
                                                    }
                                                ].map((item, i) => (
                                                    <li key={i} className="flex items-start gap-4 text-white/90 group">
                                                        <div className="w-2 h-2 mt-2 rounded-full bg-[#F6AD55] group-hover:scale-150 transition-transform" />

                                                        <span className="text-lg">
                                                            <span className="font-semibold text-white">
                                                                {item.title}
                                                            </span>{" "}
                                                            <span className="text-white/80">
                                                                {item.desc}
                                                            </span>
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        {/* COLUMNA 2: PRINCIPALES CARGAS */}
                                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
                                            <h3 className="text-[#F6AD55] font-bold mb-6 uppercase text-sm tracking-[0.2em] flex items-center gap-2">
                                                <span className="w-8 h-[2px] bg-[#F6AD55]" /> Tráficos principales
                                            </h3>
                                            <ul className="grid grid-cols-1 gap-4">
                                                {[
                                                    "Commodities agrícolas (granos, harinas, aceites).",
                                                    "Graneles sólidos (minerales, fertilizantes, productos siderúrgicos).",
                                                    "Carga rodante (vehículos, maquinaria agrícola).",
                                                    "Carga general y carga de proyecto."
                                                ].map((item, i) => (
                                                    <li key={i} className="flex items-center gap-4 text-white/90 group">
                                                        <div className="w-2 h-2 rounded-full bg-[#F6AD55] group-hover:scale-150 transition-transform" />
                                                        <span className="text-lg font-medium">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    },
                ]}
            />
            <SplitGrid
                data={[
                    {
                        custom: (
                            <div className="w-full bg-[#f8faf9] py-20 px-6 md:px-12 lg:px-20">
                                <div className="max-w-7xl mx-auto">
                                    <div className="grid lg:grid-cols-3 gap-12 items-start">

                                        {/* COLUMNA IZQUIERDA: TITULOS E IMAGEN */}
                                        <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-10">
                                            <div className="inline-block px-3 py-1 bg-shippingPrincipal/10 text-shippingPrincipal text-xs font-bold tracking-widest uppercase rounded-full">
                                                Brokerage Marítimo
                                            </div>
                                            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                                                Nuestra capacidad como <span className="text-shippingPrincipal">Brokers</span> se sustenta en:
                                            </h2>
                                            <div className="pt-4">
                                                <img
                                                    src="/images/shipping/shipping-brokerage.jpg"
                                                    className="rounded-2xl w-full h-64 object-cover"
                                                    alt="Brokerage Marítimo"
                                                />
                                            </div>
                                        </div>

                                        {/* COLUMNA DERECHA: TEXTO INTRODUCTORIO + MATRIZ */}
                                        <div className="lg:col-span-2 space-y-12">

                                            {/* TEXTO EXPLICATIVO SUPERIOR */}
                                            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-[#3A6657]">
                                                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                                    Nuestro departamento de brokerage da respuesta inmediata a todos los requerimientos de transporte posibilitando el acercamiento entre las posiciones de cargas y buques en cualquier puerto del mundo, actuando como intermediarios entre armadores y cargadores.
                                                </p>
                                                <p className="text-gray-600 text-base leading-relaxed">
                                                    Mantenemos información actualizada en tiempo real sobre posiciones de buques y requerimientos de cargas a nivel global, lo que nos permite ofrecer alternativas inmediatas a nuestros clientes.
                                                </p>
                                            </div>

                                            {/* GRID DE ICONOS */}
                                            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
                                                {[
                                                    { title: "Red directa de contactos", text: "Relaciones establecidas con armadores, productores, traders, importadores y exportadores a nivel global.", icon: <HiOutlineGlobeAlt /> },
                                                    { title: "Experiencia en puertos", text: "Amplio conocimiento de operaciones portuarias en todo el mundo, con especialización en Latinoamérica.", icon: <HiOutlineLocationMarker /> },
                                                    { title: "Cooperación internacional", text: "Canales activos con los principales brokers y operadores del mercado mundial.", icon: <HiOutlineLink /> },
                                                    { title: "Negociación especializada", text: "Capacidad para negociar términos contractuales óptimos según condiciones actuales de mercado para cada producto y tráfico.", icon: <HiOutlinePresentationChartLine /> },
                                                    { title: "Asesoramiento integral", text: "Asistencia completa a clientes, desde la negociación hasta el seguimiento post-cierre de contratos.", icon: <HiOutlineSwitchHorizontal /> },
                                                    { title: "Expertise en operaciones", text: "Como operadores de buques, calculamos costos y utilidades de viaje para contratos de chárter.", icon: <HiOutlineStatusOnline /> },
                                                    { title: "Compra y venta de buques", text: "Intervención activa en operaciones de compraventa de embarcaciones.", icon: <HiOutlineShieldCheck /> },
                                                    { title: "Confianza internacional", text: "Presencia consolidada en mercados internacionales competitivos contando con la confianza de clientes de primer nivel que renuevan su confianza año a año.", icon: <HiOutlineBadgeCheck /> }
                                                ].map((item, i) => (
                                                    <div key={i} className="relative pl-16 group">
                                                        <div className="absolute left-0 top-0 w-12 h-12 flex items-center justify-center text-2xl text-shippingPrincipal bg-white shadow-sm rounded-xl group-hover:bg-shippingPrincipal group-hover:text-white transition-all duration-300 border border-gray-100">
                                                            {item.icon}
                                                        </div>
                                                        <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-shippingPrincipal transition-colors">{item.title}</h4>
                                                        <p className="text-sm text-gray-500 leading-relaxed">
                                                            {item.text}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ),
                    },
                ]}
            />
            <section className="w-full bg-[#f8faf9] py-16 px-6">

                <div className="max-w-6xl mx-auto text-center">

                    {/* TITLE */}
                    <h2 className="text-3xl md:text-4xl font-semibold text-shippingPrincipal">
                        Servicios de brokerage
                    </h2>

                    <div className="w-16 h-1 bg-shippingPrincipal mx-auto mt-3 rounded-full" />

                    {/* TIMELINE */}
                    <div className="mt-16 relative">

                        {/* LINE */}
                        <div className="hidden md:block absolute top-6 left-0 w-full h-[2px] bg-shippingPrincipal/30" />

                        <div className="grid md:grid-cols-5 gap-10 relative">

                            {[
                                {
                                    icon: <FaShip size={18} />,
                                    text: "Búsqueda de buques disponibles según requerimiento de carga"
                                },
                                {
                                    icon: <FaGlobe size={18} />,
                                    text: "Búsqueda de cargas para buques disponibles"
                                },
                                {
                                    icon: <FaHandshake size={18} />,
                                    text: "Negociación de términos de charter party"
                                },
                                {
                                    icon: <FaBalanceScale size={18} />,
                                    text: "Asesoramiento en cálculo de costos de viaje"
                                },
                                {
                                    icon: <GiTakeMyMoney size={18} />,
                                    text: "Compra y venta de buques"
                                }
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col items-center text-center gap-4 group relative"
                                >

                                    {/* NODE */}
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full 
              border-2 border-shippingPrincipal bg-white text-shippingPrincipal 
              group-hover:bg-shippingPrincipal group-hover:text-white 
              transition-all duration-300 shadow-sm z-10">

                                        {item.icon}
                                    </div>

                                    {/* TEXT */}
                                    <p className="text-gray-700 text-sm leading-relaxed max-w-[160px]">
                                        {item.text}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>
            </section>
            <SplitGrid
                data={[
                    {
                        custom: (
                            <div className="w-full bg-white font-sans overflow-hidden">
                                {/* CONTENEDOR PRINCIPAL */}
                                <div className="relative w-full min-h-[750px] flex items-center justify-center p-6 md:p-12 lg:p-20">

                                    {/* FONDO */}
                                    <div className="absolute inset-0 z-0">
                                        <img
                                            src="/images/shipping/shipping-agenciaMaritima.jpg"
                                            alt="Agencia Marítima"
                                            className="w-full h-full object-cover shadow-inner"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#1a4731]/95 via-[#1a4731]/70 to-black/40" />
                                    </div>

                                    {/* CONTENIDO FLOTANTE */}
                                    <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">

                                        {/* PARTE IZQUIERDA: TEXTO Y CAPACIDADES */}
                                        <div className="text-white flex flex-col justify-center space-y-6">
                                            <div>
                                                <div className="w-16 h-1 bg-[#d35400] mb-6" />
                                                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase leading-tight mb-4">
                                                    Agencia Marítima
                                                </h2>
                                                <p className="text-base md:text-lg text-white/80 max-w-md font-light leading-relaxed">
                                                   Ofrecemos todos los servicios portuarios para atención de buques y cargas en los principales puertos argentinos.
                                                </p>
                                            </div>

                                            <h3 className="text-white font-semibold text-lg pt-4">
                                                Nuestra capacidad de agencia marítima incluye:
                                            </h3>

                                            {/* MINI GRID DE CAPACIDADES */}
                                            <div className="grid grid-cols-1 gap-5 pt-6 border-t border-white/10">
                                                {[
                                                    { icon: Ship, title: "Atención a diversos tipos de buques", desc: "Bulk carriers, buques multipropósito, Roll-on/Roll-off (Ro/Ro), portacontenedores y buques pesqueros" },
                                                    { icon: Container, title: "Gestión de múltiples tipos de carga", desc: "Graneles, productos agrícolas, productos siderúrgicos, fertilizantes, contenedores, carga de proyecto, vehículos y carga general" },
                                                    { icon: Eye, title: "Seguimiento permanente", desc: "Monitoreo continuo de operaciones portuarias cumpliendo con todos los requerimientos operativos y documentales de nuestros clientes" },
                                                    { icon: Users, title: "Equipo especializado", desc: "Staff de profesionales con amplia experiencia y la infraestructura necesaria para asegurar operaciones portuarias eficientes" },
                                                    { icon: Languages, title: "Capacidad multilingüe", desc: "Personal bilingüe español/inglés, con conocimientos adicionales de italiano y portugués para comunicación con tripulaciones y armadores internacionales" },
                                                ].map((item, i) => (
                                                    <div key={i} className="flex items-start gap-4 group">
                                                        <item.icon className="w-6 h-6 text-[#d35400] transition-transform group-hover:scale-110 shrink-0 mt-1" />
                                                        <div>
                                                            <p className="font-bold text-xs uppercase tracking-wider">{item.title}</p>
                                                            <p className="text-xs text-white/60 leading-tight">{item.desc}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* PARTE DERECHA: TARJETA DE SERVICIOS */}
                                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-2xl shadow-2xl flex flex-col justify-center">
                                            <h3 className="text-lg md:text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                                                Servicios Ofrecidos en Puertos Argentinos
                                            </h3>

                                            <div className="grid grid-cols-1 gap-2">
                                                {[
                                                    "Servicio de agencia",
                                                    "Coordinación de servicio de prácticos y pilotos de puertos y canales",
                                                    "Servicio de remolcadores y lanchas",
                                                    "Atención a tripulación",
                                                    "Provisión de víveres y provisiones",
                                                    "Manejo y provisión de repuestos y reparaciones",
                                                    "Atención y coordinación de drydock",
                                                    "Bunkering",
                                                    "Operaciones portuarias (carga/descarga)"
                                                ].map((service, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex items-center gap-3 py-2.5 px-4 rounded-lg hover:bg-white/5 transition-colors group cursor-default"
                                                    >
                                                        <div className="w-1.5 h-1.5 rounded-full bg-[#d35400] group-hover:scale-125 transition-all" />
                                                        <span className="text-xs md:text-sm font-medium text-white/90 uppercase tracking-wide">
                                                            {service}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ),
                    }

                ]}
            />
        </>
    );
}




