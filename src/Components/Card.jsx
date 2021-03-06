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
        maxW='xs'
        cursor='pointer'
        bg='#fff'
        borderWidth='1px'
        borderRadius='lg'
        boxShadow='lg'
        overflow='hidden'
        mb={['2rem', '4rem']}
      >
        <Image src={thumb} alt={title} />

        <Box p='6'>
          <Box d='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='primary'>
              {chapter ? chapter : type}
            </Badge>
          </Box>

          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            isTruncated
          >
            {title}
          </Box>

          <Box color='secondary.600'>
            {updated_on ? `Update ${updated_on} lalu ` : upload_on}
          </Box>
        </Box>
      </Box>
    </NextLink>
  )
}

export default Card
