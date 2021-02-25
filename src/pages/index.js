import { Heading } from '@chakra-ui/react'

import Layout from '@/Components/Layout'
import Hero from '@/Components/Hero'
import MangaGrid from '@/Components/MangaGrid'

import Api from '@/lib/api'

export async function getStaticProps(context) {
  const latestManga = await Api.getLatestManga()
  const popularManga = await Api.getPopularManga()
  return {
    props: {
      latestManga,
      popularManga,
    },
  }
}

export default function Home({ latestManga, popularManga }) {
  return (
    <Layout>
      <Heading>
        <title>
          Mamang - Free open source website provides manga in Bahasa
        </title>
      </Heading>
      <Hero />
      <MangaGrid type='Popular Manga' comics={popularManga} />
      <MangaGrid type='Latest Manga' comics={latestManga} />
    </Layout>
  )
}
