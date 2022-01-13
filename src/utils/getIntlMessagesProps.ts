import { GetStaticProps } from 'next';

import { getIntlMessages } from './getIntlMessages';

export function getIntlMessagesProps(namespaces: string[]): GetStaticProps {
  return async ({ locale }) => {
    const messages = await getIntlMessages(locale, namespaces);

    return {
      props: {
        messages,
      },
    };
  };
}
