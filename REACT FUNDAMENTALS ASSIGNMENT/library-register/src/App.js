// Import CSS styles for our library application
import './App.css';

// Import the IssueRegister component
import IssueRegister from './IssueRegister';

// App Component: Main root component of the Library Register app
function App() {
  return (
    <div className="App">
      {/* Header title */}
      <h1>City Central Library</h1>

      {/* Render the IssueRegister component */}
      <IssueRegister />
    </div>
  );
}

// Export App so index.js can render it
export default App;
