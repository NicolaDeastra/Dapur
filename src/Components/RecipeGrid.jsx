import * as React from 'react'
import { SimpleGrid, Stack, Box, Heading } from '@chakra-ui/react'

import Card from '@/Components/Card'

const RecipeGrid = ({ recipes, title = 'Resep' }) => {
  return (
    <Stack
      pr={['2rem', 0]}
      pl={['0.3rem', '2rem']}
      py='6'
      direction='column'
      spacing='6'
    >
      <Box>
        <Box
          maxW='3rem'
          overflow='visible'
          pb='2'
          borderBottomWidth='4px'
          borderBottomColor='primary.600'
        >
          <Heading w='5rem' size='sm'>
            {title}
          </Heading>
        </Box>
      </Box>
      <SimpleGrid columns={[1, 3]} spacing='3'>
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
                category={recipe.category}
                endpoint={recipe.key}
              />
            ))
          : null}
      </SimpleGrid>
    </Stack>
  )
}

export default RecipeGrid
