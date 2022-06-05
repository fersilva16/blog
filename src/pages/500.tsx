import { useTranslations } from 'next-intl';
import Head from 'next/head';

import { Center } from '~/components/ui/Center';
import { getIntlMessagesProps } from '~/lib/intl/getIntlMessagesProps';

const InternalError = () => {
  const t = useTranslations();

  return (
    <>
      <Head>
        <title>{t('Internal Server Error')}</title>
      </Head>

      <Center>
        <h1>500</h1>
        <h2>{t('Ooppss!!')}</h2>
      </Center>
    </>
  );
};

export default InternalError;

export const getStaticProps = getIntlMessagesProps();
