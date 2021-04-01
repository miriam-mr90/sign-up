import { render, screen } from '@testing-library/react';
import App from './App';

test('renders React APP text', () => {
  render(<App />);
  const textElement = screen.getByText(/React APP/i);
  expect(textElement).toBeInTheDocument();
});
