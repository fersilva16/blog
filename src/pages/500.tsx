import type { NextPage } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';

import { Container } from '~/components/Container';

import { getIntlMessagesProps } from '../utils/getIntlMessagesProps';

const InternalError: NextPage = function InternalError() {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>

      <Container>
        <h1>500</h1>
        <h2>Ooppss!!</h2>
        <NextLink href="/">Back to Home!</NextLink>
      </Container>
    </>
  );
};

export default InternalError;

export const getStaticProps = getIntlMessagesProps([]);
