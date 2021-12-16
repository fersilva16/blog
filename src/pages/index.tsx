import type { NextPage } from 'next';
import Head from 'next/head';

import Container from '../components/Container';
import Title from '../components/Title';

const Home: NextPage = function Home() {
  return (
    <Container>
      <Head>
        <title>Hello World!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title>Hello World!</Title>
    </Container>
  );
};

export default Home;
