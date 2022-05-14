/* eslint-disable react/jsx-props-no-spreading */

import { NextIntlProvider } from 'next-intl';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Container } from '~/components/Container';
import { Header } from '~/components/Header';

const App = function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <NextIntlProvider messages={pageProps.messages}>
        <Header />

        <Container>
          <Component {...pageProps} />
        </Container>
      </NextIntlProvider>
    </>
  );
};

export default App;
