import { extendTheme, theme } from '@chakra-ui/react'

import styles from './style'

import Box from './components/Box'
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
    Box,
  },
  colors: {
    primary: {
      100: '#cde3d5',
      200: '#afcebb',
      300: '#90bba2',
      400: '#72a888',
      500: '#588e6f',
      600: '#446f55',
      700: '#304f3d',
      800: '#1a3024',
      900: '#011207',
    },
    bg: {
      100: '#FFF2C3',
      200: '#C3FFD4',
      300: '#C3D0FF',
      400: '#FFC3EE',
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
