import {render, screen} from '@testing-library/react'
import Header from './Header.jsx'

describe("Header component", () => {
  test("renders header", () => {
    render(<Header />)
  });

  test("renders the image", () => {
    render(<Header />)
    const logo = screen.getByAltText(/holberton logo/i);
    expect(logo).toBeInTheDocument();
  })

  test("renders the title", () => {
    render(<Header />)
    const heading = screen.getByRole('heading', {level: 1, name: /school dashboard/i});
    expect(heading).toBeInTheDocument();
  })
})
