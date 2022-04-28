import { Box, Button, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';

import { getIntlMessagesProps } from '../utils/getIntlMessagesProps';

const InternalError: NextPage = function InternalError() {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        width="100%"
        marginTop="20"
      >
        <Heading as="h1" size="4xl">
          404
        </Heading>
        <Heading as="h2" size="lg" marginTop="6">
          Ooppss!!
        </Heading>
        <NextLink href="/">
          <Button marginTop="12">Back to Home!</Button>
        </NextLink>
      </Box>
    </>
  );
};

export default InternalError;

export const getStaticProps = getIntlMessagesProps([]);
