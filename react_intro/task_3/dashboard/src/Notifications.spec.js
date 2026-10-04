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
    const closeIcon = screen.getByAltText(/close icon/i);
    expect(button).toBeInTheDocument();
    expect(closeIcon).toBeInTheDocument();
  });

  test("renders 3 list items", () => {
    render(<Notifications />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(3);
    expect(listItems[0]).toHaveAttribute('data-priority', 'default');
    expect(listItems[1]).toHaveAttribute('data-priority', 'urgent');
    expect(listItems[2]).toHaveAttribute('data-priority', 'urgent');
  });

  test("renders the notification texts ignoring case", () => {
    render(<Notifications />);
    const courseNotification = screen.getByText(/new course available/i);
    const resumeNotification = screen.getByText(/new resume available/i);
    const urgentNotification = screen.getByText(/urgent requirement/i);
    expect(courseNotification).toBeInTheDocument();
    expect(resumeNotification).toBeInTheDocument();
    expect(urgentNotification).toBeInTheDocument();
  });

  test("logs a message when the close button is clicked", () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<Notifications />);
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');
    consoleSpy.mockRestore();
  });
});
