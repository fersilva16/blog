import { screen } from '@testing-library/react';
import { getPage } from 'next-page-tester';

it('renders 500 page', async () => {
  const { render } = await getPage({
    route: '/500',
  });

  render();

  expect(screen.getByText('500')).toBeVisible();

  const backToHomeLink = screen.getByText('Back to Home!');

  expect(backToHomeLink).toBeVisible();
  expect(backToHomeLink).toHaveAttribute('href', '/');
});
