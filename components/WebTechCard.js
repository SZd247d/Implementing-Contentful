import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function WebTechCard({ webTech }) {
  const { title, slug, thumbnail, featuredImage, features, description } =
    webTech.fields

  return (
    <div className="bg-gray-500">
      <div className="relative h-64 shadow-lg">
        <Image
          layout="fill"
          objectFit="contain"
          src={`https://${thumbnail.fields.file.url}`}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>

      <div className="-mt-3 mr-2 -rotate-1 bg-slate-400 p-3">
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <h4 className="text-sm text-gray-700">{features}</h4>
          <div className=" mt-4 inline bg-red-700 p-2 text-white">
            <Link href={'/webTechs/' + slug}>
              <button>Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebTechCard
