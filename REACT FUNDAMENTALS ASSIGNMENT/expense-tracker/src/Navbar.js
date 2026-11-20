// Step 1: Import useContext from React
import { useContext } from 'react';

// Step 2: Import NavLink from react-router-dom (strictly using NavLink, no <a href> tags)
import { NavLink } from 'react-router-dom';

// Step 3: Import our custom contexts
import { ExpenseContext } from './ExpenseContext';
import { BudgetContext } from './BudgetContext';

// Navbar Component: Navigation bar with links and live remaining budget indicator
function Navbar() {
  // Read expenses directly from ExpenseContext
  const { expenses } = useContext(ExpenseContext);

  // Read budget directly from BudgetContext
  const { budget } = useContext(BudgetContext);

  // Calculate total spent so far using .reduce()
  const totalSpent = expenses.reduce((sum, item) => sum + item.amount, 0);

  // Calculate remaining balance: Budget minus Total Spent
  const amountLeft = budget - totalSpent;

  // Determine if total spending has exceeded the monthly budget
  const isOverBudget = totalSpent > budget;

  return (
    <nav className="navbar">
      {/* Navigation links for client-side routing */}
      <div className="nav-links">
        <NavLink to="/" end className="nav-link">
          Add
        </NavLink>
        <NavLink to="/expenses" className="nav-link">
          Expenses
        </NavLink>
        <NavLink to="/summary" className="nav-link">
          Summary
        </NavLink>
      </div>

      {/* 'Left: ₹N' indicator: styled in red when spending exceeds the monthly budget */}
      <div className={`budget-indicator ${isOverBudget ? 'over-budget' : ''}`}>
        Left: ₹{amountLeft}
      </div>
    </nav>
  );
}

// Export Navbar so App.js can render it across all routes
export default Navbar;
