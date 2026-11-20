// Step 1: Import useState and useEffect hooks from React
import { useState, useEffect } from 'react';

// Step 2: Import axios (strictly using axios, not fetch)
import axios from 'axios';

// Import CSS styles
import './App.css';

// Import child components
import NoticeList from './NoticeList';
import NewNotice from './NewNotice';

// App Component: Society Notice Board with async/await, try/catch/finally, retry, and error classification
function App() {
  // State to hold the notices array
  const [notices, setNotices] = useState([]);

  // Loading state to show 'Loading notices...' while fetching
  const [isLoading, setIsLoading] = useState(true);

  // Error message state for GET request
  const [errorMessage, setErrorMessage] = useState('');

  // Retry counter state: incrementing this triggers the data-fetching effect again
  const [retryCount, setRetryCount] = useState(0);

  // Block filter state mapping:
  // '1' -> Block A (userId: 1)
  // '2' -> Block B (userId: 2)
  // '3' -> Block C (userId: 3)
  const [selectedBlock, setSelectedBlock] = useState('1');

  // Step 3: Fetch notices dynamically using async/await inside try/catch/finally
  useEffect(() => {
    // Define an async function inside useEffect
    async function fetchNotices() {
      // Show loading indicator and reset any previous errors
      setIsLoading(true);
      setErrorMessage('');

      try {
        // Make GET request using axios with params
        // Constraint: Strictly use axios; do not build URL by joining strings, use params option.
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            userId: Number(selectedBlock),
            _limit: 8,
          },
        });

        // Set notices array from response.data on success
        setNotices(response.data);
      } catch (error) {
        // Detailed error classification:
        // If error.response exists, it's a server response with an HTTP status code (e.g. 404, 500)
        // Otherwise, it indicates a network/connectivity issue
        if (error.response) {
          setErrorMessage(`Server problem (code ${error.response.status})`);
        } else {
          setErrorMessage('No internet connection');
        }
      } finally {
        // Turn off loading state in the finally block
        setIsLoading(false);
      }
    }

    // Call the async fetching function
    fetchNotices();
  }, [selectedBlock, retryCount]); // Depend on selectedBlock and retryCount

  // Step 4: Callback to prepend newly posted notice to existing notices array
  function handleNoticeAdded(newNotice) {
    setNotices((prevNotices) => [newNotice, ...prevNotices]);
  }

  // Step 5: Handler for 'Try again' button to increment retryCount
  function handleRetry() {
    setRetryCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="App">
      <header className="app-header">
        <h1>Gokuldham Society Notice Board</h1>
        <p className="subtitle">Real-time announcements and resident notices</p>
      </header>

      {/* Block Filter Section */}
      <section className="filter-section">
        <div className="block-filter">
          <label htmlFor="block-select"><strong>Select Block:</strong></label>
          <select
            id="block-select"
            value={selectedBlock}
            onChange={(e) => setSelectedBlock(e.target.value)}
          >
            <option value="1">Block A (Wing 1)</option>
            <option value="2">Block B (Wing 2)</option>
            <option value="3">Block C (Wing 3)</option>
          </select>
        </div>

        {/* Live count text showing 'Showing N notices' */}
        <div className="notice-count">
          Showing {notices.length} notices
        </div>
      </section>

      {/* New Notice Form component */}
      <NewNotice onNoticeAdded={handleNoticeAdded} />

      {/* Content Area: Handles Loading, Error with Retry, or NoticeList */}
      <main className="content-area">
        {isLoading ? (
          // Loading State
          <div className="loading-container">
            <p className="loading-text">Loading notices...</p>
          </div>
        ) : errorMessage ? (
          // Red Error Box with classified message and 'Try again' button instead of rendering the list
          <div className="error-box">
            <p className="error-text">Could not load notices. Check your internet.</p>
            <p className="error-status">{errorMessage}</p>
            <button
              type="button"
              className="btn-retry"
              onClick={handleRetry}
            >
              Try again
            </button>
          </div>
        ) : (
          // Notice List rendered when successful
          <NoticeList notices={notices} />
        )}
      </main>
    </div>
  );
}

// Export App component
export default App;
