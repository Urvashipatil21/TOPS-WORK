import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import App from './App';

// Mock axios so tests run deterministically and fast
jest.mock('axios');

const mockNoticesBlockA = [
  { id: 1, userId: 1, title: 'Lift Maintenance Schedule', body: 'Lift 1 will be serviced on Monday.' },
  { id: 2, userId: 1, title: 'Society AGM Meeting', body: 'Annual meeting scheduled at 6 PM in clubhouse.' },
  { id: 3, userId: 1, title: 'Clubhouse Booking Rules', body: 'Please book 48 hours in advance.' },
  { id: 4, userId: 1, title: 'Garbage Segregation', body: 'Separate wet and dry waste before disposal.' },
  { id: 5, userId: 1, title: 'Water Tank Cleaning', body: 'Water supply stopped between 10 AM and 2 PM.' },
  { id: 6, userId: 1, title: 'Diwali Celebration', body: 'Community gathering on Saturday at 7 PM.' },
  { id: 7, userId: 1, title: 'Security Gate Pass', body: 'Download visitor gate pass on the society app.' },
  { id: 8, userId: 1, title: 'Gym Equipment Upgrade', body: 'New treadmills installed in the fitness center.' },
];

describe('Society Notice Board Error Handling Suite', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('successfully fetches 8 notices and handles finally loading reset', async () => {
    axios.get.mockResolvedValueOnce({ data: mockNoticesBlockA });

    render(<App />);

    expect(screen.getByText(/Loading notices.../i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText(/Loading notices.../i)).not.toBeInTheDocument();
    });

    expect(screen.getByText(/Showing 8 notices/i)).toBeInTheDocument();
    expect(screen.getByText(/Lift Maintenance Schedule/i)).toBeInTheDocument();
  });

  test('GET error with server response displays error box with Server problem (code 404)', async () => {
    // Mock server error (404 Not Found)
    const error404 = new Error('Request failed with status code 404');
    error404.response = { status: 404 };
    axios.get.mockRejectedValueOnce(error404);

    render(<App />);

    await waitFor(() => {
      expect(screen.queryByText(/Loading notices.../i)).not.toBeInTheDocument();
    });

    // Displays message in red error box instead of rendering the list
    expect(screen.getByText(/Could not load notices\. Check your internet\./i)).toBeInTheDocument();
    expect(screen.getByText(/Server problem \(code 404\)/i)).toBeInTheDocument();

    // The notices list should NOT be rendered
    expect(screen.queryByText(/Lift Maintenance Schedule/i)).not.toBeInTheDocument();

    // 'Try again' button is present
    expect(screen.getByRole('button', { name: /Try again/i })).toBeInTheDocument();
  });

  test('GET error without response displays No internet connection', async () => {
    // Mock network failure (no error.response)
    const networkError = new Error('Network Error');
    axios.get.mockRejectedValueOnce(networkError);

    render(<App />);

    await waitFor(() => {
      expect(screen.queryByText(/Loading notices.../i)).not.toBeInTheDocument();
    });

    expect(screen.getByText(/Could not load notices\. Check your internet\./i)).toBeInTheDocument();
    expect(screen.getByText(/No internet connection/i)).toBeInTheDocument();
  });

  test('clicking Try again button increments retryCount and reloads notices', async () => {
    // 1st request fails
    const networkError = new Error('Network Error');
    axios.get.mockRejectedValueOnce(networkError);

    render(<App />);

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /Try again/i })).toBeInTheDocument();
    });

    // 2nd request succeeds on retry
    axios.get.mockResolvedValueOnce({ data: mockNoticesBlockA });

    // Click Try again
    const retryBtn = screen.getByRole('button', { name: /Try again/i });
    fireEvent.click(retryBtn);

    // Should fetch again and display the notices
    await waitFor(() => {
      expect(screen.getByText(/Lift Maintenance Schedule/i)).toBeInTheDocument();
    });

    expect(screen.queryByText(/Could not load notices/i)).not.toBeInTheDocument();
  });

  test('POST failure preserves typed title and body and displays Server problem error message', async () => {
    axios.get.mockResolvedValueOnce({ data: mockNoticesBlockA });

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(/Showing 8 notices/i)).toBeInTheDocument();
    });

    // Mock POST failure with 500 Internal Server Error
    const error500 = new Error('Request failed with status code 500');
    error500.response = { status: 500 };
    axios.post.mockRejectedValueOnce(error500);

    const titleInput = screen.getByLabelText(/Notice Title:/i);
    const bodyInput = screen.getByLabelText(/Notice Body:/i);
    const submitBtn = screen.getByRole('button', { name: /Post Notice/i });

    fireEvent.change(titleInput, { target: { value: 'Intercom Repair' } });
    fireEvent.change(bodyInput, { target: { value: 'Technician will visit tomorrow morning.' } });
    fireEvent.click(submitBtn);

    // Verify error message is shown
    await waitFor(() => {
      expect(screen.getByText(/Notice could not be posted: Server problem \(code 500\)/i)).toBeInTheDocument();
    });

    // Constraint: Form inputs must remain intact on failure!
    expect(titleInput.value).toBe('Intercom Repair');
    expect(bodyInput.value).toBe('Technician will visit tomorrow morning.');
  });

  test('POST failure on network error preserves typed values and shows No internet connection', async () => {
    axios.get.mockResolvedValueOnce({ data: mockNoticesBlockA });

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(/Showing 8 notices/i)).toBeInTheDocument();
    });

    // Mock POST network error (offline)
    const networkError = new Error('Network Error');
    axios.post.mockRejectedValueOnce(networkError);

    const titleInput = screen.getByLabelText(/Notice Title:/i);
    const bodyInput = screen.getByLabelText(/Notice Body:/i);
    const submitBtn = screen.getByRole('button', { name: /Post Notice/i });

    fireEvent.change(titleInput, { target: { value: 'Parking Line Marking' } });
    fireEvent.change(bodyInput, { target: { value: 'Keep vehicles outside between 9 AM and 1 PM.' } });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Notice could not be posted: No internet connection/i)).toBeInTheDocument();
    });

    // Inputs remain intact
    expect(titleInput.value).toBe('Parking Line Marking');
    expect(bodyInput.value).toBe('Keep vehicles outside between 9 AM and 1 PM.');
  });

  test('POST success clears inputs and shows success message', async () => {
    axios.get.mockResolvedValueOnce({ data: mockNoticesBlockA });

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(/Showing 8 notices/i)).toBeInTheDocument();
    });

    // Mock successful POST
    axios.post.mockResolvedValueOnce({
      data: {
        id: 101,
        title: 'Water Tank Cleaned',
        body: 'Work has been completed.',
        userId: 1,
      },
    });

    const titleInput = screen.getByLabelText(/Notice Title:/i);
    const bodyInput = screen.getByLabelText(/Notice Body:/i);
    const submitBtn = screen.getByRole('button', { name: /Post Notice/i });

    fireEvent.change(titleInput, { target: { value: 'Water Tank Cleaned' } });
    fireEvent.change(bodyInput, { target: { value: 'Work has been completed.' } });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Notice posted, id 101/i)).toBeInTheDocument();
    });

    // Inputs cleared on success
    expect(titleInput.value).toBe('');
    expect(bodyInput.value).toBe('');
    expect(screen.getByText(/Showing 9 notices/i)).toBeInTheDocument();
  });
});
