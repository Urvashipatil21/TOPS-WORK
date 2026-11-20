// Step 1: Import Routes and Route from react-router-dom
import { Routes, Route } from 'react-router-dom';

// Import CSS styles
import './App.css';

// Step 2: Import Context Providers
// We wrap our components with ExpenseProvider and BudgetProvider so state is accessible globally.
import { ExpenseProvider } from './ExpenseContext';
import { BudgetProvider } from './BudgetContext';

// Import Navbar component (rendered on all pages)
import Navbar from './Navbar';

// Import page components
import AddExpensePage from './pages/AddExpensePage';
import ExpensesPage from './pages/ExpensesPage';
import SummaryPage from './pages/SummaryPage';
import NotFoundPage from './pages/NotFoundPage';

// App Component: Wraps routes in Context Providers with no local expense state
function App() {
  return (
    // Wrap with BudgetProvider and ExpenseProvider so all pages and the Navbar can access context values
    <BudgetProvider>
      <ExpenseProvider>
        <div className="App">
          <h1>Daily Expense Tracker</h1>

          {/* Navbar rendered on all pages with routing and budget indicator */}
          <Navbar />

          {/* Routes configuration: none of the page elements receive expenses or addExpense as props */}
          <Routes>
            {/* / renders AddExpensePage */}
            <Route path="/" element={<AddExpensePage />} />

            {/* /expenses renders ExpensesPage */}
            <Route path="/expenses" element={<ExpensesPage />} />

            {/* /summary renders SummaryPage */}
            <Route path="/summary" element={<SummaryPage />} />

            {/* Catch-all route path="*" renders NotFound page */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </ExpenseProvider>
    </BudgetProvider>
  );
}

// Export App so index.js can render it
export default App;
