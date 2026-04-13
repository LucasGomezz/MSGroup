import BloqueWithCompleto from "./BloqueWithCompleto";

export default function ContentService() {
  return (
    <section className="w-full">
      <BloqueWithCompleto 
        title={"Desde 1990 conectando mercados"} 
        description={`MS Trading es la división de comercio exterior de MS Group, especializada en la intermediación comercial y el asesoramiento estratégico.\n
Combinamos el conocimiento profundo de los mercados globales con la capacidad logística integrada del grupo, ofreciendo soluciones que van desde la identificación de oportunidades hasta la entrega final.`} 
        titleColor="text-tradingPrincipal" 
        descriptionColor="text-black"
      />

      <div className="grid md:grid-cols-2">

        <div className="bg-tradingSecundario text-white px-10 md:px-20 py-20 flex flex-col justify-center">
          
          <h3 className="text-3xl md:text-4xl font-semibold text-tradingComplementario">
            Trading Internacional
          </h3>

          <div className="w-16 h-1 bg-tradingComplementario mt-4 rounded-full" />

          <p className="mt-6 text-lg md:text-xl text-black leading-relaxed">
            Actuamos como intermediarios comerciales conectando productores, exportadores e importadores en diferentes mercados del mundo.
          </p>

          <p className="mt-4 text-lg md:text-xl text-black leading-relaxed">
            Especial expertise en productos originarios de Argentina y Latinoamérica para el mercado global.
          </p>

        </div>

        <div className="bg-tradingComplementario text-black px-10 md:px-20 py-20 flex flex-col justify-center">
          
          <h3 className="text-3xl md:text-4xl font-semibold text-tradingPrincipal">
            Brokerage Comercial
          </h3>

          <div className="w-16 h-1 bg-tradingPrincipal mt-4 rounded-full" />

          <ul className="mt-8 space-y-3 text-lg md:text-xl">
            {[
              "Identificación de compradores potenciales",
              "Negociación de Incoterms y volúmenes",
              "Estructuración de contratos internacionales",
              "Seguimiento del cumplimiento contractual",
              "Resolución de contingencias comerciales",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-tradingPrincipal mt-1">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

        </div>

      </div>

      <div className="relative bg-[#f5f5f5] py-28 px-6">

        <div className="max-w-5xl mx-auto">

          <h3 className="text-tradingPrincipal text-3xl md:text-4xl font-semibold">
            Consultoría en Comercio Exterior
          </h3>

          <div className="w-16 h-1 bg-tradingPrincipal mt-4 rounded-full" />

          <p className="mt-6 text-lg md:text-xl text-black leading-relaxed">
            Brindamos asesoramiento integral a empresas que desean iniciar o expandir sus operaciones de exportación e importación.
          </p>

          <p className="mt-4 text-lg md:text-xl text-black leading-relaxed">
            Cubrimos desde los aspectos regulatorios críticos hasta el diseño de estrategias de penetración en nuevos mercados internacionales de alta competitividad.
          </p>

        </div>

        <div className="hidden md:block absolute bottom-10 right-10 w-40 h-40 border-b-4 border-r-4 border-tradingPrincipal opacity-70" />

      </div>

    </section>
  );
}