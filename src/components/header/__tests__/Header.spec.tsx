import { screen } from '@testing-library/react';
import { getPage } from 'next-page-tester';

it('renders Header', async () => {
  const { render } = await getPage({
    route: '/',
  });

  render();

  const nameLink = screen.getByText('Fernando');

  expect(nameLink).toBeVisible();
  expect(nameLink).toHaveAttribute('href', '/');

  const homeLink = screen.getByText('Home');

  expect(homeLink).toBeVisible();
  expect(homeLink).toHaveAttribute('href', '/');

  const aboutLink = screen.getByText('About');

  expect(aboutLink).toBeVisible();
  expect(aboutLink).toHaveAttribute('href', '/about');
});
