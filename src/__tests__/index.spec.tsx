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

  const githubLink = screen.getByLabelText('github');

  expect(githubLink).toBeVisible();
  expect(githubLink).toHaveAttribute('href', metadata.githubUrl);

  const twitterLink = screen.getByLabelText('twitter');

  expect(twitterLink).toBeVisible();
  expect(twitterLink).toHaveAttribute('href', metadata.twitterUrl);

  const discordLink = screen.getByLabelText('discord');

  expect(discordLink).toBeVisible();
  expect(discordLink).toHaveAttribute('href', metadata.discordUrl);

  const devtoLink = screen.getByLabelText('dev.to');

  expect(devtoLink).toBeVisible();
  expect(devtoLink).toHaveAttribute('href', metadata.devtoUrl);

  const linkedinLink = screen.getByLabelText('linkedin');

  expect(linkedinLink).toBeVisible();
  expect(linkedinLink).toHaveAttribute('href', metadata.linkedinUrl);

  const emailLink = screen.getByLabelText('email');

  expect(emailLink).toBeVisible();
  expect(emailLink).toHaveAttribute('href', metadata.emailLink);
});
