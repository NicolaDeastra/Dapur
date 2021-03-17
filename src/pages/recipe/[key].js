import {
  Heading,
  Text,
  Image,
  Stack,
  Center,
  HStack,
  SimpleGrid,
} from '@chakra-ui/react'
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
        <Stack spacing='4'>
          {results.description.map((desc) => (
            <Text fontSize='md'>{desc}</Text>
          ))}
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
