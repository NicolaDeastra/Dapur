import { ChakraProvider } from '@chakra-ui/react'
import Router from 'next/router'
import ProgressBar from '@badrap/bar-of-progress'

import theme from '@/theme'

const progress = new ProgressBar({
  size: 2,
  color: '#446f55',
  className: 'bar-of-progress',
  delay: 100,
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
