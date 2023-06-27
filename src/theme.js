import { extendTheme } from '@chakra-ui/react'

const fonts = {
	heading: '\'Roboto\', sans-serif',
	body: '\'Roboto\', sans-serif'
}

const colors = {
  global: {
    100: '#F5F4F9',
    200: '#5E3DB3',
    300: '#603EBE',
    400: '#8F6BE8',
    500: '#090C35',
    600: '#936EEA',
    700: '#5C37B7',
    800: '#9173E6'
  },
}

const semanticTokens = {
	colors: {
		header1: '#E7E7E7',
    header2: '#C2C2C2'
	}
}

const theme = extendTheme({
  fonts,
  colors,
  semanticTokens
})

export default theme