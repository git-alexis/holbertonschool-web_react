import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login.jsx'

describe("Login component", () => {
  test("renders login", () => {
    render(<Login />)
  });

  test('renders 2 labels, 2 inputs, and 1 button', () => {
    const { container } = render(<Login />);
    const labels = container.querySelectorAll('label');
    const inputs = container.querySelectorAll('input');
    const button = screen.getByRole('button');
    expect(labels.length).toBe(2);
    expect(inputs.length).toBe(2);
    expect(button).toBeInTheDocument();
  });

  test('focuses the related input when a label is clicked', () => {
    render(<Login />);
    const emailLabel = screen.getByText(/email/i);
    const passwordLabel = screen.getByText(/password/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    fireEvent.click(emailLabel);
    expect(emailInput).toHaveFocus();
    fireEvent.click(passwordLabel);
    expect(passwordInput).toHaveFocus();
  });
})
