import {render, screen} from '@testing-library/react'
import Login from './Login.jsx'
import userEvent from '@testing-library/user-event'

describe("Login component", () => {
  it("renders the input elements", () => {
    render(<Login />)
    const twoInputs = screen.getAllByRole("textbox")
    twoInputs.map((input) => {expect(input).toBeInTheDocument()})
  })

  it("renders the labels", () => {
    render(<Login />)
    const email = screen.getByLabelText("Email")
    const password = screen.getByLabelText("Password")
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
