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
        <title>{state.manga.title || 'Detail Manga'} - mamang</title>
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
