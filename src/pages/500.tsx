import Head from 'next/head';
import NextLink from 'next/link';

import { getIntlMessagesProps } from '~/intl/getIntlMessagesProps';

const InternalError = () => {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>

      <h1>500</h1>
      <h2>Ooppss!!</h2>
      <NextLink href="/">Back to Home!</NextLink>
    </>
  );
};

export default InternalError;

export const getStaticProps = getIntlMessagesProps();
