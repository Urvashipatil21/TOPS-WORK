// Step 1: Import useState and useEffect hooks from React
import { useState, useEffect } from 'react';

// Import the LiveClock component
import LiveClock from './LiveClock';

// Step 2: Default list of 6 fictional books
const defaultBooks = [
  { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', isIssued: false },
  { id: 2, title: '1984', author: 'George Orwell', isIssued: true },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isIssued: false },
  { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', isIssued: true },
  { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', isIssued: false },
  { id: 6, title: 'The Hobbit', author: 'J.R.R. Tolkien', isIssued: false },
];

// IssueRegister Component: Manages book statuses, persistence, and conditional LiveClock
function IssueRegister() {
  // Lazy initial state function - loads saved books from localStorage if present
  const [books, setBooks] = useState(() => {
    const saved = localStorage.getItem('library_books');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (error) {
        return defaultBooks;
      }
    }
    return defaultBooks;
  });

  // State to control mounting and unmounting of the LiveClock component
  const [showClock, setShowClock] = useState(false);

  // useEffect #1 - Synchronize document.title to "Library: N issued"
  useEffect(() => {
    const issuedCount = books.filter((book) => book.isIssued).length;
    document.title = `Library: ${issuedCount} issued`;
  }, [books]);

  // useEffect #2 - Save books state to localStorage whenever books change
  useEffect(() => {
    localStorage.setItem('library_books', JSON.stringify(books));
  }, [books]);

  // Toggle isIssued status immutably using .map() and spread operator
  function handleToggleIssue(id) {
    setBooks((prevBooks) =>
      prevBooks.map((b) =>
        b.id === id ? { ...b, isIssued: !b.isIssued } : b
      )
    );
  }

  return (
    <div className="issue-register-card">
      <h2>Library Book Issue Register</h2>

      {/* Checkbox to conditionally mount/unmount the LiveClock component */}
      <div className="clock-toggle-group">
        <label htmlFor="show-clock-checkbox" className="clock-toggle-label">
          <input
            id="show-clock-checkbox"
            type="checkbox"
            checked={showClock}
            onChange={(e) => setShowClock(e.target.checked)}
          />
          Show clock
        </label>
      </div>

      {/* Conditionally render LiveClock based on showClock state */}
      {showClock && <LiveClock />}

      {/* Book list rendering with .map() */}
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id} className="book-item">
            <div className="book-info">
              {/* Book title and author */}
              <span className="book-title"><strong>{book.title}</strong></span>
              <span className="book-author">by {book.author}</span>
            </div>

            <div className="book-actions">
              {/* Status display: 'Available' or 'Issued' */}
              <span
                className={`status-badge ${book.isIssued ? 'badge-issued' : 'badge-available'}`}
              >
                {book.isIssued ? 'Issued' : 'Available'}
              </span>

              {/* Button to toggle isIssued status */}
              <button
                type="button"
                onClick={() => handleToggleIssue(book.id)}
                className={`btn-toggle-issue ${book.isIssued ? 'btn-return' : 'btn-issue'}`}
              >
                {book.isIssued ? 'Return' : 'Issue'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Export IssueRegister so App.js can render it
export default IssueRegister;
