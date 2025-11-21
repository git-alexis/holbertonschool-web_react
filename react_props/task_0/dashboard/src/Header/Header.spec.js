import {render, screen} from '@testing-library/react'
import Header from './Header.jsx'

describe("Header component", () => {
  test("renders header", () => {
    render(<Header />)
  });
})
