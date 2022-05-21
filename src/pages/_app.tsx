import { NextIntlProvider } from 'next-intl';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Header } from '~/components/header/Header';
import { Container } from '~/components/ui/Container';

const App = ({ Component, pageProps }: AppProps) => {
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
