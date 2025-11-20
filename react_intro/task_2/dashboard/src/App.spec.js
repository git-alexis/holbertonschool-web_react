import { render, screen } from '@testing-library/react';
import App from './App.jsx';

describe('App component', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders the h1 with text "School dashboard"', () => {
    const heading = screen.getByRole('heading', { level: 1, name: /school dashboard/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders the correct text in app-body and app-footer', () => {
    const bodyText = screen.getByText(/login to access the full dashboard/i);
    const footerText = screen.getByText(new RegExp(`Copyright ${new Date().getFullYear()} - holberton School`, 'i'));
    expect(bodyText).toBeInTheDocument();
    expect(footerText).toBeInTheDocument();
  });

  test('renders an image with alt text "holberton logo"', () => {
    const logo = screen.getByAltText(/holberton logo/i);
    expect(logo).toBeInTheDocument();
  });

  test("renders 2 input elements for email and password", () => {
    const inputs = screen.getAllByRole('textbox');
    const passwordInput = screen.getByLabelText(/password/i);
    expect(inputs.length).toBe(1);
    expect(passwordInput).toBeInTheDocument();
  });

  test("renders 2 label elements with Email and Password", () => {
    const emailLabel = screen.getByLabelText(/email/i);
    const passwordLabel = screen.getByLabelText(/password/i);
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
  });

  test("renders a button with text OK", () => {
    const buttonText = screen.getByRole('button', { name: /ok/i });
    expect(buttonText).toBeInTheDocument();
  });
});
