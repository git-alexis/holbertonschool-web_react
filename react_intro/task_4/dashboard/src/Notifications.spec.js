import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test("renders the notifications title", () => {
    render(<Notifications />);
    const title = screen.getByText(/here is the list of notifications/i);
    expect(title).toBeInTheDocument();
  });

  test("renders the close button", () => {
    render(<Notifications />);
    const button = screen.getByRole('button', { name: /close/i });
    expect(button).toBeInTheDocument();
  });

  test("renders 3 list items", () => {
    render(<Notifications />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(3);
  });

  test("logs a message when the close button is clicked", () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<Notifications />);
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringMatching(/close button has been clicked/i)
    );
    consoleSpy.mockRestore();
  });
});
