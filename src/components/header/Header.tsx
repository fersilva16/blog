import styled from '@emotion/styled';
import { useTranslations } from 'next-intl';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { HeaderContainer } from './HeaderContainer';
import { HeaderLeftContainer } from './HeaderLeftContainer';
import { HeaderSeparator } from './HeaderSeparator';

export const Header = () => {
  const router = useRouter();
  const t = useTranslations();

  return (
    <HeaderContainer>
      <NextLink href="/">Fernando</NextLink>

      <HeaderLeftContainer>
        <NextLink href="/">{t('Home')}</NextLink>
        <HeaderSeparator />
        <NextLink href="/about">{t('About')}</NextLink>
        <HeaderSeparator />
        <NextLink href={router.pathname} locale={router.locale === 'en' ? 'pt' : 'en'}>
          {router.locale === 'en' ? 'pt' : 'en'}
        </NextLink>
      </HeaderLeftContainer>
    </HeaderContainer>
  );
};
