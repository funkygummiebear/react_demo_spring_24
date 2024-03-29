import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders less than 50', () => {
  render(<App count={25}/>);
  const linkElement = screen.getByText(/Navbar/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders app at 50', () => {
  render(<App count={50}/>);
  const linkElement = screen.getByText(/pricing/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders more than 50', () => {
  render(<App count={55}/>);
  const linkElement = screen.getByText(/pricing/i);
  expect(linkElement).toBeInTheDocument();
});
