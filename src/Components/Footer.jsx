import * as React from 'react'
import {
  VStack,
  HStack,
  Link,
  Flex,
  Heading,
  Text,
  Icon,
} from '@chakra-ui/react'
import { GiCookingPot } from 'react-icons/gi'
import NextLink from 'next/link'

import siteConfig from 'site-config'

const Footer = () => {
  return (
    <Flex
      w='100%'
      justify='space-between'
      direction={['column-reverse', 'row']}
      align={['center', 'normal']}
      bg='footer.100'
      py={8}
      pr={['1rem', '2rem']}
      pl={['1rem', '2rem']}
    >
      <Flex
        justify='space-between'
        h={['5rem', '11rem']}
        flexGrow={1}
        direction='column'
        alignItems={['center', 'flex-start']}
      >
        <NextLink href='/'>
          <Link fontWeight='extrabold' fontSize='xl' variant='link'>
            <HStack>
              <Icon as={GiCookingPot} w={8} h={8} color='primary.600' />
              <Link fontWeight='extrabold' fontSize='xl' variant='link'>
                {siteConfig.title}
              </Link>
            </HStack>
          </Link>
        </NextLink>
        <Text color='gray.600'> &copy; {siteConfig.footer.copyright}</Text>
      </Flex>

      {siteConfig.footer.rotes.map((route) => (
        <VStack
          key={route.heading}
          align='left'
          flexGrow={1}
          direction='column'
          mb={['4rem', 0]}
          alignItems={['center', 'flex-start']}
        >
          <Heading fontSize='lg'>{route.heading}</Heading>
          {route.routes.map(([text, href]) => (
            <NextLink key={text} href={href}>
              <Link p={0} color='gray.600'>
                {text}
              </Link>
            </NextLink>
          ))}
        </VStack>
      ))}
    </Flex>
  )
}

export default Footer
