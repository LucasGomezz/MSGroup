import BloqueWithCompleto from "@/compononents/BloqueWithCompleto";
import CardsServicios from "@/compononents/CardsServicios";
import TransporteContent from "@/compononents/TransporteContent";


export default function MSFowarding() {
    return (
        <>
            <BloqueWithCompleto title={"Con más de 30 años en el mercado"} 
            description={`MS Forwarding ofrece soluciones integrales de transporte internacional con un enfoque personalizado que prioriza la eficiencia operativa y la transparencia en cada etapa del proceso logístico.\n
                Como agentes de carga internacional especializados, coordinamos el movimiento de mercaderías por vía aérea, marítima y terrestre, brindando a nuestros clientes visibilidad completa de sus envíos y respuesta ágil ante cualquier requerimiento.`} 
            titleColor="text-fowardingPrincipal"/>
            <TransporteContent />
            <CardsServicios/>
        </>
    );
}