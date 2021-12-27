import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Heading } from '@chakra-ui/react';

const NotFound: NextPage = function NotFound() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" width="100vw">
      <Head>
        <title>Not Found!</title>
      </Head>

      <Heading>Not Found!</Heading>
    </Box>
  );
};

export default NotFound;
