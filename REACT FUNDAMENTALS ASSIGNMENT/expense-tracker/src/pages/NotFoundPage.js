// Step: Import plain Link from react-router-dom
import { Link } from 'react-router-dom';

// NotFoundPage: Displayed when a user navigates to an unknown route
function NotFoundPage() {
  return (
    <div className="not-found-card">
      <h2>404</h2>
      {/* Shows the exact text: Page not found */}
      <p>Page not found</p>

      {/* Plain Link back to home route / */}
      <Link to="/" className="btn-home">
        Back to Add Expense
      </Link>
    </div>
  );
}

export default NotFoundPage;
