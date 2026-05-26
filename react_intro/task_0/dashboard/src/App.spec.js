import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders the h1 with text "School dashboard"', () => {
    const heading = screen.getByRole('heading', {
      level: 1,
      name: /School dashboard/i,
    });

    expect(heading).toBeInTheDocument();
  });

  test('renders the correct text in app-body and app-footer', () => {
    const bodyText = screen.getByText(
      /Login to access the full dashboard/i,
    );

    const footerText = screen.getByText(
      new RegExp(
        `Copyright ${new Date().getFullYear()} - holberton School`,
        'i',
      ),
    );

    expect(bodyText).toBeInTheDocument();
    expect(footerText).toBeInTheDocument();
  });

  test('renders an image with alt text "holberton logo"', () => {
    const logo = screen.getByAltText(/holberton logo/i);

    expect(logo).toBeInTheDocument();
  });
});
