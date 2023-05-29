import { screen } from '@testing-library/react';
import { getPage } from 'next-page-tester';

it.skip('renders Header', async () => {
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
});
