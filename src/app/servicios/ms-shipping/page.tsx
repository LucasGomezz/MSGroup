import BloqueWithCompleto from "@/compononents/BloqueWithCompleto";
import HeroVideo from "@/compononents/HeroVideo";
import SplitGrid from "@/compononents/SplitGrid";




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
                            <div className="h-[1px] w-32 md:w-64 bg-[#3A6657]" />

                            {/* Icono de Ancla / Náutico */}
                            <div className="text-[#3A6657]">
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

                            <div className="h-[1px] w-32 md:w-64 bg-[#3A6657]" />
                        </div>
                    </div>
                </div>
            </section>
            <SplitGrid
                data={[
                    {
                        custom: (
                            <div className="grid md:grid-cols-2 w-full">
                                <div className="relative w-full h-[520px] md:h-auto">
                                    <img
                                        src="/images/shipping/shipping-operacionDeBuques.jpg"
                                        alt="Operación de Buques"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
                                    <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10 lg:px-14 text-white">
                                        <span className="text-xs tracking-[0.3em] uppercase text-white/70">
                                            Ship Management
                                        </span>
                                        <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight max-w-xl">
                                            Operación de Buques
                                        </h2>
                                        <p className="mt-6 text-base md:text-lg leading-relaxed text-white/90 max-w-xl">
                                            Gestionamos la operación integral para diversos armadores internacionales, especializándonos principalmente en buques de tipo Bulk Carrier, Multipropósito y Roll-on/Roll-off, entre otros.
                                        </p>
                                        <div className="mt-4 max-w-xl">
                                            <p className="text-lg md:text-xl font-semibold text-white mb-2">
                                                ¿Por qué confiar en nosotros?
                                            </p>
                                            <p className="text-base md:text-lg leading-relaxed text-white/80">
                                                Nuestra trayectoria en mercados competitivos y el cumplimiento riguroso de
                                                compromisos nos avalan. Año tras año, empresas líderes y exportadores de
                                                diversos rubros nos eligen para el manejo integral de sus contratos de carga.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#3A6657] text-white p-8 md:p-12 flex items-center">
                                    <ul className="space-y-6 text-base md:text-lg leading-relaxed">
                                        {[
                                            "Negociamos contratos de carga enfocados en obtener la mayor rentabilidad para nuestros clientes.",
                                            "Aseguramos términos contractuales competitivos adaptados a la realidad del mercado actual.",
                                            "Minimizamos riesgos y exploramos nuevas oportunidades comerciales en cada viaje.",
                                            "Conectamos con redes globales de traders y operadores para encontrar el mejor empleo para su buque.",
                                            "Mantenemos altos estándares de calidad optimizando costos de mantenimiento y operación.",
                                            "Acceso preferencial a bunkers, tripulación, seguros y reparaciones con los mejores proveedores del sector.",
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-4 items-start">

                                                <span className="mt-2 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />

                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
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
                                            <div className="space-y-6">
                                                {[
                                                    { t: "Voyage Charter", d: "Contratación de buque por viaje específico." },
                                                    { t: "Time Charter", d: "Arrendamiento de buque por período determinado." },
                                                    { t: "Contract of Affreightment - COA", d: "Contratos de volumen para tráficos regulares." }
                                                ].map((item, i) => (
                                                    <div key={i} className="group">
                                                        <h4 className="text-white font-bold text-lg group-hover:text-[#F6AD55] transition-colors">
                                                            {item.t}
                                                        </h4>
                                                        <p className="text-white/70 text-sm leading-relaxed">
                                                            {item.d}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        {/* COLUMNA 2: PRINCIPALES CARGAS */}
                                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
                                            <h3 className="text-[#F6AD55] font-bold mb-6 uppercase text-sm tracking-[0.2em] flex items-center gap-2">
                                                <span className="w-8 h-[2px] bg-[#F6AD55]" /> Tráficos principales
                                            </h3>
                                            <ul className="grid grid-cols-1 gap-4">
                                                {[
                                                    "Commodities agrícolas (granos, harinas, aceites)",
                                                    "Graneles sólidos (minerales, fertilizantes, productos siderúrgicos)",
                                                    "Carga rodante (vehículos, maquinaria agrícola)",
                                                    "Carga general y carga de proyecto"
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
            <section className="w-full bg-[#f5f5f5] py-16 px-6">

                <div className="max-w-4xl mx-auto">

                    <h2 className="text-3xl md:text-4xl font-semibold text-shippingPrincipal text-center">
                        Servicios de brokerage
                    </h2>

                    <div className="w-16 h-1 bg-shippingPrincipal mx-auto mt-4 rounded-full" />

                    <ul className="mt-10 space-y-4 text-gray-700 text-lg">

                        {[
                            "Búsqueda de buques disponibles según requerimiento de carga",
                            "Búsqueda de cargas para buques disponibles",
                            "Negociación de términos de charter party",
                            "Asesoramiento en cálculo de costos de viaje",
                            "Compra y venta de buques",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="text-shippingPrincipal mt-1">→</span>
                                <span>{item}</span>
                            </li>
                        ))}

                    </ul>

                </div>

            </section>
            <SplitGrid
                data={[
                    {
                        custom: (
                            <div className="grid md:grid-cols-2 w-full">
                                <div className="relative w-full h-[520px] md:h-auto">
                                    <img
                                        src="/images/shipping/shipping-brokerage.jpg"
                                        alt="Brokerage Marítimo"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
                                    <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10 lg:px-14 text-white">
                                        <span className="text-xs tracking-[0.3em] uppercase text-white/70">
                                            Conectamos tu carga con el buque ideal.
                                        </span>
                                        <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight max-w-xl">
                                            Brokerage Marítimo
                                        </h2>
                                        <p className="mt-6 text-base md:text-lg leading-relaxed text-white/90 max-w-xl">
                                            Nuestro departamento de brokerage da respuesta inmediata a todos los requerimientos de transporte posibilitando el acercamiento entre las posiciones de cargas y buques en cualquier puerto del mundo, actuando como intermediarios entre armadores y cargadores.
                                        </p>
                                        <p className="mt-6 text-base md:text-lg leading-relaxed text-white/90 max-w-xl">
                                            Mantenemos información actualizada en tiempo real sobre posiciones de buques y requerimientos de cargas a nivel global, lo que nos permite ofrecer alternativas inmediatas a nuestros clientes.
                                        </p>

                                    </div>
                                </div>
                                <div className="bg-[#3A6657] text-white p-8 md:p-12 flex flex-col justify-center">
                                    {/* Título de la sección */}
                                    <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">
                                        Nuestra capacidad como brokers se sustenta en:
                                    </h2>

                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-base md:text-lg leading-relaxed">
                                        {[
                                            "Red directa de contactos globales con armadores, productores y traders.",
                                            "Experiencia técnica en operaciones portuarias, con especialización en Latinoamérica.",
                                            "Cooperación internacional mediante canales activos con los principales brokers mundiales.",
                                            "Negociación especializada de términos contractuales según el mercado y producto.",
                                            "Asesoramiento integral desde la negociación hasta el seguimiento post-cierre de contratos.",
                                            "Expertise operativo en cálculo de costos y utilidades para contratos de charter.",
                                            "Intervención activa en operaciones de compra y venta de embarcaciones.",
                                            "Confianza consolidada de clientes de primer nivel con presencia internacional.",
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-4 items-start">
                                                <span className="mt-2.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ),
                    },
                    {
    custom: (
        <div className="flex flex-col lg:grid lg:grid-cols-3 w-full min-h-[600px] gap-4 bg-gray-100 p-4">
            {/* COLUMNA IZQUIERDA: CAPACIDAD (VERDE) */}
            <div className="bg-[#1a4731] text-white p-10 md:p-14 flex flex-col justify-center rounded-sm shadow-md">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight border-b border-white/20 pb-6">
                    Nuestra capacidad de agencia marítima incluye:
                </h2>
                <ul className="space-y-6 text-sm md:text-base leading-relaxed">
                    {[
                        "Atención a diversos tipos de buques: Bulk carriers, buques multipropósito, Roll-on/Roll-off (Ro/Ro), portacontenedores y buques pesqueros",
                        "Gestión de múltiples tipos de carga: Graneles, productos agrícolas, productos siderúrgicos, fertilizantes, contenedores, carga de proyecto, vehículos y carga general",
                        "Seguimiento permanente: Monitoreo continuo de operaciones portuarias cumpliendo con todos los requerimientos operativos y documentales de nuestros clientes",
                        "Equipo especializado: Staff de profesionales con amplia experiencia y la infraestructura necesaria para asegurar operaciones portuarias eficientes",
                        "Capacidad multilingüe: Personal bilingüe español/inglés, con conocimientos adicionales de italiano y portugués para comunicación con tripulaciones y armadores internacionales"
                    ].map((item, i) => (
                        <li key={i} className="flex gap-4 items-start">
                            <span className="text-white/80 font-bold text-lg leading-none">→</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* COLUMNA CENTRAL: GLASSMORPHISM */}
            <div className="relative w-full h-[500px] lg:h-auto overflow-hidden rounded-sm shadow-md group">
                <img
                    src="/images/shipping/shipping-agenciaMaritima.jpg"
                    alt="Agencia Marítima"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay oscuro para que el texto blanco resalte más */}
                <div className="absolute inset-0 bg-black/30" />
                
                {/* RECUADRO CON TRANSPARENCIA (GLASS) */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="bg-white/10 backdrop-blur-md p-10 rounded-xl border border-white/20 shadow-2xl max-w-md">
                        <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-wider">
                            Agencia Marítima
                        </h2>
                        <p className="text-white/90 text-base md:text-lg leading-relaxed font-medium">
                            Como agentes marítimos y/o agentes protectores proveemos todos los servicios portuarios para atención de buques y cargas en los principales puertos argentinos.
                        </p>
                    </div>
                </div>
            </div>

            {/* COLUMNA DERECHA: SERVICIOS (NARANJA) */}
            <div className="bg-[#d35400] text-white p-10 md:p-14 flex flex-col justify-center rounded-sm shadow-md">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight border-b border-white/20 pb-6">
                    Servicios Ofrecidos en Puertos Argentinos
                </h2>
                <ul className="space-y-5 text-base md:text-lg leading-relaxed">
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
                    ].map((item, i) => (
                        <li key={i} className="flex gap-4 items-center">
                            <span className="text-white/80 font-bold">→</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    ),
},

                ]}
            />
        </>
    );
}




