import '../styles/globals.css';
import '@fontsource/lora';
import '@fontsource/lato';
import '@fontsource/playfair-display';

import { ChakraProvider } from '@chakra-ui/react';

import theme from '../styles/ChakraConfig';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
