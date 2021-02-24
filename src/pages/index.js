import { Heading } from '@chakra-ui/react'

import Layout from '@/Components/Layout'
import Hero from '@/Components/Hero'
import LatestManga from '@/Components/LatestManga'

import Api from '@/lib/api'

export async function getStaticProps(context) {
  const manga = await Api.getLatestManga()
  return {
    props: {
      manga,
    },
  }
}

export default function Home({ manga }) {
  return (
    <Layout>
      <Heading>
        <title>
          Mamang - Free open source website provides manga in Bahasa
        </title>
      </Heading>
      <Hero />
      <LatestManga LatestManga={manga} />
    </Layout>
  )
}
