import Head from 'next/head';
import { useTranslations } from 'next-intl';

import { Center } from '../components/ui/Center';
import { ContentContainer } from '../components/ui/ContentContainer';
import { getIntlMessagesProps } from '../lib/intl/getIntlMessagesProps';

const NotFound = () => {
  const t = useTranslations();

  return (
    <ContentContainer>
      <Head>
        <title>{t('Not Found')}</title>
      </Head>

      <Center>
        <h1>404</h1>
        <h2>{t('Ooppss!! Page Not Found!')}</h2>
      </Center>
    </ContentContainer>
  );
};

export default NotFound;

export const getStaticProps = getIntlMessagesProps();
