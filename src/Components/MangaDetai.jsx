import {
  Box,
  Image,
  SimpleGrid,
  List,
  ListItem,
  Heading,
} from '@chakra-ui/react'

const MangaDetail = ({ manga }) => {
  return (
    <SimpleGrid px={'18rem'} columns={2} spacing={6}>
      <Box>
        <Image
          src={manga.thumb}
          boxSize={['150px', '200px']}
          alt={manga.title}
        />
      </Box>

      <Box>
        <List>
          <ListItem>
            <Heading size='md'>{manga.title}</Heading>
          </ListItem>
          <ListItem>
            <Heading size='sm' color='secondary.600'>
              {manga.type}
            </Heading>
          </ListItem>
          <ListItem>{manga.author}</ListItem>
          <ListItem>{manga.status}</ListItem>
        </List>
      </Box>
    </SimpleGrid>
  )
}

export default MangaDetail
