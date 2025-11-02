import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header name', () => {
  render(<App />);
  const nameElement = screen.getByRole('heading', { name: /Theophile Lundenge Lelu/i });
  expect(nameElement).toBeInTheDocument();
});
