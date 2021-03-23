import NextLink from 'next/link'
import { Box, Heading } from '@chakra-ui/react'

function CategoryCard({ type, title, thumb }) {
  return (
    <NextLink href={`/category/${type}`}>
      <Box
        bgImage={`url(${thumb})`}
        bgRepeat='no-repeat'
        mb={['2rem', '1.5rem']}
        cursor='pointer'
        w='23rem'
        h='12rem'
      >
        <Box
          h='100%'
          bgColor='black'
          opacity={0.6}
          _hover={{
            opacity: 0.8,
          }}
        >
          <Heading
            py='5rem'
            px='5.5rem'
            fontWeight='semibold'
            fontSize='md'
            color='white'
          >
            {title}
          </Heading>
        </Box>
      </Box>
    </NextLink>
  )
}

export default CategoryCard
