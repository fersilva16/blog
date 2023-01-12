import styled from '@emotion/styled';
import { DateTime } from 'luxon';
import type {
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import ReactMarkdown from 'react-markdown';

import Code from '../../components/code/Code';
import HeadingList from '../../components/post/HeadingList';
import { Paragraph } from '../../components/post/markdown/Paragraph';
import { Center } from '../../components/ui/Center';
import { ContentContainer } from '../../components/ui/ContentContainer';
import { isDevelopment } from '../../lib/env/isDevelopment';
import { getIntlMessages } from '../../lib/intl/getIntlMessages';
import type { Frontmatter } from '../../lib/posts/Frontmatter';
import type { Heading } from '../../lib/posts/getHeadings';
import type { IntlPost } from '../../lib/posts/Post';
import { getPosts } from '../../lib/posts/posts';

export type PostParams = {
  slug: string;
};

export type PostProps = {
  slug: string;
  frontmatter: Frontmatter | null;
  content: string | null;
  headings: Heading[] | null;
};

const PostHeader = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const PostPage = ({ frontmatter, content, headings }: PostProps) => {
  const t = useTranslations();
  const router = useRouter();

  if (!frontmatter || !content || !headings) {
    return (
      <Center>
        <h1>{t('This post is not available in portuguese')}</h1>
        <Link href={router.asPath} locale={'en'}>
          {t('View in English')}
        </Link>
      </Center>
    );
  }

  return (
    <ContentContainer
      rightContent={isDevelopment() && <HeadingList headings={headings} />}
    >
      <PostHeader>
        {DateTime.fromISO(frontmatter.date).toFormat('DDDD')}
        <div>{frontmatter.tags.map((tag) => `#${tag}`).join(', ')}</div>
      </PostHeader>
      <ReactMarkdown
        components={{
          code: Code,
          p: (props) => <Paragraph {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </ContentContainer>
  );
};

export const getStaticProps = async ({
  locale,
  params,
}: GetStaticPropsContext<PostParams>): Promise<
  GetStaticPropsResult<PostProps & { messages: unknown }>
> => {
  if (!params?.slug || !locale) {
    return {
      notFound: true,
    };
  }

  const messages = await getIntlMessages(locale);
  const posts = await getPosts();

  const post = posts.get(params.slug) as IntlPost;

  const { frontmatter, content, headings } = post[locale as keyof IntlPost];

  return {
    props: {
      slug: params.slug,
      frontmatter,
      content,
      headings,
      messages,
    },
  };
};

export const getStaticPaths = async ({
  locales,
}: GetStaticPathsContext): Promise<GetStaticPathsResult<PostParams>> => {
  if (!locales) throw new Error('No locales');

  const posts = await getPosts();

  const paths = Array.from(posts.values())
    .filter((post) => !post.en.frontmatter.draft)
    .map((post) =>
      locales.map((locale) => ({
        params: {
          slug: post.en.slug,
        },
        locale,
      })),
    )
    .flat();

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
