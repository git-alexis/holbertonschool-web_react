import {render, screen} from '@testing-library/react'
import Header from './Header.jsx'

describe("Header component", () => {
  test("renders header", () => {
    render(<Header />)
  });

  test("renders the title", () => {
      render(<Header />)
      const title = screen.getByRole("heading")
      expect(title).toBeInTheDocument()
  })

  test("renders the image", () => {
    render(<Header />)
    const image = screen.getByAltText("holberton logo")
    expect(image).toBeInTheDocument()
  })
})
