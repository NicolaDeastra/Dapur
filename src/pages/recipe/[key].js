import { Heading, Text, Image, Stack, Center, Box } from '@chakra-ui/react'
import Head from 'next/head'

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
  return (
    <Layout>
      <Head>
        <title>{results.title} | dapur</title>
      </Head>
      <Stack px='16rem' my='8' spacing='8'>
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
        <Box>
          <Text color='gray.600' fontSize='md'>
            {results.desc}
          </Text>
        </Box>
      </Stack>
    </Layout>
  )
}
