import {render, screen} from '@testing-library/react'
import Footer from './Footer.jsx'

describe("Footer component", () => {
  test("renders footer", () => {
    render(<Footer />)
  });
})
