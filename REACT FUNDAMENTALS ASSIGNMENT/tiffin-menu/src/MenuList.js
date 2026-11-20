// Import the DishItem child component
import DishItem from './DishItem';

// MenuList Component: Displays today's tiffin thali menu
function MenuList() {
  return (
    <div className="menu-list">
      {/* Heading for the daily thali */}
      <h2>Today's Thali</h2>

      {/* Render DishItem with valid foodType and spice props */}
      <ul>
        <DishItem name="Paneer Butter Masala" price={110} foodType="Veg" spice="Spicy" />
        <DishItem name="Dal Fry" price={80} foodType="Veg" spice="Mild" />
        {/* Jeera Rice uses default spice="Medium" */}
        <DishItem name="Jeera Rice" price={60} foodType="Veg" />
        {/* Butter Roti demonstrates Jain foodType */}
        <DishItem name="Butter Roti (4 pcs)" price={40} foodType="Jain" spice="Mild" />
        {/* Gulab Jamun uses default foodType="Veg" */}
        <DishItem name="Gulab Jamun (2 pcs)" price={50} spice="Sweet" />
      </ul>
    </div>
  );
}

// Export MenuList as default so it can be imported into App.js
export default MenuList;
