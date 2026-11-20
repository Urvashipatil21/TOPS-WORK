// Import CSS styles for our application
import './App.css';

// Import the RegistrationForm component
import RegistrationForm from './RegistrationForm';

// App Component: Main root component of the Fest Registration app
function App() {
  return (
    <div className="App">
      {/* Header title */}
      <h1>Annual College Cultural Fest 2026</h1>

      {/* Render the RegistrationForm component */}
      <RegistrationForm />
    </div>
  );
}

// Export App so index.js can render it
export default App;
