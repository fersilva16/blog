import styled from '@emotion/styled';
import { DateTime } from 'luxon';
import type { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import Link from 'next/link';

import { Separator } from '../components/ui/Separator';
import { metadata } from '../data/metadata';
import { getIntlMessages } from '../lib/intl/getIntlMessages';
import type { IntlPost, Post } from '../lib/posts/Post';
import { getPosts } from '../lib/posts/posts';

export type HomeProps = {
  posts: Post[];
};

const PostSeparator = styled.div`
  border-top: 1px solid #eaeaea;
`;

const PostPreviewContainer = styled.div`
  padding: 20px 10px;

  &:hover {
    background-color: #fafafa;
    cursor: pointer;
  }
`;

const PostPreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const PostPreviewTags = styled.p`
  margin: 0;
`;

const Home = ({ posts }: HomeProps) => {
  const t = useTranslations();

  return (
    <>
      <Head>
        <title>Fernando Silva</title>
      </Head>

      <div>
        <h1>Fernando Silva</h1>
        <h2>{t('Self-taught Full Stack Developer from Brazil')}</h2>

        <div>
          <Link href={metadata.githubUrl}>GitHub</Link>
          <Separator />
          <Link href={metadata.twitterUrl}>Twitter</Link>
          <Separator />
          <Link href={metadata.discordUrl}>Discord</Link>
          <Separator />
          <Link href={metadata.devtoUrl}>Dev.to</Link>
          <Separator />
          <Link href={metadata.linkedinUrl}>LinkedIn</Link>
          <Separator />
          <Link href={metadata.emailLink}>{t('Email')}</Link>
        </div>

        <div>
          <h1>Posts</h1>
          {posts.map(({ slug, frontmatter }, index) => (
            <>
              {index !== 0 && <PostSeparator key={index} />}
              <Link key={slug} href={`posts/${slug}`}>
                <PostPreviewContainer>
                  <PostPreviewHeader>
                    <h2>{frontmatter.title}</h2>

                    <p>{DateTime.fromISO(frontmatter.date).toFormat('DDDD')}</p>
                  </PostPreviewHeader>

                  <PostPreviewTags>
                    {frontmatter.tags.map((tag) => `#${tag}`).join(', ')}
                  </PostPreviewTags>
                </PostPreviewContainer>
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async ({
  locale,
}: GetStaticPropsContext): Promise<
  GetStaticPropsResult<HomeProps & { messages: unknown }>
> => {
  const messages = await getIntlMessages(locale);

  const posts = await getPosts();

  const localePost = Array.from(posts.values())
    .map((post) => post[locale as keyof IntlPost])
    .filter((post): post is Post => !!post.slug);

  const publishedPosts = localePost.filter((post) => !post.frontmatter.draft);

  const sortedPosts = publishedPosts.sort((postA, postB) => {
    const dateA = DateTime.fromISO(postA.frontmatter.date);
    const dateB = DateTime.fromISO(postB.frontmatter.date);

    return dateB.toMillis() - dateA.toMillis();
  });

  return {
    props: {
      posts: sortedPosts,
      messages,
    },
  };
};

export default Home;
