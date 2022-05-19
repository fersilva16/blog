import { screen } from '@testing-library/react';
import { getPage } from 'next-page-tester';

it('renders Header', async () => {
  const { render } = await getPage({
    route: '/',
  });

  render();

  const homeLink = screen.getByText('Home');

  expect(homeLink).toBeVisible();
  expect(homeLink).toHaveAttribute('href', '/');

  const blogLink = screen.getByText('Blog');

  expect(blogLink).toBeVisible();
  expect(blogLink).toHaveAttribute('href', '/blog');

  const aboutLink = screen.getByText('About');

  expect(aboutLink).toBeVisible();
  expect(aboutLink).toHaveAttribute('href', '/about');
});
