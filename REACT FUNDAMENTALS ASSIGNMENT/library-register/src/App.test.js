import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';
import LiveClock from './LiveClock';

beforeEach(() => {
  localStorage.clear();
});

test('LiveClock sets up setInterval on mount and calls clearInterval on unmount', () => {
  jest.useFakeTimers();
  const clearIntervalSpy = jest.spyOn(global, 'clearInterval');

  const { unmount } = render(<LiveClock />);
  expect(screen.getByText(/Current Time:/i)).toBeInTheDocument();

  // Fast forward time
  act(() => {
    jest.advanceTimersByTime(2000);
  });

  // Unmount component to trigger cleanup function
  unmount();
  expect(clearIntervalSpy).toHaveBeenCalled();

  clearIntervalSpy.mockRestore();
  jest.useRealTimers();
});

test('conditionally mounts and unmounts LiveClock using "Show clock" checkbox', () => {
  render(<App />);

  const clockCheckbox = screen.getByLabelText(/Show clock/i);
  expect(clockCheckbox).not.toBeChecked();
  expect(screen.queryByText(/Current Time:/i)).toBeNull();

  // Check the box -> LiveClock mounts
  fireEvent.click(clockCheckbox);
  expect(clockCheckbox).toBeChecked();
  expect(screen.getByText(/Current Time:/i)).toBeInTheDocument();

  // Uncheck the box -> LiveClock unmounts
  fireEvent.click(clockCheckbox);
  expect(clockCheckbox).not.toBeChecked();
  expect(screen.queryByText(/Current Time:/i)).toBeNull();
});
