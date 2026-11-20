// Import CSS styles for our application
import './App.css';

// Import the ParkingBoard component
import ParkingBoard from './ParkingBoard';

// App Component: Main root component of the society parking application
function App() {
  return (
    <div className="App">
      {/* Header title */}
      <h1>Green Meadows Society</h1>

      {/* Render the ParkingBoard component */}
      <ParkingBoard />
    </div>
  );
}

// Export App so index.js can render it
export default App;
