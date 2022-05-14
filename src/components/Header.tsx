import styled from '@emotion/styled';
import { useTranslations } from 'next-intl';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 16px;
  position: sticky;
  padding: 0 20%;
`;

export const Header = () => {
  const router = useRouter();
  const t = useTranslations('header');

  return (
    <HeaderContainer>
      <div>
        <NextLink href="/">{t('home')}</NextLink>
        <NextLink href="/blog">{t('blog')}</NextLink>
        <NextLink href="/about">{t('about')}</NextLink>
      </div>

      <NextLink href={router.pathname} locale={router.locale === 'en' ? 'pt' : 'en'}>
        {router.locale === 'en' ? 'pt' : 'en'}
      </NextLink>
    </HeaderContainer>
  );
};
