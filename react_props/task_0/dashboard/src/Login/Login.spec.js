import {render, screen} from '@testing-library/react'
import Login from './Login.jsx'

describe("Login component", () => {
  test("renders login", () => {
    render(<Login />)
  });
})
