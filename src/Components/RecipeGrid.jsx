import * as React from 'react'
import { SimpleGrid, Flex } from '@chakra-ui/react'

import Card from '@/Components/Card'

const RecipeGrid = ({ recipes, bg }) => {
  return (
    <Flex
      pr={['2rem', 0]}
      pl={['0.3rem', '4rem']}
      py='12'
      direction='column'
      borderRadius='6'
      bg={bg}
    >
      <SimpleGrid columns={[1, 3]}>
        {recipes
          ? recipes.map((recipe) => (
              <Card
                key={recipe.key}
                title={recipe.title}
                thumb={recipe.thumb}
                times={recipe.times}
                portion={recipe.portion}
                dificulty={recipe.dificulty}
                tags={recipe.tags}
                endpoint={recipe.key}
              />
            ))
          : null}
      </SimpleGrid>
    </Flex>
  )
}

export default RecipeGrid
