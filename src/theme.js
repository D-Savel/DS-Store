import { extendTheme } from '@chakra-ui/react'

// 2. Add your config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config })

export default theme