import * as React from 'react'
import { Box, Image, Flex, Badge, Text } from '@chakra-ui/react'

const Card = ({ title, thumb, type, chapter, updated_on, upload_on }) => {
  return (
    <Box p='5' maxW='320px' borderWidth='1px' boxShadow='lg'>
      <Image borderRadius='md' src={thumb} />
      <Flex align='baseline' mt={2}>
        <Badge colorScheme='blue'>{chapter}</Badge>
        <Text ml={2} fontSize='sm' fontWeight='bold' color='blue.600'>
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
