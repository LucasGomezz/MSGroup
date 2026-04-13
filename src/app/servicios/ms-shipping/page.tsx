import BloqueWithCompleto from "@/compononents/BloqueWithCompleto";
import HeroVideo from "@/compononents/HeroVideo";
import SplitGrid from "@/compononents/SplitGrid";




export default function MSShipping() {
    return (
        <>
            <HeroVideo />
            <BloqueWithCompleto title={"MS Shipping"}
                description={`MS Shipping (O Marítima de Servicios S.R.L) es la división marítima de MS Group, especializada en el manejo comercial y operativo de buques como Operadores, Charterers, Agentes Marítimos y Brokers.`}
                titleColor="text-shippingPrincipal" />
            <SplitGrid
                data={[
                    {
                        title: "Operación de Buques (Ship Management)",
                        description:
                            "Como operadores de buques, gestionamos la operación de buques para diversos armadores internacionales, principalmente de los tipos Bulk Carrier, Multipropósito y Roll-on/Roll-off, entre otros. Nuestra inserción en las principales plazas comerciales mundiales altamente competitivas y nuestra seriedad en el cumplimiento de los compromisos contraídos, junto con la calidad de los servicios ofrecidos, nos han permitido que, año a año, empresas armadoras de primer nivel internacional nos confíen la operación y manejo de sus buques.",

                        sections: [
                            {
                                title: "Tipos de contratos",
                                items: [
                                    "Cubrimos todos los requerimientos y necesidades de los armadores manteniendo los buques con altos estándares técnicos y operativos, optimizando costos sin comprometer la calidad del servicio.",
                                    "Accedemos a las mejores alternativas para la contratación de bunkers, agencias marítimas, tripulación, seguros, reparaciones y demás servicios relacionados con el manejo de buques. ",
                                    "Gestionamos todo tipo de contratos de cargas, buscando la maximización de la utilización de los buques y el más alto beneficio para los armadores.",
                                    "Negociamos términos contractuales óptimos según las condiciones vigentes del mercado para cada tipo de carga y tráfico.",
                                    "Analizamos cuidadosamente cada viaje para minimizar riesgos y explorar oportunidades en nuevas rutas y mercados.",
                                    "Monitoreamos en tiempo real las condiciones de mercado y mantenemos contacto directo con productores, traders y operadores globales, lo que nos permite identificar las mejores oportunidades de empleo para cada buque.",
                                ],
                            },
                        ],
                    },
                    {
                        image: "/images/shipping/shipping-operacionDeBuques.jpg",
                    },
                    {
                        image: "/images/shipping/shipping-cherating.jpg",
                    },
                    {
                        title: "Chartering",
                        description:
                            "Proveemos servicios de chartering por viaje (voyage charter) y por tiempo (time charter) para atender nuestros propios contratos de cargas y tráficos regulares, concentrándonos principalmente en el servicio de transporte de commodities, graneles, carga rodante y carga general desde y hacia cualquier puerto del mundo, principalmente entre puertos de Latinoamérica. Mantenemos contratos de charter con buques propios y de terceros, especialmente para tráficos entre puertos de Latinoamérica y hacia destinos internacionales.",

                        sections: [
                            {
                                title: "Tipos de contratos",
                                items: [
                                    "Voyage Charter: Contratación de buque por viaje específico",
                                    "Time Charter: Arrendamiento de buque por período determinado",
                                    "Contract of Affreightment (COA): Contratos de volumen para tráficos regulares",
                                ],
                            },
                            {
                                title: "Tráficos principales:",
                                items: [
                                    "Commodities agrícolas (granos, harinas, aceites)",
                                    "Graneles sólidos (minerales, fertilizantes, productos siderúrgicos)",
                                    "Carga rodante (vehículos, maquinaria agrícola)",
                                    "Carga general y carga de proyecto",
                                ],
                            }
                        ],
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
                        title: "Brokerage Marítimo",
                        description:
                            "Nuestro departamento de brokerage da respuesta inmediata a todos los requerimientos de transporte posibilitando el acercamiento entre las posiciones de cargas y buques en cualquier puerto del mundo, actuando como intermediarios entre armadores y cargadores. Mantenemos información actualizada en tiempo real sobre posiciones de buques y requerimientos de cargas a nivel global, lo que nos permite ofrecer alternativas inmediatas a nuestros clientes.",

                        sections: [
                            {
                                title: "Nuestra capacidad como brokers se sustenta en:",
                                items: [
                                    "Red directa de contactos: Relaciones establecidas con armadores, productores, traders, importadores y exportadores a nivel global",
                                    "Experiencia en puertos: Amplio conocimiento de operaciones portuarias en todo el mundo, con especialización en Latinoamérica",
                                    "Cooperación internacional: Canales activos con los principales brokers y operadores del mercado mundial",
                                    "Negociación especializada: Capacidad para negociar términos contractuales óptimos según condiciones actuales de mercado para cada producto y tráfico",
                                    "Asesoramiento integral: Asistencia completa a clientes, desde la negociación hasta el seguimiento post-cierre de contratos",
                                    "Expertise en operaciones: Como operadores de buques, calculamos costos y utilidades de viaje para contratos de time charter",
                                    "Compra y venta de buques: Intervención activa en operaciones de compraventa de embarcaciones",
                                    "Confianza internacional: Presencia consolidada en plazas comerciales competitivas con clientes de primer nivel que renuevan su confianza año a año",
                                ],
                            },
                        ],
                    },
                    {
                        image: "/images/shipping/shipping-brokerage.jpg",
                    }, 
                    {
                        image: "/images/shipping/shipping-agenciaMaritima.jpg",
                    },
                    {
                        title: "Agencia Marítima",
                        description: "Como agentes marítimos y/o agentes protectores proveemos todos los servicios portuarios para atención de buques y cargas en los principales puertos argentinos.",
                        sections: [
                            {
                                title: "Nuestra capacidad de agencia marítima incluye:",
                                items: [
                                    "Atención a diversos tipos de buques: Bulk carriers, buques multipropósito, Roll-on/Roll-off (Ro/Ro), portacontenedores y buques pesqueros",
                                    "Gestión de múltiples tipos de carga: Graneles, productos agrícolas, productos siderúrgicos, fertilizantes, contenedores, carga de proyecto, vehículos y carga general",
                                    "Seguimiento permanente: Monitoreo continuo de operaciones portuarias cumpliendo con todos los requerimientos operativos y documentales de nuestros clientes",
                                    "Equipo especializado: Staff de profesionales con amplia experiencia y la infraestructura necesaria para asegurar operaciones portuarias eficientes",
                                    "Capacidad multilingüe: Personal bilingüe español/inglés, con conocimientos adicionales de italiano y portugués para comunicación con tripulaciones y armadores internacionales",
                                ],
                            },
                            {
                                title: "Servicios Ofrecidos en Puertos Argentinos",
                                items: [
                                    "Servicio de agencia",
                                    "Coordinación de servicio de prácticos y pilotos de puertos y canales",
                                    "Servicio de remolcadores y lanchas",
                                    "Atención a tripulación",
                                    "Provisión de víveres y provisiones",
                                    "Manejo y provisión de repuestos y reparaciones",
                                    "Atención y coordinación de drydock",
                                    "Bunkering",
                                    "Operaciones portuarias (carga/descarga)",
                                ],
                            },
                        ],
                    },

                ]}
            />
        </>
    );
}




