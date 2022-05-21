import Head from 'next/head';
import NextLink from 'next/link';

import { getIntlMessagesProps } from '~/intl/getIntlMessagesProps';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>

      <h1>404</h1>
      <h2>Ooppss!! Page Not Found!</h2>
      <NextLink href="/">Back to Home!</NextLink>
    </>
  );
};

export default NotFound;

export const getStaticProps = getIntlMessagesProps();
