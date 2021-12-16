import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Head from 'next/head';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 6em;
`;

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
