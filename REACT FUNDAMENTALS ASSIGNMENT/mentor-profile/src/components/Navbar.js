// Import NavLink from react-router-dom
import { NavLink } from 'react-router-dom';

// Navbar Component: Navigation bar rendered on all pages
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">MentorHub</div>
      <div className="nav-links">
        {/* NavLink automatically sets 'active' class when matched */}
        <NavLink to="/" end className="nav-link">
          Home
        </NavLink>
        <NavLink to="/sessions" className="nav-link">
          Sessions
        </NavLink>
        <NavLink to="/book" className="nav-link">
          Book
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
