import * as React from 'react'
import NextLink from 'next/link'
import { Box, Img, Icon, HStack, Text } from '@chakra-ui/react'

import {
  FaRegClock,
  FaThumbsUp,
  FaConciergeBell,
  FaLightbulb,
  FaMortarPestle,
} from 'react-icons/fa'

const Card = ({
  title,
  thumb,
  portion,
  times,
  dificulty,
  endpoint,
  tags,
  category,
}) => {
  return (
    <NextLink
      href={tags ? `/article/${tags}/${endpoint}` : `/recipe/${endpoint}`}
    >
      <Box
        maxW='sm'
        border='1px'
        borderColor='gray.200'
        cursor='pointer'
        mb={['2rem', '1.5rem']}
      >
        <Img src={thumb} alt={title} maxH='14.5rem' />

        <Box py='6' px={[0, '3']} pl={['1', 0]}>
          <Box d='flex' alignItems='center' color='gray.600'>
            {times && dificulty ? (
              <>
                <HStack>
                  <Icon as={FaRegClock} />
                  <Text fontSize={['xs', 'sm']}>{times}</Text>
                </HStack>
                <HStack px='4'>
                  <Icon as={FaConciergeBell} />
                  <Text fontSize={['xs', 'sm']}>{portion}</Text>
                </HStack>
                <HStack>
                  <Icon
                    as={dificulty === 'Mudah' ? FaThumbsUp : FaMortarPestle}
                  />
                  <Text fontSize={['xs', 'sm']}>{dificulty}</Text>
                </HStack>
              </>
            ) : (
              <HStack>
                <Icon as={FaLightbulb} />
                <Text>{category}</Text>
              </HStack>
            )}
          </Box>

          <Box mt='2' fontWeight='semibold' as='h4' lineHeight='tight'>
            {title}
          </Box>
        </Box>
      </Box>
    </NextLink>
  )
}

export default Card
