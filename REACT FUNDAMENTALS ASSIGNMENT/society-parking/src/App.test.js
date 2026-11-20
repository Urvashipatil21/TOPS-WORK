import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('3 cars in, 1 car out, and 5 bikes in results in 2 parked cars, 5 parked bikes, and ₹110 fee collected', () => {
  render(<App />);

  // Buttons for Cars and Bikes
  const carInBtn = screen.getByRole('button', { name: /Car In/i });
  const carOutBtn = screen.getByRole('button', { name: /Car Out/i });
  const bikeInBtn = screen.getByRole('button', { name: /Bike In/i });

  // 1. 3 cars in
  fireEvent.click(carInBtn);
  fireEvent.click(carInBtn);
  fireEvent.click(carInBtn);

  // 2. 1 car out
  fireEvent.click(carOutBtn);

  // 3. 5 bikes in
  fireEvent.click(bikeInBtn);
  fireEvent.click(bikeInBtn);
  fireEvent.click(bikeInBtn);
  fireEvent.click(bikeInBtn);
  fireEvent.click(bikeInBtn);

  // Assertions:
  // Parked cars: 2 / 20
  expect(screen.getByText(/Cars parked:/i).parentElement).toHaveTextContent('Cars parked: 2 / 20');

  // Parked bikes: 5 / 30
  expect(screen.getByText(/Bikes parked:/i).parentElement).toHaveTextContent('Bikes parked: 5 / 30');

  // Total fee collected: ₹110 (3 car entries * 20 = 60 + 5 bike entries * 10 = 50 => 110)
  expect(screen.getByText(/Total Fee Collected:/i).parentElement).toHaveTextContent('Total Fee Collected: ₹110');
});

test('Reset Day button resets all four values back to 0', () => {
  render(<App />);

  const carInBtn = screen.getByRole('button', { name: /Car In/i });
  const bikeInBtn = screen.getByRole('button', { name: /Bike In/i });
  const resetBtn = screen.getByRole('button', { name: /Reset Day/i });

  // Park vehicles
  fireEvent.click(carInBtn);
  fireEvent.click(bikeInBtn);

  // Click Reset Day
  fireEvent.click(resetBtn);

  // Assertions: all 4 values back to 0
  expect(screen.getByText(/Cars parked:/i).parentElement).toHaveTextContent('Cars parked: 0 / 20');
  expect(screen.getByText(/Bikes parked:/i).parentElement).toHaveTextContent('Bikes parked: 0 / 30');
  expect(screen.getByText(/Today's car entries:/i).parentElement).toHaveTextContent("Today's car entries: 0");
  expect(screen.getByText(/Today's bike entries:/i).parentElement).toHaveTextContent("Today's bike entries: 0");
  expect(screen.getByText(/Total Fee Collected:/i).parentElement).toHaveTextContent('Total Fee Collected: ₹0');
});
