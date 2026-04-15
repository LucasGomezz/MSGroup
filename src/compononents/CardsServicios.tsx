import Image from "next/image";

export default function CardsServicios() {
    const services = [
        { title: "Servicios Multimodales", description: "Diseñamos soluciones logísticas que combinan diferentes modos de transporte (marítimo + terrestre, aéreo + terrestre) para optimizar tiempos y costos según las características de cada operación. Nuestra experiencia como operadores multimodales nos permite coordinar eficientemente cada tramo del trayecto, minimizando tiempos de espera y asegurando la trazabilidad completa del envío.", items: [], },
        { title: "Cargas de Proyecto", description: "Contamos con expertise especializado en el manejo de cargas sobredimensionadas, equipamiento industrial y proyectos que requieren coordinación logística compleja.", items: ["Evaluación técnica de factibilidad", "Planificación de rutas especiales", "Coordinación de permisos y autorizaciones", "Equipamiento especializado (flat racks, break bulk)", "Seguros específicos para cargas de alto valor"], },
        { title: "Depósito Fiscal y Logística", description: "Ofrecemos servicios de almacenaje en depósito fiscal para mercaderías de importación y exportación, permitiendo la optimización de tiempos y gestión de inventarios.", items: ["Almacenaje en depósito fiscal habilitado por aduana", "Gestión de stock y control de inventario", "Fraccionamiento y reembalaje", "Preparación de pedidos (picking & packing)", "Distribución desde depósito"], },
        { title: "Despacho Aduanero", description: "Trabajamos con una red de despachantes de aduana altamente calificados que gestionan todos los trámites de importación y exportación ante AFIP, SENASA, ANMAT y demás organismos de control.", items: ["Asesoramiento integral en materia aduanera", "Gestión aduanera en diferentes aduanas del pais", "Clasificación arancelaria de mercaderías", "Verificación de documentación comercial", "Tramitación de licencias", "Gestión de permisos especiales (SENASA, ANMAT, otros)", "Representación ante autoridades aduaneras"], },
        {
            type: "vignette",
            image: "/images/fowarding/vignetteAtardecer.jpg", // Reemplaza con tu imagen marítima
        },
        { title: "Seguros de Carga", description: "Coordinamos la contratación de seguros de transporte internacional adaptados al valor y características de cada mercadería, con cobertura desde origen hasta destino final.", items: ["Seguros específicos de transporte según el tipo de mercadería", "Tramitación de siniestros"], }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-6">

                {/* Encabezado Directo y Sobrio */}
                <div className="border-l-[12px] border-fowardingPrincipal pl-8 mb-16">
                    <h2 className="text-6xl font-black text-fowardingPrincipal uppercase tracking-tighter">
                        Servicios <br /> <span className="text-gray-300">Portuarios</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-gray-100">
                    {services.map((service, i) => {

                        if (service.type === "vignette") {
                            return (
                                <div key={i} className="relative group h-[400px] md:h-auto overflow-hidden border-b border-gray-100 md:border-b-0">
                                    <Image
                                        src={service.image}
                                        alt="Operación Marítima"
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                                    />
                                    {/* Overlay sutil inicial que desaparece en hover */}
                                    <div className="absolute inset-0 bg-fowardingPrincipal/5 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                            );
                        }

                        return (
                            <div
                                key={i}
                                className="group bg-white border-b border-gray-100 p-12 flex flex-col justify-between hover:bg-fowardingPrincipal transition-all duration-300 ease-in-out min-h-[400px]"
                            >
                                <div>
                                    {/* Indicador de número estilo señalética - Color Complementario */}
                                    <span className="text-[--fowardingComplementario] font-mono font-bold text-sm tracking-[0.3em] uppercase block mb-6 transition-colors duration-300 group-hover:text-[--fowardingSecundario]">
                                        Sector_0{i + 1}
                                    </span>

                                    <h3 className="text-3xl font-bold text-fowardingPrincipal group-hover:text-white leading-none uppercase mb-6 transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 group-hover:text-white text-lg leading-snug transition-colors duration-300 font-light">
                                        {service.description}
                                    </p>
                                </div>

                                {service.items && service.items.length > 0 && (
                                    <div className="mt-8 pt-8 border-t border-gray-100 group-hover:border-white/20 transition-colors duration-300">
                                        <ul className="grid grid-cols-1 gap-3">
                                            {service.items.map((item, idx) => (
                                                <li key={idx} className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors duration-300 flex items-center gap-3">
                                                    {/* Línea de acento naranja que se mantiene */}
                                                    <div className="w-5 h-[2px] bg-[--fowardingComplementario] flex-none" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}