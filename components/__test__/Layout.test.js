import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from '../Layout';
import { MemoryRouter } from 'react-router-dom';

test('Should render footer component', () => {
  render(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>
  );
  const layoutElement = screen.getByTestId('layout-1');
  expect(layoutElement).toBeInTheDocument();
});
