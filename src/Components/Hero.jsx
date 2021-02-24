import * as React from 'react'
import { Heading, Text, VStack, Button, Center } from '@chakra-ui/react'

import siteConfig from 'site-config'

const Hero = () => {
  return (
    <Center
      h='md'
      pt={['0rem', '4rem']}
      align='center'
      flexDirection={{ base: 'column', md: 'row' }}
      mb={{ base: 20, md: '8rem' }}
    >
      <VStack spacing={6} px={['2rem', '10rem']}>
        <Heading size='3xl' mb='1.4rem' textAlign='center'>
          {siteConfig.heading}
        </Heading>
        <Text fontSize={{ base: 'sm', md: 'md' }} textAlign='center'>
          {siteConfig.subHeading}
        </Text>
        <Button size='lg' ml={['4.5rem', '0']} mt='30px' variant='primary'>
          Get Started
        </Button>
      </VStack>
    </Center>
  )
}

export default Hero
