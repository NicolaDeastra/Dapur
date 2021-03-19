import {
  Heading,
  Text,
  Image,
  Stack,
  Center,
  HStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import Api from '@/lib/api'
import Layout from '@/Components/Layout'

export async function getServerSideProps({ params: { tag, endpoint } }) {
  const article = await Api.getDetailArticle(tag, endpoint)

  return {
    props: {
      article,
    },
  }
}

export default function article({ article: { results } }) {
  const router = useRouter()
  const { tag, endpoint } = router.query

  return (
    <Layout>
      <Head>
        <title>{results.title} | dapur</title>

        <meta name='title' content={`${results.title} | dapur`} />
        <meta name='description' content={results.content} />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://dapur.varcel.app/' />
        <meta property='og:title' content={`${results.title} | dapur`} />
        <meta property='og:description' content={results.content} />
        <meta property='og:image' content={results.thumb} />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://dapur.varcel.app/' />
        <meta property='twitter:title' content={`${results.title} | dapur`} />
        <meta property='twitter:description' content={results.content} />
        <meta property='twitter:image' content={results.thumb}></meta>
      </Head>
      <Stack px='16rem' my='8' spacing='8'>
        <HStack color='gray.600'>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href='#'>{tag}</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>{endpoint}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </HStack>
        <Heading size='lg' textAlign='center'>
          {results.title}
        </Heading>

        <Center>
          {results.thumb ? (
            <Image src={results.thumb} alt={results.title} />
          ) : null}
        </Center>
        <Center color='gray.600'>
          {results.author}
          {`  `}
          {results.date_published}
        </Center>
        <Stack spacing='4'>
          {results.content
            ? results.content.map((desc, index) => (
                <Text fontSize='md' key={index}>
                  {desc}
                </Text>
              ))
            : null}
        </Stack>
      </Stack>
    </Layout>
  )
}
