import * as React from 'react'
import { HStack, Link, Divider, useMediaQuery } from '@chakra-ui/react'
import NextLink from 'next/link'
import { GiMustache } from 'react-icons/gi'

import routes from '@/routes'
import siteConfig from 'site-config'

const Nav = () => {
  const [isDestop] = useMediaQuery('(min-width: 960px)')

  return (
    <>
      <HStack py={4} pr={['1rem', '6.8rem']} pl={['1rem', '6rem']} spacing={12}>
        <HStack fontSize='md' flexGrow={1}>
          <NextLink href='/'>
            <Link fontWeight='extrabold' fontSize='xl' variant='link'>
              <HStack>
                <GiMustache size='1.5em' color='#30a0e8' />
                <Link fontWeight='extrabold' fontSize='xl' variant='link'>
                  {siteConfig.title}
                </Link>
              </HStack>
            </Link>
          </NextLink>
        </HStack>

        <HStack fontSize='md' justify='flex-end'>
          {isDestop
            ? routes.map(([text, href]) => (
                <NextLink key={text} href={href}>
                  <Link p={4} color='secondary.600'>
                    {text}
                  </Link>
                </NextLink>
              ))
            : null}
        </HStack>
      </HStack>
      <Divider />
    </>
  )
}

export default Nav
