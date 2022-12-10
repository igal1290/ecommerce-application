import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Product from '../Product';
import { MemoryRouter } from 'react-router-dom';

test('Should render footer component', () => {
  render(
    <MemoryRouter>
      <Product />
    </MemoryRouter>
  );
  const productElement = screen.getByTestId('product-1');
  expect(productElement).toBeInTheDocument();
});
