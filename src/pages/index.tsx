import { useTranslations } from 'next-intl';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaDiscord,
  FaDev,
  FaEnvelope,
} from 'react-icons/fa';

import { metadata } from '~/data/metadata';
import { getIntlMessagesProps } from '~/lib/intl/getIntlMessagesProps';

const Home = () => {
  const t = useTranslations();

  return (
    <>
      <Head>
        <title>Fernando Silva</title>
      </Head>

      <div>
        <h1>Fernando Silva</h1>
        <h2>{t('Self-taught Full Stack Developer from Brazil')}</h2>

        <div>
          <NextLink href={metadata.githubUrl} passHref>
            <FaGithub role="img" aria-label="github" />
          </NextLink>
          <NextLink href={metadata.twitterUrl} passHref>
            <FaTwitter role="img" aria-label="twitter" />
          </NextLink>
          <NextLink href={metadata.discordUrl} passHref>
            <FaDiscord role="img" aria-label="discord" />
          </NextLink>
          <NextLink href={metadata.devtoUrl} passHref>
            <FaDev role="img" aria-label="dev.to" />
          </NextLink>
          <NextLink href={metadata.linkedinUrl} passHref>
            <FaLinkedin role="img" aria-label="linkedin" />
          </NextLink>
          <NextLink href={metadata.emailLink} passHref>
            <FaEnvelope role="img" aria-label="email" />
          </NextLink>
        </div>
      </div>
    </>
  );
};

export default Home;

export const getStaticProps = getIntlMessagesProps();
