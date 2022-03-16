import { createClient } from 'contentful'
import Image from 'next/image'
import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

function webTechDetails({ webTech }) {
  const { title, slug, thumbnail, featuredImage, features, description } =
    webTech.fields

  console.log(features)
  return (
    <div>
      <Image
        objectFit="contain"
        src={`https://${featuredImage.fields.file.url}`}
        width={featuredImage.fields.file.details.image.width}
        height={featuredImage.fields.file.details.image.height}
      />

      <h2 className="text-xl">{title} </h2>
      <div>
        <h3>Features Of {title}: </h3>
        {features.map((feature) => (
          <span key={feature}>{feature} </span>
        ))}
      </div>

      <div>
        <h3>{documentToReactComponents(description)}</h3>
      </div>
    </div>
  )
}

export default webTechDetails

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'webTechnologies',
  })

  const paths = res.items.map((item) => {
    return { params: { slug: item.fields.slug } }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (ctx) => {
  const { items } = await client.getEntries({
    content_type: 'webTechnologies',
    'fields.slug': ctx.params.slug,
  })

  return {
    props: {
      webTech: items[0],
    },
    revalidate: 1,
  }
}
