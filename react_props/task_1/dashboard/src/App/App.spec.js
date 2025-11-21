import { render, screen } from '@testing-library/react';
import Notifications from '../Notifications/Notifications.jsx' 
import Header from '../Header/Header.jsx'
import Login from '../Login/Login.jsx'
import Footer from '../Footer/Footer.jsx'

describe('App component', () => {
  test("renders the notifications", () => {
    render(<Notifications />)
    const notification = screen.getByText(/Here is the list of notifications/i)
    expect(notification).toBeInTheDocument()
  })

  test("renders the header", () => {
    render(<Header />)
    const header = screen.getByRole("heading")
    expect(header).toBeInTheDocument()
  })

  test("renders the login", () => {
    render(<Login />)
    const login = screen.getByText(/Login to access the full dashboard/i)
    expect(login).toBeInTheDocument()
  })

  test("renders the footer", () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    const footer = screen.getByText(`Copyright ${currentYear} - Holberton School main dashboard`)
    expect(footer).toBeInTheDocument()
  })
});
