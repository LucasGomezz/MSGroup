import React from 'react';

// --- Animación inline ---
const slowZoomStyle = `
@keyframes slowZoom {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
}
`;

// --- Interfaces ---
interface ServiceItem {
    title: string;
    description: string;
    items: string[];
    descriptionn: string;
    image: string;
    icon: React.ReactNode;
    tag: string;
}

// --- Iconos SVG ---
const IconShip = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        <path d="M19.38 20.51a11.5 11.5 0 0 0-14.76 0" />
        <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
        <path d="M12 12v9" />
        <path d="M12 7v5" />
        <path d="M5 12h14" />
    </svg>
);

const IconPlane = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
);

const IconTruck = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 17h4V5H2v12h3m10 0h2l4 4h-8v-4z" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
    </svg>
);

const ServiceCard = ({ service, index }: { service: ServiceItem; index: number }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center py-20 relative overflow-hidden`}>
            
            {/* Contenido */}
            <div className="flex-1 z-10 space-y-8">
                <div className="space-y-4">
                    <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
                        {service.tag}
                    </span>

                    <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tighter">
                        {service.title}
                    </h2>

                    <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
                        {service.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                            <div className="text-blue-500">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <span className="text-sm font-semibold text-slate-700">{item}</span>
                        </div>
                    ))}
                </div>

                <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
                    {service.descriptionn}
                </p>
            </div>

            {/* Imagen */}
            <div className="flex-1 relative w-full">
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border-[8px] border-white shadow-2xl">
                    
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        style={{
                            animation: `slowZoom ${12 + index * 2}s ease-in-out infinite`
                        }}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-40"></div>

                    {/* Icono */}
                    <div className="absolute top-6 right-6 w-16 h-16 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-blue-600 shadow-xl border border-white/20">
                        {service.icon}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function TransporteContent() {
    const services: ServiceItem[] = [
        {
            tag: "Ocean Freight",
            title: "Transporte Marítimo Internacional",
            description: "Gestionamos fletes marítimos FCL (contenedor completo) y LCL (consolidado) hacia y desde cualquier puerto del mundo.",
            items: [
                "Contenedores secos (20', 40', 40'HC)",
                "Contenedores refrigerados (reefer) para productos perecederos",
                "Flat racks y open tops para cargas especiales",
                "Consolidación LCL para optimización de costos en cargas parciales"
            ],
            descriptionn: "Mantenemos acuerdos comerciales directos con las principales navieras internacionales, lo que nos permite ofrecer opciones competitivas de tarifas y tiempos de tránsito para cada necesidad específica.",
            image: "/images/fowarding/fowarding.png",
            icon: <IconShip />
        },
        {
            tag: "Air Solutions",
            title: "Transporte Aéreo Internacional",
            description: "Coordinamos embarques aéreos para cargas que requieren tiempos de tránsito reducidos, productos de alto valor o mercaderías sensibles al tiempo.",
            items: [
                "Coordinación de vuelos directos y conexiones optimizadas",
                "Manejo de cargas consolidadas y envíos directos",
                "Atención especializada para productos perecederos con temperatura controlada",
                "Gestión de cargas peligrosas con certificación IATA",
                "Seguimiento en tiempo real desde origen hasta destino"
            ],
            descriptionn: "Nuestras relaciones comerciales con las principales aerolíneas de carga nos permiten garantizar espacios disponibles incluso en temporadas de alta demanda.",
            image: "/images/fowarding/transporteAereo.png",
            icon: <IconPlane />
        },
        {
            tag: "Land Network",
            title: "Transporte Terrestre",
            description: "Proveemos servicios de transporte terrestre door-to-door dentro de Argentina y hacia países limítrofes (Uruguay, Paraguay, Chile, Brasil, Peru), coordinando el movimiento de carga desde el punto de origen hasta la entrega final.",
            items: [
                "Transporte de carga completa (FTL)",
                "Transporte de carga consolidada (LTL)",
                "Vehículos especializados según tipo de mercadería",
                "Seguimiento GPS en tiempo real",
                "Cobertura de seguros específicos"
            ],
            descriptionn: "",
            image: "/images/fowarding/transporteTerrestre.jpg",
            icon: <IconTruck />
        }
    ];

    return (
        <section className="bg-white overflow-hidden">
            
            {/* Inyección de animación */}
            <style>{slowZoomStyle}</style>

            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <div className="pt-24 pb-12 text-center lg:text-left">
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9]">
                        Soluciones de <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                            Transporte Inteligente.
                        </span>
                    </h1>
                </div>

                <div className="divide-y divide-slate-100">
                    {services.map((service, idx) => (
                        <ServiceCard key={idx} service={service} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}