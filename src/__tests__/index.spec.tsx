import { screen } from '@testing-library/react';
import { getPage } from 'next-page-tester';

import { metadata } from '~/data/metadata';

it('renders home page', async () => {
  const { render } = await getPage({
    route: '/',
  });

  render();

  expect(screen.getByText('Fernando Silva')).toBeVisible();
  expect(
    screen.getByText('Self-taught Full Stack Developer from Brazil')
  ).toBeVisible();

  const githubLink = screen.getByText('GitHub');

  expect(githubLink).toBeVisible();
  expect(githubLink).toHaveAttribute('href', metadata.githubUrl);

  const twitterLink = screen.getByText('Twitter');

  expect(twitterLink).toBeVisible();
  expect(twitterLink).toHaveAttribute('href', metadata.twitterUrl);

  const discordLink = screen.getByText('Discord');

  expect(discordLink).toBeVisible();
  expect(discordLink).toHaveAttribute('href', metadata.discordUrl);

  const devtoLink = screen.getByText('Dev.to');

  expect(devtoLink).toBeVisible();
  expect(devtoLink).toHaveAttribute('href', metadata.devtoUrl);

  const linkedinLink = screen.getByText('LinkedIn');

  expect(linkedinLink).toBeVisible();
  expect(linkedinLink).toHaveAttribute('href', metadata.linkedinUrl);

  const emailLink = screen.getByText('Email');

  expect(emailLink).toBeVisible();
  expect(emailLink).toHaveAttribute('href', metadata.emailLink);
});
