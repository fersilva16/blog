export const getIntlMessages = async (locale: string | undefined) => {
  if (!locale) {
    throw new Error('locale');
  }

  const localeModule = await import(`../locales/${locale}.json`);

  return localeModule.default;
};
