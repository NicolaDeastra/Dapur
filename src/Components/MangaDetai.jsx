import {
  Box,
  Image,
  Stack,
  List,
  HStack,
  ListItem,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react'

const MangaDetail = ({ manga }) => {
  return (
    <Stack px={'6rem'} columns={2} my='6' minW='18'>
      <HStack spacing='12'>
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
      </HStack>
      <Box>
        <Tabs>
          <TabList>
            <Tab>Synopsis</Tab>
            <Tab>Chapter</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Stack>
  )
}

export default MangaDetail
