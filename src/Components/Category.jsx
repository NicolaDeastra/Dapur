import { Box, Heading, Stack, SimpleGrid } from '@chakra-ui/react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import category from '@/category'
import CategoryCard from '@/Components/CategoryCard'

function Category() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  }

  return (
    <Stack
      pr={['1rem', 0]}
      pl={['1rem', '2rem']}
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
          <Heading w='6rem' size='sm'>
            Category
          </Heading>
        </Box>
      </Box>
      <AliceCarousel
        responsive={responsive}
        disableButtonsControls
        disableDotsControls
        infinite
        mouseTracking
        autoPlay
        autoPlayInterval={1500}
      >
        {category.map((e) => (
          <CategoryCard
            type={e.key}
            title={e.name}
            thumb={e.thumb}
            key={e.key}
          />
        ))}
      </AliceCarousel>
    </Stack>
  )
}

export default Category
