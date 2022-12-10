import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../Navbar';
import { MemoryRouter } from 'react-router-dom';

test('Should render footer component', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  const navbarElement = screen.getByTestId('navbar-1');
  expect(navbarElement).toBeInTheDocument();
});
