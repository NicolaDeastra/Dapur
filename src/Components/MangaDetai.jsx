import { Box, Image, Flex, List, ListItem } from '@chakra-ui/react'

const MangaDetail = ({ manga }) => {
  return (
    <Flex>
      <Image src={manga.thumb} boxSize='200px' alt={manga.title} />
      <Box>
        <List>
          <ListItem>{manga.title}</ListItem>
          <ListItem>{manga.type}</ListItem>
          <ListItem>{manga.author}</ListItem>
          <ListItem>{manga.status}</ListItem>
        </List>
      </Box>
    </Flex>
  )
}

export default MangaDetail
