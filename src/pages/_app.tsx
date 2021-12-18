/* eslint-disable react/jsx-props-no-spreading */

import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import Head from 'next/head';

import globalStyle from '../styles/global';

const App = function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  );
};

export default App;
