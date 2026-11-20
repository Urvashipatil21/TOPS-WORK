// Step 1: Import useContext hook from React
import { useContext } from 'react';

// Step 2: Import our custom contexts
import { ExpenseContext } from '../ExpenseContext';
import { BudgetContext } from '../BudgetContext';

// SummaryPage Component: Calculates totals using .reduce() and provides monthly budget input
// Constraint: Does NOT receive expenses or addExpense as props
function SummaryPage() {
  // Read expenses directly using useContext(ExpenseContext)
  const { expenses } = useContext(ExpenseContext);

  // Read budget and setBudget directly using useContext(BudgetContext)
  const { budget, setBudget } = useContext(BudgetContext);

  // Calculate total overall spent using .reduce()
  const totalOverall = expenses.reduce((sum, item) => sum + item.amount, 0);

  // Calculate breakdown total for each category using .reduce()
  const foodTotal = expenses
    .filter((item) => item.category === 'Food')
    .reduce((sum, item) => sum + item.amount, 0);

  const travelTotal = expenses
    .filter((item) => item.category === 'Travel')
    .reduce((sum, item) => sum + item.amount, 0);

  const billsTotal = expenses
    .filter((item) => item.category === 'Bills')
    .reduce((sum, item) => sum + item.amount, 0);

  const funTotal = expenses
    .filter((item) => item.category === 'Fun')
    .reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="summary-page-card">
      <h2>Expense Summary</h2>

      {/* Monthly budget control section */}
      <div className="budget-section">
        <label htmlFor="monthly-budget-input" className="budget-label">
          Monthly Budget (₹):
        </label>
        <input
          id="monthly-budget-input"
          type="number"
          className="budget-input"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          placeholder="e.g., 15000"
          min="0"
        />
      </div>

      {/* Overall total spent */}
      <div className="overall-summary">
        <p>Total Overall Spent</p>
        <h3 className="total-amount">₹{totalOverall}</h3>
      </div>

      {/* Category-wise breakdown totals */}
      <div className="category-breakdown">
        <h3>Category Breakdown</h3>
        <ul className="breakdown-list">
          <li className="breakdown-item">
            <span>Food:</span>
            <strong>₹{foodTotal}</strong>
          </li>
          <li className="breakdown-item">
            <span>Travel:</span>
            <strong>₹{travelTotal}</strong>
          </li>
          <li className="breakdown-item">
            <span>Bills:</span>
            <strong>₹{billsTotal}</strong>
          </li>
          <li className="breakdown-item">
            <span>Fun:</span>
            <strong>₹{funTotal}</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SummaryPage;
