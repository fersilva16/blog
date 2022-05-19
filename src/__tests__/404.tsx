import { screen } from '@testing-library/react';
import { getPage } from 'next-page-tester';

it('renders 404 page', async () => {
  const { render } = await getPage({
    route: '/404',
  });

  render();

  expect(screen.getByText('404')).toBeVisible();

  const backToHomeLink = screen.getByText('Back to Home!');

  expect(backToHomeLink).toBeVisible();
  expect(backToHomeLink).toHaveAttribute('href', '/');
});
