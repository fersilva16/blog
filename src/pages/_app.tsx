/* eslint-disable react/jsx-props-no-spreading */

import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';

import globalStyle from '../styles/global';

const App = function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  );
};

export default App;
