import Head from 'next/head';

import { Center } from '~/components/ui/Center';
import { getIntlMessagesProps } from '~/lib/intl/getIntlMessagesProps';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>

      <Center>
        <h1>404</h1>
        <h2>Ooppss!! Page Not Found!</h2>
      </Center>
    </>
  );
};

export default NotFound;

export const getStaticProps = getIntlMessagesProps();
