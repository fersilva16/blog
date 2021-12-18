import type { NextPage } from 'next';
import Head from 'next/head';

import Container from '../components/Container';
import Title from '../components/Title';

const NotFound: NextPage = function NotFound() {
  return (
    <Container>
      <Head>
        <title>Not Found!</title>
      </Head>

      <Title>Not Found!</Title>
    </Container>
  );
};

export default NotFound;
