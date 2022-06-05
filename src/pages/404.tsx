import { useTranslations } from 'next-intl';
import Head from 'next/head';

import { Center } from '~/components/ui/Center';
import { getIntlMessagesProps } from '~/lib/intl/getIntlMessagesProps';

const NotFound = () => {
  const t = useTranslations();

  return (
    <>
      <Head>
        <title>{t('Not Found')}</title>
      </Head>

      <Center>
        <h1>404</h1>
        <h2>{t('Ooppss!! Page Not Found!')}</h2>
      </Center>
    </>
  );
};

export default NotFound;

export const getStaticProps = getIntlMessagesProps();
