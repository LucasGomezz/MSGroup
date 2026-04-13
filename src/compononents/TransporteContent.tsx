import { ServiceBlock } from "./ServiceBlock";

export default function TransporteContent() {
    return (
        <section>
            <ServiceBlock
                title="Transporte Marítimo Internacional"
                description={`Gestionamos fletes marítimos FCL (contenedor completo) y LCL (consolidado) hacia y desde cualquier puerto del mundo, con especial expertise en tráficos desde y hacia Latinoamérica. 
                Mantenemos acuerdos comerciales directos con las principales navieras internacionales, lo que nos permite ofrecer opciones competitivas de tarifas y tiempos de tránsito para cada necesidad específica.
                \n Nuestra experiencia incluye:`}
                items={[
                    "Contenedores secos (20', 40', 40'HC)",
                    "Contenedores refrigerados (reefer) para productos perecederos",
                    "Flat racks y open tops para cargas especiales",
                    "Consolidación LCL para optimización de costos en cargas parciales"
                ]}
                image="/images/shipping/shippingg.png"
            />

            <ServiceBlock
                title="Transporte Aéreo Internacional"
                description={`Coordinamos embarques aéreos para cargas que requieren tiempos de tránsito reducidos, productos de alto valor o mercaderías sensibles al tiempo.
                Nuestras relaciones comerciales con las principales aerolíneas de carga nos permiten garantizar espacios disponibles incluso en temporadas de alta demanda.
                \n Capacidades:`}
                items={[
                    "Coordinación de vuelos directos y conexiones optimizadas",
                    "Manejo de cargas consolidadas y envíos directos",
                    "Atención especializada para productos perecederos con temperatura controlada",
                    "Gestión de cargas peligrosas con certificación IATA",
                    "Seguimiento en tiempo real desde origen hasta destino",
                ]}
                image="/images/shipping/transporteAereo.png"
                reverse
            />

            <ServiceBlock
                title="Transporte Terrestre"
                description="Proveemos servicios de transporte terrestre door-to-door dentro de Argentina y hacia países limítrofes (Uruguay, Paraguay, Chile, Brasil), coordinando el movimiento de carga desde el punto de origen hasta la entrega final.
                Soluciones terrestres:"
                items={[
                    "Transporte de carga completa (FTL)",
                    "Transporte de carga consolidada (LTL)",
                    "Vehículos especializados según tipo de mercadería",
                    "Seguimiento GPS en tiempo real",
                    "Cobertura de seguros específicos"
                ]}
                image="/images/shipping/transporteTerrestre.jpg"
            />
        </section>
    )
}