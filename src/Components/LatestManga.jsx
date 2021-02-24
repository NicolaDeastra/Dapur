import * as React from 'react'
import { SimpleGrid } from '@chakra-ui/react'

import Card from '@/Components/Card'

const LatestManga = ({ LatestManga }) => {
  return (
    <SimpleGrid pr={['2rem', 0]} pl={['2rem', '4rem']} columns={3} spacing={10}>
      {LatestManga
        ? LatestManga.map((manga) => (
            <Card
              key={manga.title}
              title={manga.title}
              thumb={manga.thumb}
              type={manga.type}
              chapter={manga.chapter}
              updated_on={manga.updated_on}
            />
          ))
        : null}
    </SimpleGrid>
  )
}

export default LatestManga
