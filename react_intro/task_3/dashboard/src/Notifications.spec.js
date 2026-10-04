import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test("renders the title and the close button", () => {
    render(<Notifications />);
    const title = screen.getByText(/here is the list of notifications/i);
    const closeButton = screen.getByRole('button', { name: /close/i });
    expect(title).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
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
      'Close button has been clicked'
    );

    consoleSpy.mockRestore();
  });
});
