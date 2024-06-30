import fs from 'node:fs';
import type { APIRoute } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import satori, { type SatoriOptions } from 'satori';
import { Resvg } from '@resvg/resvg-js';

import PostOG from '../../../components/PostOG';

export const getStaticPaths = async () => {
  const posts = await getCollection('blog');

  return posts.map((post) => ({
    params: {
      slug: post.slug,
    },
    props: post,
  }));
};

const svgBufferToPngBuffer = (svg: string) => {
  const resvg = new Resvg(svg);
  const png = resvg.render();
  return png.asPng();
};
const cascadiaCodeRegularFont = fs.readFileSync(
  'public/fonts/CascadiaCode-Regular.ttf',
).buffer;

const cascadiaCodeBoldFont = fs.readFileSync(
  'public/fonts/CascadiaCode-Bold.ttf',
).buffer;

const options: SatoriOptions = {
  width: 1200,
  height: 630,
  fonts: [
    {
      name: 'CascadiaCode',
      data: cascadiaCodeRegularFont,
      style: 'normal',
      weight: 400,
    },
    {
      name: 'CascadiaCode',
      data: cascadiaCodeBoldFont,
      style: 'normal',
      weight: 700,
    },
  ],
};

export const GET: APIRoute<CollectionEntry<'blog'>> = async ({ props }) => {
  const svg = await satori(PostOG(props), options);
  const png = svgBufferToPngBuffer(svg);

  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
