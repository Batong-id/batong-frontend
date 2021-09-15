import '../styles/globals.css';
import '@fontsource/lora';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import '@fontsource/lato/900.css';
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/playfair-display/900.css';

import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';

import Layout from '../components/Layout';
import theme from '../styles/ChakraConfig';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="Batong adalah platform one stop application yang diharapkan bisa membantu penjualan batik di Indonesia"
        />
        <meta name="keywords" content="Keywords" />
        <title>Batong.id</title>
        <link
          href="logo-batong.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="logo-batong.png"></link>
        <meta name="theme-color" content="#003D86" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
