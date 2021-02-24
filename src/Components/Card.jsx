import * as React from 'react'
import { Box, Image, Flex, Badge, Text } from '@chakra-ui/react'

const Card = ({ title, thumb, type, chapter, updated_on }) => {
  return (
    <Box p='5' maxW='320px' borderWidth='1px'>
      <Image borderRadius='md' src={thumb} />
      <Flex align='baseline' mt={2}>
        <Badge colorScheme='blue'>{chapter}</Badge>
        <Text
          ml={2}
          textTransform='uppercase'
          fontSize='sm'
          fontWeight='bold'
          color='blue.600'
        >
          {type}
        </Text>
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
      <Text mt={2} color='gray'>
        {updated_on}
      </Text>
    </Box>
  )
}

export default Card
