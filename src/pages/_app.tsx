/* eslint-disable react/jsx-props-no-spreading */

import { Box, ChakraProvider } from '@chakra-ui/react';
import { NextIntlProvider } from 'next-intl';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Header } from '~/components/Header';
import { theme } from '~/styles/theme';

const App = function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <NextIntlProvider messages={pageProps.messages}>
        <ChakraProvider theme={theme}>
          <Header />

          <Box display="flex" width="100%" paddingLeft="20%" paddingRight="20%">
            <Component {...pageProps} />
          </Box>
        </ChakraProvider>
      </NextIntlProvider>
    </>
  );
};

export default App;
