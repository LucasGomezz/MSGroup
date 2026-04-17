import { ReactNode } from "react"

type Props = {
  title: string
  subTitle?: string
  description: string
  points?: string[]
  icon?: ReactNode
}

export default function ServiceCard({ title, subTitle, description, icon, points }: Props) {

  return (
    <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col h-full">

      <div className="text-navy text-center flex justify-center">
        {icon}
      </div>

      <h3 className="text-xl font-bold py-3 text-navy">
        {title}
      </h3>

      <h2 className="text-xl font-bold py-3 text-navy">
        {subTitle}
      </h2>

      <p className="text-gray-600 mb-6">
        {description}
      </p>

      {points && (
        <ul className="text-gray-600 text-sm mb-6 space-y-1">
          {points.map((point, i) => (
            <li key={i}>• {point}</li>
          ))}
        </ul>
      )}

      <button className="bg-navy text-white px-4 py-2 rounded mt-auto">
        Leer más
      </button>

    </div>
  )
}