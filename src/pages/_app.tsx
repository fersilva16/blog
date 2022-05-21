import { Global } from '@emotion/react';
import { NextIntlProvider } from 'next-intl';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Header } from '~/components/header/Header';
import { Container } from '~/components/ui/Container';
import { ContentContainer } from '~/components/ui/ContentContainer';
import { globalStyles } from '~/styles/global';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Global styles={globalStyles} />

      <NextIntlProvider messages={pageProps.messages}>
        <Container>
          <ContentContainer>
            <Header />
            <Component {...pageProps} />
          </ContentContainer>
        </Container>
      </NextIntlProvider>
    </>
  );
};

export default App;
