// Step 1: Import PropTypes for runtime prop validation
import PropTypes from 'prop-types';

// Step 2: Import Link from react-router-dom to navigate to the booking form
import { Link } from 'react-router-dom';

// SessionPlan Component: Renders a session plan with duration, fee, and level
function SessionPlan({ title, duration, fee, level = 'Beginner' }) {
  return (
    <div className="session-card">
      <div className="session-card-header">
        <span className={`level-badge level-${level.toLowerCase()}`}>
          {level}
        </span>
        <span className="session-duration">⏱ {duration}</span>
      </div>

      <h3 className="session-title">{title}</h3>

      <div className="session-card-footer">
        {/* Conditional Rendering: Exclusively show 'Fee waived' when fee is 0 */}
        <div className="fee-container">
          {fee === 0 ? (
            <span className="fee-waived">Fee waived</span>
          ) : (
            <span className="fee-amount">₹{fee}</span>
          )}
        </div>

        <Link to="/book" className="btn-book-plan">
          Book Now
        </Link>
      </div>
    </div>
  );
}

// Step 3: PropTypes validation
SessionPlan.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  fee: PropTypes.number.isRequired,
  level: PropTypes.string,
};

// Step 4: Default props to set level to 'Beginner' if not specified
SessionPlan.defaultProps = {
  level: 'Beginner',
};

export default SessionPlan;
