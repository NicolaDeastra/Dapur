import { extendTheme, theme } from '@chakra-ui/react'

import styles from './style'
import Link from './components/Link'
import Button from './components/Button'

const heading = `Montserrat, ${theme.fonts.heading}`

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const overrides = {
  config,
  components: {
    Link,
    Button,
  },
  colors: {
    primary: {
      100: '#b4e0fc',
      200: '#88caf4',
      300: '#5bb5ee',
      400: '#30a0e8',
      500: '#1787cf',
      600: '#0a69a2',
      700: '#004b75',
      800: '#002d49',
      900: '#00101e',
    },
    secondary: {
      100: '#ddd7d9',
      200: '#c1bfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#413f40',
      800: '#292526',
      900: '#16090d',
    },
  },

  fonts: {
    heading,
  },
  fontSizes: {
    xs: '14px',
    sm: '16px',
    md: '18px',
    lg: '20px',
    xl: '24px',
    '2xl': '28px',
    '3xl': '36px',
    '4xl': '48px',
    '5xl': '64px',
    '6xl': '72px',
  },
  sizes: {
    '4xs': '12rem',
    '5xs': '10rem',
    '6xs': '8rem',
    '7xs': '6rem',
    '8xs': '4rem',
  },
  styles,
}

export default extendTheme(overrides)
