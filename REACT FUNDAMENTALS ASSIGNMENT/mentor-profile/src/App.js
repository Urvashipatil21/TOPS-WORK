// Step 1: Import Routes and Route from react-router-dom
import { Routes, Route } from 'react-router-dom';

// Import CSS styles
import './App.css';

// Import Navbar component
import Navbar from './components/Navbar';

// Import Pages
import HomePage from './pages/HomePage';
import SessionsPage from './pages/SessionsPage';
import BookPage from './pages/BookPage';

// App Component: Sets up routing for Home (/), Sessions (/sessions), and Book (/book)
function App() {
  return (
    <div className="App">
      {/* Navigation bar displayed on all pages */}
      <Navbar />

      {/* Main container with route views */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sessions" element={<SessionsPage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>© 2026 MentorHub • Guiding the next generation of engineers</p>
      </footer>
    </div>
  );
}

export default App;
