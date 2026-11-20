// Step 1: Import useContext hook from React
import { useContext } from 'react';

// Step 2: Import ExpenseContext to read addExpense directly
import { ExpenseContext } from '../ExpenseContext';

// Import the ExpenseForm component
import ExpenseForm from '../ExpenseForm';

// AddExpensePage: Renders the form to add an expense
// Constraint: Does NOT receive expenses or addExpense as props
function AddExpensePage() {
  // Read addExpense directly using the useContext hook
  const { addExpense } = useContext(ExpenseContext);

  return (
    <div className="page-container">
      {/* Pass addExpense down to the ExpenseForm component */}
      <ExpenseForm onAddExpense={addExpense} />
    </div>
  );
}

export default AddExpensePage;
