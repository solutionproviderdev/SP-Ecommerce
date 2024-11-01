import React, { useState } from 'react'
import { ArrowRight } from "lucide-react"
import { Link } from 'react-router-dom'

interface Item {
  image?: string
  title?: string
  description?: string
}

interface HomeCardProps {
  items?: Item[]
  title?: string
  onViewAll?: () => void
}

export default function Component({ items = [], title, onViewAll }: HomeCardProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-6 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="mx-auto text-2xl font-semibold text-gray-800">
          <span className="inline-block">{title ? title : 'no title'}</span>
        </h2>
        <button
          onClick={onViewAll}
          className="flex items-center rounded py-1 px-2 text-blue-400 hover:text-blue-500 transition-colors duration-300"
        >
          View All <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {items.map((item, index) => (
        
          <Link
            to="/3"
            key={index}
            className={`relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group ${hoveredIndex === index ? 'bg-blue-50' : 'bg-white'}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={`z-50 absolute inset-0 bg-blue-300 bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
              <span className={`text-blue-600 text-lg font-semibold transform ${hoveredIndex === index ? 'scale-100' : 'scale-0'} transition-transform duration-300 ease-out`}>
                Click Here
              </span>
            </div>
            {item?.image && (
              <img
                src={item.image}
                alt={item?.title || "Image"}
                className="w-full h-28 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            )}
            <div className="p-2 text-center">
              {item?.title && (
                <h3 className="text-lg text-gray-800 font-medium">{item?.title}</h3>
              )}
              {item?.description && (
                <p className="text-sm text-gray-500 mt-1">{item?.description}</p>
              )}
            </div>
          </Link>

        ))}
      </div>
    </section>
  )
}