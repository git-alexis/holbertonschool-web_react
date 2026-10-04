import {render, screen} from '@testing-library/react'
import Footer from './Footer.jsx'

describe("Footer component", () => {
  test("renders footer", () => {
    render(<Footer />)
  });

  test('renders the copyright with the current year and Holberton School', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const copyright = screen.getByText(
      new RegExp(`copyright ${currentYear} - holberton school`, 'i')
    );
    expect(copyright).toBeInTheDocument();
  });
})
