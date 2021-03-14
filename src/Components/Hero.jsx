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
      <VStack spacing={6} px={['0.4rem', '6rem']}>
        <Heading size='2xl' mb='0.4rem' textAlign='center'>
          {siteConfig.heading}
        </Heading>

        <Text fontSize={['lg', 'xl']} textAlign='center' color='secondary.600'>
          {siteConfig.subHeading}
        </Text>
        <Button size='lg' ml={['4.5rem', '0']} mt='45px' variant='primary'>
          Get Started
        </Button>
      </VStack>
    </Center>
  )
}

export default Hero
