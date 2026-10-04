import { render, screen } from '@testing-library/react';
import App from './App.jsx';

describe("App component", () => {
  test("renders app", () => {
    render(<App />);
  });
})
