import * as React from 'react'
import { HStack, Link, Divider, useMediaQuery } from '@chakra-ui/react'
import NextLink from 'next/link'

import routes from '@/routes'
import siteConfig from 'site-config'

const Nav = () => {
  const [isDestop] = useMediaQuery('(min-width: 960px)')

  return (
    <>
      <HStack py={4} pr={['2rem', '6.8rem']} pl={['2rem', '6rem']} spacing={12}>
        <HStack fontSize='md' flexGrow={1}>
          <NextLink href='/'>
            <Link fontWeight='extrabold' fontSize='lg' variant='link'>
              {siteConfig.title}
            </Link>
          </NextLink>
        </HStack>

        <HStack fontSize='md' justify='flex-end'>
          {routes.map(([text, href]) => (
            <NextLink key={text} href={href}>
              <Link p={4}>{text}</Link>
            </NextLink>
          ))}
        </HStack>
      </HStack>
      <Divider />
    </>
  )
}

export default Nav
