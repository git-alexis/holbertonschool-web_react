import {render, screen} from '@testing-library/react'
import Footer from './Footer.jsx'
import * as myModule from '../utils/utils.js'

describe("Footer component", () => {
  test("renders footer", () => {
    render(<Footer />)
  });

  test("renders the correct footer paragraph with true", () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    const paragraph = screen.getByText(`Copyright ${currentYear} - Holberton School`)
    expect(paragraph).toBeInTheDocument()
  })
})
