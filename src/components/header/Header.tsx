import { useTranslations } from 'next-intl';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { Separator } from '../ui/Separator';
import { HeaderContainer } from './HeaderContainer';
import { HeaderLeftContainer } from './HeaderLeftContainer';

export const Header = () => {
  const router = useRouter();
  const t = useTranslations();

  return (
    <HeaderContainer>
      <NextLink href="/">Fernando</NextLink>

      <HeaderLeftContainer>
        <NextLink href="/">{t('Home')}</NextLink>
        <Separator />
        <NextLink href="/about">{t('About')}</NextLink>
        <Separator />
        <NextLink
          href={router.asPath}
          locale={router.locale === 'en' ? 'pt' : 'en'}
        >
          {router.locale === 'en' ? 'pt' : 'en'}
        </NextLink>
      </HeaderLeftContainer>
    </HeaderContainer>
  );
};
