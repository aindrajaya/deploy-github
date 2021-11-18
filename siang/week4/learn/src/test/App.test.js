import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react kelas siang/i); //ngecek screen/layar browser
  expect(linkElement).toBeInTheDocument();
});
