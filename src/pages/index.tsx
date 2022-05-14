import type { NextPage } from 'next';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import NextLink from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord, FaDev, FaEnvelope } from 'react-icons/fa';

import { metadata } from '~/data/metadata';
import { getIntlMessagesProps } from '~/utils/getIntlMessagesProps';

const Home: NextPage = function Home() {
  const t = useTranslations('home');

  return (
    <>
      <Head>
        <title>Fernando Silva</title>
      </Head>

      <div>
        <h1>Fernando Silva</h1>
        <h2>{t('title')}</h2>

        <div>
          <NextLink href={metadata.githubUrl} passHref>
            <FaGithub />
          </NextLink>
          <NextLink href={metadata.twitterUrl} passHref>
            <FaTwitter />
          </NextLink>
          <NextLink href={metadata.discordUrl} passHref>
            <FaDiscord />
          </NextLink>
          <NextLink href={metadata.devtoUrl} passHref>
            <FaDev />
          </NextLink>
          <NextLink href={metadata.linkedinUrl} passHref>
            <FaLinkedin />
          </NextLink>
          <NextLink href={metadata.emailLink} passHref>
            <FaEnvelope />
          </NextLink>
        </div>
      </div>
    </>
  );
};

export default Home;

export const getStaticProps = getIntlMessagesProps(['home']);
