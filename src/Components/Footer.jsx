import * as React from 'react'
import { VStack, Link, Flex, Heading, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

import siteConfig from 'site-config'

const Footer = () => {
  return (
    <Flex
      w='100%'
      justify='space-between'
      direction={['column-reverse', 'row']}
      align={['center', 'normal']}
      py={4}
      pr={['2rem', '4rem']}
      pl={['2rem', '5.2rem']}
    >
      <Flex
        justify='space-between'
        h={['5rem', '11rem']}
        flexGrow={1}
        direction='column'
        alignItems={['center', 'flex-start']}
      >
        <NextLink href='/'>
          <Link fontWeight='extrabold' fontSize='lg' variant='link'>
            {siteConfig.title}
          </Link>
        </NextLink>
        <Text> &copy; {siteConfig.footer.copyright}</Text>
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
              <Link p={0}>{text}</Link>
            </NextLink>
          ))}
        </VStack>
      ))}
    </Flex>
  )
}

export default Footer
