import type { NextPage } from 'next';
import { Box, Button, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import NextLink from 'next/link';

const NotFound: NextPage = function NotFound() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" width="100vw">
      <Head>
        <title>Not Found</title>
      </Head>

      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Heading as="h1" size="4xl">
          404
        </Heading>
        <Heading as="h2" size="lg" marginTop="6">
          Ooppss!! Page Not Found!
        </Heading>
        <NextLink href="/">
          <Button marginTop="12">Back to Home!</Button>
        </NextLink>
      </Box>
    </Box>
  );
};

export default NotFound;
