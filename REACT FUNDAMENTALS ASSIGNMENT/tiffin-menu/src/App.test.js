import { render, screen } from '@testing-library/react';
import App from './App';

test('renders tiffin service heading, menu list, subscription plans, delivery info, and order note', () => {
  render(<App />);

  // Header check
  const headingElements = screen.getAllByText(/Shreeji Tiffin Services/i);
  expect(headingElements.length).toBeGreaterThan(0);

  // MenuList check
  const menuHeading = screen.getByText(/Today's Thali/i);
  expect(menuHeading).toBeInTheDocument();

  // Subscription plans check
  expect(screen.getByText(/Weekly Plan/i)).toBeInTheDocument();
  expect(screen.getByText(/Fortnight Plan/i)).toBeInTheDocument();
  expect(screen.getByText(/Monthly Plan/i)).toBeInTheDocument();

  // Total price checks (6 * 90 = 540, 12 * 88 = 1056, 26 * 85 = 2210)
  expect(screen.getByText(/₹540/i)).toBeInTheDocument();
  expect(screen.getByText(/₹1056/i)).toBeInTheDocument();
  expect(screen.getByText(/₹2210/i)).toBeInTheDocument();

  // DeliveryInfo check
  const deliveryHeading = screen.getByText(/Delivery Areas/i);
  expect(deliveryHeading).toBeInTheDocument();

  // OrderNote check
  const minOrder = screen.getByText(/₹180/i);
  expect(minOrder).toBeInTheDocument();
});
