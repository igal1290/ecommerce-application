import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../Hero';
import { MemoryRouter } from 'react-router-dom';

test('Should render footer component', () => {
  render(
    <MemoryRouter>
      <Hero />
    </MemoryRouter>
  );
  const heroElement = screen.getByTestId('hero-1');
  expect(heroElement).toBeInTheDocument();
});
