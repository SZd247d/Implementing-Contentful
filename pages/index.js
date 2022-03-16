import Head from 'next/head'
import { createClient } from 'contentful'
import WebTechCard from '../components/WebTechCard'

const Home = ({ webTechs }) => {
  console.log(webTechs)

  return (
    <div className="bg-gray-500 ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto grid gap-y-5 gap-x-12 md:grid-cols-2">
        {webTechs.map((webTech) => (
          <WebTechCard key={webTech.sys.id} webTech={webTech} />
        ))}
      </div>
    </div>
  )
}

export default Home

export const getStaticProps = async (ctx) => {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  })

  const res = await client.getEntries({
    content_type: 'webTechnologies',
  })

  return {
    props: {
      webTechs: res.items,
    },
  }
}
