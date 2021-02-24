import { Container } from '@chakra-ui/react'

import Nav from '@/Components/Nav'
import Footer from '@/Components/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <Container maxW='container.xl'>{children}</Container>
      <Footer />
    </>
  )
}
