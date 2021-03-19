import * as React from 'react'
import { Heading, Text, Button, Stack, Img, Link, Flex } from '@chakra-ui/react'

import siteConfig from 'site-config'

const Hero = () => {
  return (
    <Flex
      h={['sm', 'md']}
      flexDirection={{ base: 'column', md: 'row' }}
      px={['4', '2rem']}
      py={['4rem', '6rem']}
      mb={{ base: 0, md: '8rem' }}
      justifyContent='space-between'
    >
      <Stack spacing={4} w={['xs', 'md']} pt={[0, '6']} mb={['6', 0]}>
        <Heading
          size={'lg'}
          mb='0.4rem'
          fontWeight='bold'
          textAlign={['center', 'left']}
        >
          {siteConfig.heading}
        </Heading>

        <Text
          fontSize={['sm', 'xl']}
          textAlign={['center', 'left']}
          color='gray.600'
          mb={['0.8rem', '0.4rem']}
        >
          {siteConfig.subHeading}
        </Text>
        <Stack direction='row' pl={['12', 0]}>
          <Button size='lg' variant='primary'>
            Recipe
          </Button>
          <Button size='lg' variant='secondary'>
            Article
          </Button>
        </Stack>
      </Stack>
      <Link
        display={['none', 'block']}
        href='https://unsplash.com/@howardbouchevereau?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
        isExternal
      >
        <Img src='header.jpg' w={['lg', 'xl']} alt='hero image' />
      </Link>
    </Flex>
  )
}

export default Hero
