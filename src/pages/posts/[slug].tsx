import styled from '@emotion/styled';
import { DateTime } from 'luxon';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useMemo } from 'react';

import { getIntlMessages } from '../../intl/getIntlMessages';
import { Frontmatter, getFilename, getPost, getSlugs } from '../../lib/mdx/getPosts';

export type PostParams = {
  slug: string;
};

export type PostProps = {
  slug: string;
  code: string;
  frontmatter: Frontmatter;
};

const PostHeader = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const Post = ({ frontmatter, code }: PostProps) => {
  const Content = useMemo(() => getMDXComponent(code), [code]);

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
  const { code, frontmatter } = await getPost(getFilename(params.slug));

  return {
    props: {
      slug: params.slug,
      code,
      frontmatter,
      messages,
    },
  };
};

export const getStaticPaths: GetStaticPaths<PostParams> = async () => {
  const posts = await getSlugs();

  const paths = posts.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default Post;
