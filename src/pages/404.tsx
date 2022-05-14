import Head from 'next/head';
import NextLink from 'next/link';

import { Container } from '~/components/Container';

import { getIntlMessagesProps } from '../utils/getIntlMessagesProps';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>

      <Container>
        <h1>404</h1>
        <h2>Ooppss!! Page Not Found!</h2>
        <NextLink href="/">Back to Home!</NextLink>
      </Container>
    </>
  );
};

export default NotFound;

export const getStaticProps = getIntlMessagesProps([]);
