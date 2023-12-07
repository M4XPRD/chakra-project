import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      100: 'cyan',
      200: 'cyan',
      300: 'cyan',
      400: 'cyan',
      500: 'limegreen',
      600: 'limegreen',
      700: 'limegreen',
    },
  },
  components: {
    Button: {
      variants: {
        brand: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.300' : 'brand.700',
          color: 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.700' : 'brand.300',
          },
        }),
      },
    },
  },
});

export default theme;
