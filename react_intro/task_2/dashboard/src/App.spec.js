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
    const inputs = screen.getAllByRole("textbox", { name: /email|password/i });
    expect(inputs).toHaveLength(2);
  });

  test("renders 2 label elements with Email and Password", () => {
    const labels = screen.getAllByText(/email|password/i);
    expect(labels).toHaveLength(2);
  });

  test("renders a button with text OK", () => {
    expect(screen.getByRole("button", { name: /ok/i })).toBeInTheDocument();
  });
});
