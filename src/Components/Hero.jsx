import * as React from 'react'
import { Heading, Text, Button, Stack, Img, Link, Flex } from '@chakra-ui/react'

import siteConfig from 'site-config'

const Hero = () => {
  return (
    <Flex
      h='md'
      flexDirection={{ base: 'column', md: 'row' }}
      px='2rem'
      py='6rem'
      mb={{ base: 20, md: '8rem' }}
      justifyContent='space-between'
    >
      <Stack spacing={4} w='md' pt='6'>
        <Heading size='xl' mb='0.4rem' fontWeight='bold'>
          {siteConfig.heading}
        </Heading>

        <Text fontSize={['md', 'xl']} color='gray.600'>
          {siteConfig.subHeading}
        </Text>
        <Stack direction='row'>
          <Button size='lg' variant='primary'>
            Get Started
          </Button>
          <Button size='lg' variant='secondary'>
            Get Started
          </Button>
        </Stack>
      </Stack>
      <Link
        href='https://unsplash.com/@howardbouchevereau?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
        isExternal
      >
        <Img src='header.jpg' w='xl' />
      </Link>
    </Flex>
  )
}

export default Hero
