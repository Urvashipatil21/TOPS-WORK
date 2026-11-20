// Step 1: Import useState from React
import { useState } from 'react';

// Step 2: Import axios to make HTTP requests
import axios from 'axios';

// NewNotice Component: Form with try/catch POST handling and classified error messages
function NewNotice({ onNoticeAdded }) {
  // Local state for the notice form fields
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // State to hold and display the success confirmation message
  const [successMessage, setSuccessMessage] = useState('');

  // State to hold and display error messages on failure
  const [errorMessage, setErrorMessage] = useState('');

  // State to disable button while submitting
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form submit handler wrapped in try/catch
  async function handleSubmit(e) {
    e.preventDefault();

    // Validation: Ensure fields are not empty
    if (!title.trim() || !body.trim()) {
      return;
    }

    // Reset previous feedback messages before submitting
    setErrorMessage('');
    setSuccessMessage('');
    setIsSubmitting(true);

    try {
      // Step 3: Send POST request using axios to jsonplaceholder
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: title.trim(),
        body: body.trim(),
        userId: 1,
      });

      // Step 4: On success, pass the returned object to parent callback
      if (onNoticeAdded) {
        onNoticeAdded(response.data);
      }

      // Display success message: 'Notice posted, id N'
      setSuccessMessage(`Notice posted, id ${response.data.id}`);

      // Constraint: Never clear the form before the POST request has successfully resolved.
      // We clear the form inputs ONLY here after the request has resolved.
      setTitle('');
      setBody('');
    } catch (error) {
      // Step 5: On failure, keep the typed title and body intact in the form
      // Differentiate error messages based on error type:
      if (error.response) {
        // Server responded with an error code (e.g. 500, 404)
        setErrorMessage(`Notice could not be posted: Server problem (code ${error.response.status})`);
      } else {
        // Network error or no response received
        setErrorMessage('Notice could not be posted: No internet connection');
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="new-notice-card">
      <h2>Post a New Notice</h2>

      <form onSubmit={handleSubmit} className="notice-form">
        {/* Title Input */}
        <div className="form-group">
          <label htmlFor="notice-title">Notice Title:</label>
          <input
            id="notice-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Water Tank Cleaning"
            required
          />
        </div>

        {/* Body Textarea */}
        <div className="form-group">
          <label htmlFor="notice-body">Notice Body:</label>
          <textarea
            id="notice-body"
            rows="3"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="e.g., Water supply will be interrupted tomorrow from 10 AM to 2 PM."
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn-submit" disabled={isSubmitting}>
          {isSubmitting ? 'Posting...' : 'Post Notice'}
        </button>
      </form>

      {/* Success Message Display */}
      {successMessage && (
        <p className="success-message">{successMessage}</p>
      )}

      {/* Error Message Display on Failure */}
      {errorMessage && (
        <p className="post-error-message">{errorMessage}</p>
      )}
    </div>
  );
}

// Export NewNotice component
export default NewNotice;
