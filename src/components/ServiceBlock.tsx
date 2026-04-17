import Image from "next/image"

type ServiceBlockProps = {
  title: string
  description: string
  items?: string[]
  image: string
  reverse?: boolean
}

export function ServiceBlock({
  title,
  description,
  items,
  image,
  reverse = false,
}: ServiceBlockProps) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className={`${reverse ? "md:order-2" : "md:order-1"}`}>
          <h2 className="text-3xl font-bold text-fowardingPrincipal">
            {title}
          </h2>

          <p className="mt-6 whitespace-pre-line text-xl">
            {description}
          </p>

          {items && (
            <ul className="mt-6 space-y-2 text-lg">
              {items.map((item, i) => (
                <li key={i}>→ {item}</li>
              ))}
            </ul>
          )}
        </div>

        <div className={`${reverse ? "md:order-1" : "md:order-2"} relative h-100`}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-xl"
          />
        </div>

      </div>
    </section>
  )
}