// Step 1: Import useContext hook from React
import { useContext } from 'react';

// Step 2: Import ExpenseContext to read expenses and deleteExpense directly
import { ExpenseContext } from '../ExpenseContext';

// Import the ExpenseList component
import ExpenseList from '../ExpenseList';

// ExpensesPage: Displays the list of recorded expenses
// Constraint: Does NOT receive expenses or addExpense as props
function ExpensesPage() {
  // Read expenses and deleteExpense directly using the useContext hook
  const { expenses, deleteExpense } = useContext(ExpenseContext);

  return (
    <div className="page-container">
      {/* Pass expenses and onDeleteExpense handler down to ExpenseList */}
      <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
    </div>
  );
}

export default ExpensesPage;
