import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App';
import HostelBadge from './HostelBadge';

test('HostelBadge returns null when needsHostel is false, and badge when true', () => {
  const { container: emptyContainer } = render(<HostelBadge needsHostel={false} />);
  expect(emptyContainer).toBeEmptyDOMElement();

  const { container: badgeContainer } = render(<HostelBadge needsHostel={true} />);
  expect(within(badgeContainer).getByText(/Hostel/i)).toBeInTheDocument();
});

test('dynamically updates hostel rooms count when records are removed and shows empty state', () => {
  render(<App />);

  // Initial records: 6 total, 3 hostel rooms needed (Priya, Rohan, Diya)
  expect(screen.getByText(/Hostel rooms needed: 3/i)).toBeInTheDocument();
  expect(screen.getByText(/Registered Participants \(6\)/i)).toBeInTheDocument();

  // Find the list items
  let items = screen.getAllByRole('listitem');
  expect(items.length).toBe(6);

  // 1. Remove Priya Sharma (item index 1, needsHostel: true)
  const removePriyaBtn = within(items[1]).getByRole('button', { name: /Remove/i });
  fireEvent.click(removePriyaBtn);

  // Hostel rooms needed should decrease from 3 to 2
  expect(screen.getByText(/Hostel rooms needed: 2/i)).toBeInTheDocument();
  expect(screen.getByText(/Registered Participants \(5\)/i)).toBeInTheDocument();
  expect(screen.queryByText(/Priya Sharma/i)).toBeNull();

  // 2. Remove Aarav Patel (now item index 0, needsHostel: false)
  items = screen.getAllByRole('listitem');
  const removeAaravBtn = within(items[0]).getByRole('button', { name: /Remove/i });
  fireEvent.click(removeAaravBtn);

  // Hostel rooms needed should remain 2
  expect(screen.getByText(/Hostel rooms needed: 2/i)).toBeInTheDocument();
  expect(screen.getByText(/Registered Participants \(4\)/i)).toBeInTheDocument();
  expect(screen.queryByText(/Aarav Patel/i)).toBeNull();

  // 3. Remove all remaining records
  while (screen.queryAllByRole('button', { name: /Remove/i }).length > 0) {
    const btn = screen.getAllByRole('button', { name: /Remove/i })[0];
    fireEvent.click(btn);
  }

  // Verify empty state is displayed
  expect(screen.getByText(/Hostel rooms needed: 0/i)).toBeInTheDocument();
  expect(screen.getByText(/Registered Participants \(0\)/i)).toBeInTheDocument();
  expect(screen.getByText(/No registrations for All/i)).toBeInTheDocument();
});
