const Button = {
  variants: {
    primary: {
      borderRadius: 0,
      bg: 'primary.600',
      color: 'white',
      _hover: {
        bg: 'primary.700',
        color: 'white',
      },
    },
    secondary: {
      borderRadius: 0,
      border: '2px',
      borderColor: 'primary.600',
      color: 'primary.600',
      _hover: {
        bg: 'primary.700',
        color: 'white',
        borders: '0px',
        borderColor: 'primary.700',
      },
    },
  },
}

export default Button
