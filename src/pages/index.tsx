import { Box, Heading, Link, Tooltip } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord, FaDev, FaEnvelope } from 'react-icons/fa';

import metadata from '~/data/metadata';

const Home: NextPage = function Home() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" width="100vw">
      <Head>
        <title>Fernando Silva</title>
      </Head>

      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Heading as="h1" size="4xl">
          Fernando Silva
        </Heading>
        <Heading as="h2" size="lg" marginTop="8">
          A self-taught Full Stack Developer from Brazil
        </Heading>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          paddingRight="28"
          paddingLeft="28"
          fontSize="32"
          marginTop="8"
        >
          <Tooltip label="Github">
            <NextLink href={metadata.githubUrl} passHref>
              <Link>
                <FaGithub />
              </Link>
            </NextLink>
          </Tooltip>
          <Tooltip label="Twitter">
            <NextLink href={metadata.twitterUrl} passHref>
              <Link>
                <FaTwitter />
              </Link>
            </NextLink>
          </Tooltip>
          <Tooltip label="Discord">
            <NextLink href={metadata.discordUrl} passHref>
              <Link>
                <FaDiscord />
              </Link>
            </NextLink>
          </Tooltip>
          <Tooltip label="Dev.to">
            <NextLink href={metadata.devtoUrl} passHref>
              <Link>
                <FaDev />
              </Link>
            </NextLink>
          </Tooltip>
          <Tooltip label="Linkedin">
            <NextLink href={metadata.linkedinUrl} passHref>
              <Link>
                <FaLinkedin />
              </Link>
            </NextLink>
          </Tooltip>
          <Tooltip label="Email">
            <NextLink href={metadata.emailLink} passHref>
              <Link>
                <FaEnvelope />
              </Link>
            </NextLink>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
