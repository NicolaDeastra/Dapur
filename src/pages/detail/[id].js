import * as React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { SkeletonText, SkeletonCircle, Box } from '@chakra-ui/react'

import Api from '@/lib/api'

import Layout from '@/Components/Layout'
import MangaDetail from '@/Components/MangaDetai'

export default function Detail() {
  const [state, setState] = React.useState({ loading: true, manga: {} })

  console.log(state)
  const router = useRouter()
  const { id } = router.query

  React.useEffect(() => {
    async function fetch() {
      try {
        const manga = await Api.getMangaDetail(id)

        if (manga.title === '') {
          const manga = await Api.getMangaDetail(id)

          return setState({ loading: false, manga })
        }

        return setState({ loading: false, manga })
      } catch (err) {
        return err
      }
    }

    fetch()
  }, [id])

  return (
    <Layout>
      <Head>
        <title>{state.manga.title || 'Detail Manga'} - Mamang</title>
        <meta name='title' content={state.manga.title} />
        <meta name='description' content={state.manga.synopsis} />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://mamang.vercel.app/' />
        <meta property='og:title' content={`${state.manga.title} - Mamang`} />
        <meta property='og:description' content={state.manga.synopsis} />
        <meta property='og:image' content={state.manga.thumb} />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://mamang.vercel.app/' />
        <meta
          property='twitter:title'
          content={`${state.manga.title} - Mamang`}
        />
        <meta property='twitter:description' content={state.manga.synopsis} />
        <meta property='twitter:image' content={state.manga.thumb} />
      </Head>
      {state.loading === true ? (
        <Box padding='6' boxShadow='lg' bg='#F9F9F9 '>
          <SkeletonCircle size='10' />
          <SkeletonText mt='4' noOfLines={4} spacing='4' />
        </Box>
      ) : (
        <MangaDetail manga={state.manga} />
      )}
    </Layout>
  )
}
