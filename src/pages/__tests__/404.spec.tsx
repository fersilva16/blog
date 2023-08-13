import { screen } from '@testing-library/react';
import { getPage } from 'next-page-tester';

it.skip('renders 404 page', async () => {
  const { render } = await getPage({
    route: '/404',
  });

  render();

  expect(screen.getByText('404')).toBeVisible();

  expect(screen.getByText('Ooppss!! Page Not Found!')).toBeVisible();
});
