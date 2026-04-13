import Image from "next/image"

type Section = {
  title?: string
  items: string[]
}

type Item = {
  title?: string
  description?: string
  sections?: Section[]
  image?: string
}

type SplitGridProps = {
  data: Item[]
}

export default function SplitGrid({ data }: SplitGridProps) {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2">

      {data.map((item, i) => (
        <div
          key={i}
          className="relative flex items-center justify-center p-10 min-h-75"
        >
          {item.image && (
            <Image
              src={item.image}
              alt="image"
              fill
              className="object-cover"
            />
          )}

          {!item.image && (
            <div className="z-10 px-10">
              {item.title && (
                <h3 className="text-3xl font-bold text-shippingPrincipal">
                  {item.title}
                </h3>
              )}
              {item.description && (
                <p className="mt-4  text-lg leading-relaxed">
                  {item.description}
                </p>
              )}
              {item.sections && (
                <div className="mt-6 space-y-6">

                  {item.sections.map((section, idx) => (
                    <div key={idx}>

                      <h4 className="font-semibold text-shippingPrincipal border-l-2 border-shippingPrincipal pl-3 text-2xl">
                        {section.title}
                      </h4>

                      <ul className="mt-2 space-y-1 text-md ">
                        {section.items.map((el, i) => (
                          <li key={i}>→ {el}</li>
                        ))}
                      </ul>

                    </div>
                  ))}

                </div>
              )}

            </div>
          )}

        </div>
      ))}

    </section>
  )
}