import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import App from './App';
import SessionPlan from './components/SessionPlan';

// Mock axios for deterministic booking tests
jest.mock('axios');

describe('Mentor Profile Portfolio Builder', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders home page with ProfileHeader, SectionTitle, and 6 dynamic SkillTags', () => {
    render(
      <MemoryRouter initialEntries={['/']} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <App />
      </MemoryRouter>
    );

    // ProfileHeader checks
    expect(screen.getByRole('heading', { name: /Aarav Sharma/i })).toBeInTheDocument();
    expect(screen.getByText(/Bengaluru, India/i)).toBeInTheDocument();
    expect(screen.getByText(/Senior Frontend Engineer/i)).toBeInTheDocument();

    // SectionTitle checks
    expect(screen.getByRole('heading', { name: /Core Skills & Expertise/i })).toBeInTheDocument();

    // Verify all 6 skills rendered with .map()
    const skills = ['React', 'JavaScript', 'TypeScript', 'Next.js', 'Redux Toolkit', 'Node.js'];
    skills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  test('navigates to Sessions page, renders 3 sessions, and conditionally shows Fee waived for fee 0', () => {
    render(
      <MemoryRouter initialEntries={['/']} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <App />
      </MemoryRouter>
    );

    // Click Sessions nav link
    const sessionsLink = screen.getByRole('link', { name: /^Sessions$/i });
    fireEvent.click(sessionsLink);

    // Verify session titles
    expect(screen.getByText(/1-on-1 Career Kickstart & Mentorship Q&A/i)).toBeInTheDocument();
    expect(screen.getByText(/Deep-Dive Code Review & Component Architecture/i)).toBeInTheDocument();
    expect(screen.getByText(/Mock Technical Interview & Live Problem Solving/i)).toBeInTheDocument();

    // Conditional rendering: Fee waived exclusively shown for fee: 0
    expect(screen.getByText(/Fee waived/i)).toBeInTheDocument();
    expect(screen.getByText(/₹1200/i)).toBeInTheDocument();
    expect(screen.getByText(/₹1800/i)).toBeInTheDocument();
  });

  test('SessionPlan uses default prop level = Beginner when level prop is omitted', () => {
    render(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <SessionPlan
          title="Introductory Call"
          duration="20 mins"
          fee={0}
        />
      </MemoryRouter>
    );

    expect(screen.getByText(/Beginner/i)).toBeInTheDocument();
    expect(screen.getByText(/Fee waived/i)).toBeInTheDocument();
  });

  test('submits booking form successfully using axios.post and displays Booking received, ref N', async () => {
    // Mock successful response from axios.post
    axios.post.mockResolvedValueOnce({
      data: {
        id: 101,
        name: 'Rohan Mehta',
        session: '1-on-1 Career Kickstart & Mentorship Q&A',
        slot: 'Weekend Morning (10 AM - 12 PM)',
      },
    });

    render(
      <MemoryRouter initialEntries={['/book']} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <App />
      </MemoryRouter>
    );

    const nameInput = screen.getByLabelText(/Learner Name:/i);
    const sessionSelect = screen.getByLabelText(/Select Session:/i);
    const slotSelect = screen.getByLabelText(/Preferred Slot:/i);
    const submitBtn = screen.getByRole('button', { name: /Confirm Booking/i });

    fireEvent.change(nameInput, { target: { value: 'Rohan Mehta' } });
    fireEvent.change(sessionSelect, { target: { value: '1-on-1 Career Kickstart & Mentorship Q&A' } });
    fireEvent.change(slotSelect, { target: { value: 'Weekend Morning (10 AM - 12 PM)' } });
    fireEvent.click(submitBtn);

    // Verify axios.post was called
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts', {
        name: 'Rohan Mehta',
        session: '1-on-1 Career Kickstart & Mentorship Q&A',
        slot: 'Weekend Morning (10 AM - 12 PM)',
      });
    });

    // Verify success message 'Booking received, ref N'
    expect(await screen.findByText(/Booking received, ref 101/i)).toBeInTheDocument();
    expect(nameInput.value).toBe('');
  });

  test('handles booking form failure and displays Booking failed, try again', async () => {
    // Mock network failure on axios.post
    axios.post.mockRejectedValueOnce(new Error('Network Error'));

    render(
      <MemoryRouter initialEntries={['/book']} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <App />
      </MemoryRouter>
    );

    const nameInput = screen.getByLabelText(/Learner Name:/i);
    const submitBtn = screen.getByRole('button', { name: /Confirm Booking/i });

    fireEvent.change(nameInput, { target: { value: 'Test Learner' } });
    fireEvent.click(submitBtn);

    // Verify failure error message
    expect(await screen.findByText(/Booking failed, try again/i)).toBeInTheDocument();
  });
});
