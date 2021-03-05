import * as React from 'react'
import NextLink from 'next/link'
import { Box, Image, Flex, Badge, Text } from '@chakra-ui/react'

const Card = ({
  title,
  thumb,
  type,
  chapter,
  endpoint,
  updated_on,
  upload_on,
}) => {
  return (
    <NextLink href={`/detail/${endpoint}`}>
      <Box
        p='5'
        maxW='320px'
        cursor='pointer'
        bg='#fff'
        borderWidth='1px'
        boxShadow='lg'
      >
        <Image borderRadius='md' src={thumb} />
        <Flex align='baseline' mt={2}>
          <Badge colorScheme='primary'>{chapter ? chapter : type}</Badge>
        </Flex>
        <Text
          mt={2}
          fontSize='xl'
          fontWeight='semibold'
          isTruncated
          lineHeight='short'
        >
          {title}
        </Text>
        <Text mt={2} color='secondary.600'>
          {updated_on ? `Update ${updated_on} lalu ` : upload_on}
        </Text>
      </Box>
    </NextLink>
  )
}

export default Card
