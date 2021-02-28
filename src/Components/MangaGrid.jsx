import * as React from 'react'
import { SimpleGrid, Heading, Flex, Spacer } from '@chakra-ui/react'

import Card from '@/Components/Card'

const MangaGrid = ({ type, comics }) => {
  return (
    <Flex
      pr={['2rem', 0]}
      pl={['2rem', '4rem']}
      direction='column'
      mb={[0, '3rem']}
    >
      <Heading as='h3' size='md' alignContent='start' mb={[0, '2rem']}>
        {type}
      </Heading>
      <SimpleGrid columns={[1, 3]} spacing={10}>
        {comics
          ? comics
              .slice(0, 6)
              .map((comic) => (
                <Card
                  key={comic.title}
                  title={comic.title}
                  thumb={comic.thumb}
                  type={comic.type}
                  chapter={comic.chapter}
                  updated_on={comic.updated_on}
                  upload_on={comic.upload_on}
                />
              ))
          : null}
      </SimpleGrid>
    </Flex>
  )
}

export default MangaGrid
