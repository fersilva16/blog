import styled from '@emotion/styled';
import { DateTime } from 'luxon';
import {
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';

import { Center } from '../../components/ui/Center';
import { getIntlMessages } from '../../lib/intl/getIntlMessages';
import { Frontmatter } from '../../lib/posts/Frontmatter';
import { getFilename } from '../../lib/posts/getFilename';
import { getPost } from '../../lib/posts/getPost';
import { getSlugs } from '../../lib/posts/getSlugs';

export type PostParams = {
  slug: string;
};

export type PostProps = {
  slug: string;
  frontmatter: Frontmatter | null;
  content: string | null;
};

const PostHeader = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const Post = ({ frontmatter, content }: PostProps) => {
  const t = useTranslations();
  const router = useRouter();

  if (!frontmatter || !content) {
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
        {DateTime.fromISO(frontmatter.date).toFormat('DDDD')}
        <div>{frontmatter.tags.map((tag) => `#${tag}`).join(', ')}</div>
      </PostHeader>
      <ReactMarkdown>{content}</ReactMarkdown>
    </>
  );
};

export const getStaticProps = async ({
  locale,
  params,
}: GetStaticPropsContext<PostParams>): Promise<
  GetStaticPropsResult<PostProps & { messages: unknown }>
> => {
  if (!params?.slug) {
    return {
      notFound: true,
    };
  }

  const messages = await getIntlMessages(locale);

  const { frontmatter, content } = await getPost(
    getFilename(params.slug),
    locale
  );

  return {
    props: {
      slug: params.slug,
      frontmatter,
      content,
      messages,
    },
  };
};

export const getStaticPaths = async ({
  locales,
}: GetStaticPathsContext): Promise<GetStaticPathsResult<PostParams>> => {
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
