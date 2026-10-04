import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

jest.mock('./assets/close-button.png', () => 'close-button.png');
jest.mock('./Notifications.css', () => ({}));

describe('Notifications component', () => {
  test("<Notifications /> is rendered without crashing", () => {
    render(<Notifications />);
  });

  test("renders the notifications title", () => {
    render(<Notifications />);
    expect(
      screen.getByText(/here is the list of notifications/i)
    ).toBeInTheDocument();
  });

  test("renders the close button", () => {
    render(<Notifications />);
    expect(
      screen.getByRole('button')
    ).toBeInTheDocument();
  });

  test("renders 3 list items", () => {
    render(<Notifications />);
    const notifications = screen.getAllByRole('listitem');
    expect(notifications).toHaveLength(3);
  });

  test("logs a message when the close button is clicked", () => {
    const consoleSpy = jest
      .spyOn(console, 'log')
      .mockImplementation(() => {});
    try {
      render(<Notifications />);
      const button = screen.getByRole('button');
      fireEvent.click(button);
      expect(consoleSpy).toHaveBeenCalledWith(
        'Close button has been clicked'
      );
    } finally {
      consoleSpy.mockRestore();
    }
  });
});
