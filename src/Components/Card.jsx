import * as React from 'react'
import NextLink from 'next/link'
import { Box, Image, Badge } from '@chakra-ui/react'

const Card = ({ title, thumb, portion, times, dificulty, endpoint, tags }) => {
  return (
    <NextLink href={`/detail/${endpoint}`}>
      <Box
        maxW='xs'
        cursor='pointer'
        bg='#fff'
        borderWidth='1px'
        overflow='hidden'
        mb={['2rem', '4rem']}
      >
        <Image src={thumb} alt={title} />

        <Box p='6'>
          <Box d='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='primary'>
              {portion}
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

          <Box color='gray.600'>
            {tags ? tags : `${dificulty} sekitar ${times}`}
          </Box>
        </Box>
      </Box>
    </NextLink>
  )
}

export default Card
