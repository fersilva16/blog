import { GetStaticProps } from 'next';

import getIntlMessages from './getIntlMessages';

export default function getI18nMessagesProps(namespaces: string[]): GetStaticProps {
  return async ({ locale }) => {
    const messages = await getIntlMessages(locale, namespaces);

    return {
      props: {
        messages,
      },
    };
  };
}
