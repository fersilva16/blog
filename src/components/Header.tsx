import { Box, Button, useColorMode } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FaSun, FaMoon } from 'react-icons/fa';

import FlagBR from '~/icons/flagBR.svg';
import FlagUS from '~/icons/flagUS.svg';

export const Header: React.FC = function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  const t = useTranslations('header');

  return (
    <Box
      as="header"
      position="absolute"
      width="100vw"
      display="flex"
      alignItems="center"
      height="16"
      justifyContent="space-between"
      paddingLeft="20%"
      paddingRight="20%"
    >
      <Box>
        <NextLink href="/">
          <Button variant="ghost">{t('home')}</Button>
        </NextLink>
        <NextLink href="/blog">
          <Button variant="ghost">{t('blog')}</Button>
        </NextLink>
        <NextLink href="/about">
          <Button variant="ghost">{t('about')}</Button>
        </NextLink>
      </Box>
      <Box>
        <NextLink href={router.pathname} locale={router.locale === 'en' ? 'pt' : 'en'}>
          <Button variant="ghost">
            {router.locale === 'en' ? <FlagBR height="20px" /> : <FlagUS height="20px" />}
          </Button>
        </NextLink>
        <Button onClick={() => toggleColorMode()} variant="ghost">
          {colorMode === 'dark' ? <FaSun /> : <FaMoon />}
        </Button>
      </Box>
    </Box>
  );
};
