import { render, screen } from '@testing-library/react';
import App from './App.jsx';

describe('App component', () => {
  test("renders 2 input elements for email and password", () => {
    render(<App />);
    const inputs = screen.getAllByRole('textbox');
    const passwordInput = screen.getByLabelText(/password/i);
    expect(inputs.length).toBe(1);
    expect(passwordInput).toBeInTheDocument();
  });

  test("renders 2 label elements with Email and Password", () => {
    render(<App />);
    const emailLabel = screen.getByLabelText(/email/i);
    const passwordLabel = screen.getByLabelText(/password/i);
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
  });

  test("renders a button with text OK", () => {
    render(<App />);
    const buttonText = screen.getByRole('button', { name: /ok/i });
    expect(buttonText).toBeInTheDocument();
  });
});
