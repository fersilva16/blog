import { GetStaticProps } from 'next';

import { getIntlMessages } from './getIntlMessages';

export const getIntlMessagesProps = (): GetStaticProps => {
  return async ({ locale }) => {
    const messages = await getIntlMessages(locale);

    return {
      props: {
        messages,
      },
    };
  };
};
