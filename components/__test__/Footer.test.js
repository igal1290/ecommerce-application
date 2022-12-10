import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../Footer';
import { MemoryRouter } from 'react-router-dom';

test('Should render footer component', () => {
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );
  const footerElement = screen.getByTestId('footer-1');
  expect(footerElement).toBeInTheDocument();
});
