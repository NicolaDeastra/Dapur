import * as React from 'react'
import NextLink from 'next/link'
import { SimpleGrid, Stack, Box, Heading, Flex, Link } from '@chakra-ui/react'

import Card from '@/Components/Card'

const RecipeGrid = ({ recipes, title = 'Resep' }) => {
  return (
    <Stack
      pr={['1rem', 0]}
      pl={['1rem', '2rem']}
      py='6'
      direction='column'
      spacing='6'
    >
      <Flex justifyContent='space-between' pr={['1rem', '2rem']}>
        <Box
          maxW='3rem'
          overflow='visible'
          pb='2'
          borderBottomWidth='4px'
          borderBottomColor='primary.600'
          cursor='pointer'
        >
          <NextLink href='#'>
            <Heading w='6rem' size='sm'>
              {title}
            </Heading>
          </NextLink>
        </Box>
        {title !== 'Category' ? (
          <Box>
            <NextLink href='#'>
              <Link as='p'>see all</Link>
            </NextLink>
          </Box>
        ) : null}
      </Flex>
      <SimpleGrid columns={[1, 3]} spacing='3'>
        {recipes
          ? recipes.map((recipe, index) => (
              <Card
                key={index}
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
