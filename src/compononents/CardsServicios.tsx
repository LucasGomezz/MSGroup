import Image from "next/image"

export default function CardsServicios() {
    const services = [

        { title: "Servicios Multimodales", description: "Diseñamos soluciones logísticas que combinan diferentes modos de transporte (marítimo + terrestre, aéreo + terrestre) para optimizar tiempos y costos según las características de cada operación. Nuestra experiencia como operadores multimodales nos permite coordinar eficientemente cada tramo del trayecto, minimizando tiempos de espera y asegurando la trazabilidad completa del envío.", items: [], },
        { title: "Despacho Aduanero", description: "Trabajamos con una red de despachantes de aduana altamente calificados que gestionan todos los trámites de importación y exportación ante AFIP, SENASA, ANMAT y demás organismos de control. Gestión aduanera integral:", items: ["Clasificación arancelaria de mercaderías", "Tramitación de licencias automáticas y no automáticas", "Gestión de permisos especiales (SENASA, ANMAT, otros)", "Verificación de documentación comercial", "Representación ante autoridades aduaneras",], },
        { title: "Cargas de Proyecto", description: "Contamos con expertise especializado en el manejo de cargas sobredimensionadas, equipamiento industrial y proyectos que requieren coordinación logística compleja. Servicios incluidos:", items: ["Evaluación técnica de factibilidad", "Planificación de rutas especiales", "Coordinación de permisos y autorizaciones", "Equipamiento especializado (flat racks, break bulk)", "Seguros específicos para cargas de alto valor",], },
        { title: "Seguros de Carga", description: "Coordinamos la contratación de seguros de transporte internacional adaptados al valor y características de cada mercadería, con cobertura desde origen hasta destino final. Opciones de cobertura:", items: ["Seguro básico (cobertura limitada)", "Cobertura todo riesgo", "Seguros específicos según tipo de mercadería", "Tramitación de siniestros"], },
        {
            type: "vignette",
            image: "/images/fowarding/vignetteAtardecer.jpg",
        },
        { title: "Depósito Fiscal y Logística", description: "Ofrecemos servicios de almacenaje en depósito fiscal para mercaderías de importación y exportación, permitiendo la optimización de tiempos y gestión de inventarios. Capacidades de depósito:", items: ["Almacenaje en depósito fiscal habilitado por AFIP", "Gestión de stock y control de inventario", "Fraccionamiento y reembalaje", "Preparación de pedidos (picking & packing)", "Distribución desde depósito"], }
    ]

    return (
        <section className="py-28 bg-[#f5f5f5]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">

                {services.map((service, i) => {

                    if (service.type === "vignette") {
                        return (
                            <div
                                key={i}
                                className="relative rounded-2xl overflow-hidden min-h-87.5"
                            >
                                <Image
                                    src={service.image}
                                    alt="global logistics"
                                    fill
                                    className="object-cover"
                                />

                                <div className="absolute inset-0 bg-linear-to-br from-navy/80 to-transparent" />

                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="text-lg font-medium">
                                        Conectando mercados globales
                                    </p>
                                </div>
                            </div>
                        )
                    }

                    return (
                        <div
                            key={i}
                            className="bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                        >

                            <h3 className="text-2xl md:text-3xl font-semibold text-fowardingPrincipal leading-tight">
                                {service.title}
                            </h3>

                            <p className="mt-5 leading-relaxed grow text-lg">
                                {service.description}
                            </p>

                            {(service.items && service.items.length > 0) && (
                                <ul className="mt-6 space-y-3">
                                    {service.items.map((item: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="text-fowardingPrincipal mt-1">→</span>
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                        </div>
                    )
                })}

            </div>
        </section>
    )
}