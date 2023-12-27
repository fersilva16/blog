import type { APIRoute } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import satori, { type SatoriOptions } from 'satori';
import fs from 'node:fs';
import path from 'node:path';
import { Resvg } from '@resvg/resvg-js';

import { post } from './_post';

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

const merriweatherRegularFontFile = await fetch(
  'https://www.1001fonts.com/download/font/merriweather.regular.ttf',
);
const merriweatherRegularFont = await merriweatherRegularFontFile.arrayBuffer();

const options: SatoriOptions = {
  width: 1200,
  height: 630,
  fonts: [
    {
      name: 'Merriweather',
      data: merriweatherRegularFont,
    },
  ],
};

export const GET: APIRoute<CollectionEntry<'blog'>> = async ({ props }) => {
  const svg = await satori(post(props), options);
  const png = svgBufferToPngBuffer(svg);

  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
