import { useTranslations } from 'next-intl';
import Head from 'next/head';
import Link from 'next/link';

import { metadata } from '~/data/metadata';
import { getIntlMessagesProps } from '~/lib/intl/getIntlMessagesProps';

import { Separator } from '../components/ui/Separator';

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
          <Link href={metadata.githubUrl}>GitHub</Link>
          <Separator />
          <Link href={metadata.twitterUrl}>Twitter</Link>
          <Separator />
          <Link href={metadata.discordUrl}>Discord</Link>
          <Separator />
          <Link href={metadata.devtoUrl}>Dev.to</Link>
          <Separator />
          <Link href={metadata.linkedinUrl}>LinkedIn</Link>
          <Separator />
          <Link href={metadata.emailLink}>{t('Email')}</Link>
        </div>
      </div>
    </>
  );
};

export default Home;

export const getStaticProps = getIntlMessagesProps();
