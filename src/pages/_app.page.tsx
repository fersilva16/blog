import { NextIntlProvider } from 'next-intl';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Header } from '../components/header/Header';
import { globalStyles } from '../styles/global';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <style global jsx>
        {globalStyles}
      </style>

      <NextIntlProvider messages={pageProps.messages}>
        <Header />
        <Component {...pageProps} />
      </NextIntlProvider>
    </>
  );
};

export default App;
