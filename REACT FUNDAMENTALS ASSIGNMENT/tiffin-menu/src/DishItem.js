// Import PropTypes for type checking
import PropTypes from 'prop-types';

// DishItem Component: Represents a single menu item
// Default values are set directly inside the destructured parameters
function DishItem({ name, price, foodType = 'Veg', spice = 'Medium' }) {
  return (
    <li className="dish-item">
      {/* Display dish name, food type, and spice level */}
      <span>
        <strong>{name}</strong> ({foodType}) &bull; <small>Spice: {spice}</small>
      </span>

      {/* Display price with 5% GST styled in green */}
      <span style={{ color: 'green' }}>
        ₹{(price * 1.05).toFixed(2)}
      </span>
    </li>
  );
}

// Prop types validation for DishItem
DishItem.propTypes = {
  // name must be a string and is required
  name: PropTypes.string.isRequired,

  // price must be a number and is required
  price: PropTypes.number.isRequired,

  // foodType must be one of 'Veg', 'Jain', or 'Non-veg'
  foodType: PropTypes.oneOf(['Veg', 'Jain', 'Non-veg']),

  // spice is an optional string
  spice: PropTypes.string,
};

// Export DishItem as default so MenuList.js can import and use it
export default DishItem;
