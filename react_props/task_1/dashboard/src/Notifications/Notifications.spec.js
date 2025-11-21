import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications.jsx';

describe('Notifications component', () => {
  test('renders the notifications title', () => {
    render(<Notifications />);
    const title = screen.getByText(/here is the list of notifications/i);
    expect(title).toBeInTheDocument();
  });

  test('renders the close button', () => {
    render(<Notifications />);
	const boutonNotification = screen.getByTestId("boutonNotification")
    expect(boutonNotification).toBeInTheDocument()
  });

  test('renders 3 list items', () => {
    render(<Notifications />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(3);
  });

  test('clicking the close button logs to the console', () => {
    render(<Notifications />);
    const boutonNotification = screen.getByTestId("boutonNotification");
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    fireEvent.click(boutonNotification);
    expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');

    consoleSpy.mockRestore();
  });
});
