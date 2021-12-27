import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Heading } from '@chakra-ui/react';

const Home: NextPage = function Home() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" width="100vw">
      <Head>
        <title>Hello World!</title>
      </Head>

      <Heading>Hello World!</Heading>
    </Box>
  );
};

export default Home;
