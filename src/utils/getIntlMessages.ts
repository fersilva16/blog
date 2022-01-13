import { asyncReduce } from './asyncReduce';

const defaultNamespaces = ['header'];

export async function getIntlMessages(locale: string | undefined, namespaces: string[]) {
  if (!locale) {
    throw new Error('locale');
  }

  return asyncReduce<string, Record<string, unknown> | undefined>(
    [...defaultNamespaces, ...namespaces],
    async (acc, namespace) => ({
      ...acc,
      [namespace]: (await import(`../locales/${locale}/${namespace}.json`)).default,
    }),
    undefined
  );
}
