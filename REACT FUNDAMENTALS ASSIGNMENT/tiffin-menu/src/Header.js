// Header Component: Function component that receives data strictly through props
function Header(props) {
  // Step 1: Read values from props (no hardcoded constants)
  const { name, city, since } = props;

  // Step 2: Calculate operating years using the current year and the 'since' prop
  const years = new Date().getFullYear() - since;

  // Step 3: Return JSX using the props values
  return (
    <header className="header">
      {/* Display service name received from props */}
      <h1>{name}</h1>

      {/* Display city and calculated years received from props */}
      <p className="tagline">
        Serving homes in {city} for {years} years
      </p>
    </header>
  );
}

// Export the Header component so it can be imported into App.js
export default Header;
