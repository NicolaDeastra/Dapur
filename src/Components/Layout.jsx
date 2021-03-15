import { Container } from '@chakra-ui/react'

import Nav from '@/Components/Nav'
import Footer from '@/Components/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}
