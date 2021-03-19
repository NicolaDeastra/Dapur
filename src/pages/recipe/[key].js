import {
  Heading,
  Text,
  Image,
  Stack,
  Center,
  HStack,
  SimpleGrid,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Api from '@/lib/api'
import Layout from '@/Components/Layout'
import IconMasak from '@/Components/IconMasak'

export async function getServerSideProps({ params: { key } }) {
  const recipe = await Api.getDetailRecipe(key)
  return {
    props: {
      recipe,
    },
  }
}

export default function Recipe({ recipe: { results } }) {
  const router = useRouter()
  const { key } = router.query

  return (
    <Layout>
      <Head>
        <title>{results.title} | dapur</title>

        <meta name='title' content={`${results.title} | dapur`} />
        <meta name='description' content={results.description[0]} />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://dapur.varcel.app/' />
        <meta property='og:title' content={`${results.title} | dapur`} />
        <meta property='og:description' content={results.description[0]} />
        <meta property='og:image' content={results.thumb} />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://dapur.varcel.app/' />
        <meta property='twitter:title' content={`${results.title} | dapur`} />
        <meta property='twitter:description' content={results.description[0]} />
        <meta property='twitter:image' content={results.thumb}></meta>
      </Head>
      <Stack px={['2', '16rem']} my='8' spacing='8'>
        <HStack color='gray.600'>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href='#'>Recipe</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>{key}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </HStack>
        <Heading size='lg' textAlign='center'>
          {results.title}
        </Heading>
        <Center>
          <IconMasak
            times={results.times}
            portion={results.servings}
            dificulty={results.dificulty}
          />
        </Center>
        <Center>
          {results.thumb ? (
            <Image src={results.thumb} alt={results.title} />
          ) : null}
        </Center>
        <Center color='gray.600'>
          {results.author.user} {`  `}
          {results.author.datePublished}
        </Center>
        <Stack spacing='4'>
          {results.description
            ? results.description.map((desc) => (
                <Text fontSize='md'>{desc}</Text>
              ))
            : null}
        </Stack>
        <Center>
          <Heading size='md'>Bahan-bahan</Heading>
        </Center>
        <Stack spacing='4'>
          <SimpleGrid columns={2} spacing='8'>
            {results.ingredient.map((s, index) => {
              let step = s.split(' ')
              let number = step[0]
              let text = step.slice(1).join(' ').toString()

              return (
                <HStack spacing='3' key={index}>
                  <Heading size='md' color='primary.600'>
                    {number}
                  </Heading>
                  <Text>{text}</Text>
                </HStack>
              )
            })}
          </SimpleGrid>
        </Stack>
        <Center>
          <Heading size='md'>Cara Membuat</Heading>
        </Center>
        <Stack spacing='4'>
          {results.step.map((s, index) => {
            let step = s.split(' ')
            let number = step[0]
            let text = step.slice(1).join(' ').toString()

            return (
              <HStack spacing='3' key={index}>
                <Heading size='md' color='primary.600'>
                  {number}
                </Heading>
                <Text>{text}</Text>
              </HStack>
            )
          })}
        </Stack>
      </Stack>
    </Layout>
  )
}
