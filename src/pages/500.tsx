import Head from 'next/head';

import { Center } from '~/components/ui/Center';
import { getIntlMessagesProps } from '~/lib/intl/getIntlMessagesProps';

const InternalError = () => {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>

      <Center>
        <h1>500</h1>
        <h2>Ooppss!!</h2>
      </Center>
    </>
  );
};

export default InternalError;

export const getStaticProps = getIntlMessagesProps();
