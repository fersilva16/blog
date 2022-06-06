import styled from '@emotion/styled';
import { DateTime } from 'luxon';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { Center } from '../../components/ui/Center';
import { getIntlMessages } from '../../lib/intl/getIntlMessages';
import { Frontmatter, getFilename, getPost, getSlugs } from '../../lib/mdx/getPosts';

export type PostParams = {
  slug: string;
};

export type PostProps = {
  slug: string;
  code: string | null;
  frontmatter: Frontmatter | null;
};

const PostHeader = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const Post = ({ frontmatter, code }: PostProps) => {
  const t = useTranslations();
  const router = useRouter();
  const Content = useMemo(() => code && getMDXComponent(code), [code]);

  if (!code || !frontmatter || !Content) {
    return (
      <Center>
        <h1>
          {t('This post is not available in')}{' '}
          {router.locale === 'en' ? t('english') : t('portuguese')}
        </h1>
        <Link href={router.asPath} locale={'en'}>
          {t('View in English')}
        </Link>
      </Center>
    );
  }

  return (
    <>
      <PostHeader>
        {DateTime.fromFormat(frontmatter.date, 'yyyy-MM-dd').toFormat('DDDD')}
        <div>{frontmatter.tags.map((tag) => `#${tag}`).join(', ')}</div>
      </PostHeader>
      <Content />
    </>
  );
};

export const getStaticProps: GetStaticProps<PostProps, PostParams> = async ({ locale, params }) => {
  if (!params?.slug) {
    return {
      notFound: true,
    };
  }

  const messages = await getIntlMessages(locale);

  const { code, frontmatter } = await getPost(getFilename(params.slug), locale);

  return {
    props: {
      slug: params.slug,
      code,
      frontmatter,
      messages,
    },
  };
};

export const getStaticPaths: GetStaticPaths<PostParams> = async ({ locales }) => {
  if (!locales) throw new Error('No locales');

  const posts = await getSlugs();

  const paths = posts
    .map((slug) =>
      locales.map((locale) => ({
        params: {
          slug,
        },
        locale,
      }))
    )
    .flat();

  return {
    paths,
    fallback: false,
  };
};

export default Post;
