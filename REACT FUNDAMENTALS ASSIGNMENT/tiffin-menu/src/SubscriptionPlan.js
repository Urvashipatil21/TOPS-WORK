// Import PropTypes for prop validation
import PropTypes from 'prop-types';

// SubscriptionPlan Component: Displays a subscription plan and calculates its total price
function SubscriptionPlan({ planName, days, pricePerDay }) {
  // Step 1: Calculate the total price based on number of days and daily price
  const totalPrice = days * pricePerDay;

  // Step 2: Return JSX to display plan details and calculated total
  return (
    <div className="subscription-card">
      {/* Plan title */}
      <h4>{planName} Plan</h4>

      {/* Plan details: duration and price per day */}
      <p>
        Duration: {days} days @ ₹{pricePerDay}/day
      </p>

      {/* Total calculated cost */}
      <p className="total-price">
        <strong>Total:</strong> ₹{totalPrice}
      </p>
    </div>
  );
}

// Step 3: Define PropTypes for all three props
SubscriptionPlan.propTypes = {
  // planName must be a string and is required
  planName: PropTypes.string.isRequired,

  // days must be a number and is required
  days: PropTypes.number.isRequired,

  // pricePerDay must be a number and is required
  pricePerDay: PropTypes.number.isRequired,
};

// Export the component so it can be imported into App.js
export default SubscriptionPlan;
