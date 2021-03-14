import Head from 'next/head'

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
    revalidate: 300,
  }
}

export default function Home({ latestManga, popularManga }) {
  return (
    <Layout>
      <Head>
        <title>
          Free open source website provides manga in Bahasa - Mamang
        </title>
        <meta
          name='title'
          content='Free open source website provides manga in Bahasa - Mamang'
        />
        <meta
          name='description'
          content='Free open source website provides manga in Bahasa'
        />
      </Head>
      <Hero />
      <MangaGrid type='Popular Manga' comics={popularManga} />
      <MangaGrid type='Latest Manga' comics={latestManga} />
    </Layout>
  )
}
