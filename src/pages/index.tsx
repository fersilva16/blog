import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Heading, Link, Tooltip } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord, FaDev, FaEnvelope } from 'react-icons/fa';

import metadata from '../data/metadata';

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
          <NextLink href={metadata.githubUrl} passHref>
            <Tooltip label="Github">
              <Link>
                <FaGithub />
              </Link>
            </Tooltip>
          </NextLink>
          <NextLink href={metadata.twitterUrl} passHref>
            <Tooltip label="Twitter">
              <Link>
                <FaTwitter />
              </Link>
            </Tooltip>
          </NextLink>
          <NextLink href={metadata.discordUrl} passHref>
            <Tooltip label="Discord">
              <Link>
                <FaDiscord />
              </Link>
            </Tooltip>
          </NextLink>
          <NextLink href={metadata.devtoUrl} passHref>
            <Tooltip label="Dev.to">
              <Link>
                <FaDev />
              </Link>
            </Tooltip>
          </NextLink>
          <NextLink href={metadata.linkedinUrl} passHref>
            <Tooltip label="Linkedin">
              <Link>
                <FaLinkedin />
              </Link>
            </Tooltip>
          </NextLink>
          <NextLink href={metadata.emailLink} passHref>
            <Tooltip label="Email">
              <Link>
                <FaEnvelope />
              </Link>
            </Tooltip>
          </NextLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
