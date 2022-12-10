import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import FooterShowcase from '../FooterShowcase';
import { MemoryRouter } from 'react-router-dom';

test('Should render footer component', () => {
  render(
    <MemoryRouter>
      <FooterShowcase />
    </MemoryRouter>
  );
  const footerShowcaseElement = screen.getByTestId('footer-showecase-1');
  expect(footerShowcaseElement).toBeInTheDocument();
});
