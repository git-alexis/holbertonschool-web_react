import {render, screen} from '@testing-library/react'
import Login from './Login.jsx'
import userEvent from '@testing-library/user-event'

describe("Login component", () => {
  it("renders the input elements", () => {
    render(<Login />)
    const email = screen.getByTestId("email")
    const password = screen.getByTestId("password")
    expect(email).toBeInTheDocument()
    expect(password).toBeInTheDocument()
  })

  it("renders the labels", () => {
    render(<Login />)
    const email = screen.getByText("Email")
    const password = screen.getByText("Password")
    expect(email).toBeInTheDocument()
    expect(password).toBeInTheDocument()
  })

  it("renders the button", () => {
    render(<Login />)
    const boutonLogin = screen.getByTestId("boutonLogin")
    expect(boutonLogin).toBeInTheDocument()
    expect(boutonLogin.textContent).toMatch("OK")
  })

  it("Focus on password input if Password label is clicked", async () => {
    render(<Login />)
    const event = userEvent.setup()
    const input = screen.getByTestId("password")
    await event.click(screen.getByLabelText("Password"))
    expect(input).toBe(document.activeElement)
  })
})
