import Nav from '@/Components/Nav'
import Footer from '@/Components/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className='px-4 sm:px-6 lg:px-8'>{children}</div>
      <Footer />
    </>
  )
}
