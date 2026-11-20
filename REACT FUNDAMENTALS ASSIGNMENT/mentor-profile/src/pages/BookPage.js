// Step 1: Import useState from React
import { useState } from 'react';

// Step 2: Import axios to send POST request
import axios from 'axios';

// Step 3: Import SectionTitle and mentor data
import SectionTitle from '../components/SectionTitle';
import mentorData from '../data/mentor';

// BookPage Component: Controlled booking form with axios.post and try/catch error handling
function BookPage() {
  // Form input states
  const [learnerName, setLearnerName] = useState('');
  const [selectedSession, setSelectedSession] = useState(mentorData.sessions[0]?.title || '');
  const [preferredSlot, setPreferredSlot] = useState('Weekday Evening (6 PM - 8 PM)');

  // Submission status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Form submission handler
  async function handleSubmit(e) {
    e.preventDefault();

    // Validation: Ensure learnerName is not empty
    if (!learnerName.trim()) {
      setErrorMessage('Please enter your name');
      return;
    }

    // Reset feedback messages before sending request
    setSuccessMessage('');
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      // Send booking data using axios.post
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        name: learnerName.trim(),
        session: selectedSession,
        slot: preferredSlot,
      });

      // On success: display 'Booking received, ref N' using returned ID
      setSuccessMessage(`Booking received, ref ${response.data.id}`);

      // Clear the form inputs on success
      setLearnerName('');
    } catch (error) {
      // On failure: display 'Booking failed, try again'
      console.error('Booking submission failed:', error);
      setErrorMessage('Booking failed, try again');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="book-page">
      <SectionTitle
        title="Book a Mentorship Session"
        subtitle="Fill in your details below to schedule your 1-on-1 session"
      />

      <div className="booking-form-card">
        <form onSubmit={handleSubmit} className="booking-form">
          {/* Learner Name Field */}
          <div className="form-group">
            <label htmlFor="learner-name">Learner Name:</label>
            <input
              id="learner-name"
              type="text"
              value={learnerName}
              onChange={(e) => setLearnerName(e.target.value)}
              placeholder="e.g., Priya Patel"
              required
            />
          </div>

          {/* Session Dropdown populated from mentor data */}
          <div className="form-group">
            <label htmlFor="session-select">Select Session:</label>
            <select
              id="session-select"
              value={selectedSession}
              onChange={(e) => setSelectedSession(e.target.value)}
              required
            >
              {mentorData.sessions.map((session) => (
                <option key={session.id} value={session.title}>
                  {session.title} — {session.fee === 0 ? 'Free' : `₹${session.fee}`} ({session.duration})
                </option>
              ))}
            </select>
          </div>

          {/* Preferred Slot Field */}
          <div className="form-group">
            <label htmlFor="preferred-slot">Preferred Slot:</label>
            <select
              id="preferred-slot"
              value={preferredSlot}
              onChange={(e) => setPreferredSlot(e.target.value)}
              required
            >
              <option value="Weekday Evening (6 PM - 8 PM)">Weekday Evening (6 PM - 8 PM)</option>
              <option value="Weekend Morning (10 AM - 12 PM)">Weekend Morning (10 AM - 12 PM)</option>
              <option value="Weekend Afternoon (2 PM - 4 PM)">Weekend Afternoon (2 PM - 4 PM)</option>
            </select>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting Booking...' : 'Confirm Booking'}
          </button>
        </form>

        {/* Success Message Display */}
        {successMessage && (
          <div className="booking-success-box">
            <p className="success-text">{successMessage}</p>
          </div>
        )}

        {/* Error Message Display */}
        {errorMessage && (
          <div className="booking-error-box">
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookPage;
