const Button = {
  variants: {
    primary: {
      borderRadius: 0,
      bg: 'primary.400',
      color: 'white',
      _hover: {
        bg: 'primary.500',
        color: 'white',
      },
    },
    secondary: {
      borderRadius: 0,
      border: '2px',
      borderColor: 'primary.400',
      color: 'primary.400',
      _hover: {
        bg: 'primary.500',
        color: 'white',
        borders: '0px',
        borderColor: 'primary.500',
      },
    },
  },
}

export default Button
