// ExpenseList Component: Displays the list of expenses with a Delete button on each row
function ExpenseList({ expenses = [], onDeleteExpense }) {
  return (
    <div className="expense-list-card">
      <h2>Expense History</h2>

      {/* Check if the expenses list has records */}
      {expenses.length === 0 ? (
        <p className="no-expenses">No expenses recorded yet.</p>
      ) : (
        <ul className="expense-list">
          {/* Map through the expenses array using unique key */}
          {expenses.map((expense) => (
            <li key={expense.id} className="expense-item">
              <div className="expense-main">
                {/* Expense title and date */}
                <span className="expense-title">
                  <strong>{expense.title}</strong>
                </span>
                <span className="expense-date">{expense.date}</span>
              </div>

              <div className="expense-details">
                {/* Category badge */}
                <span className={`category-badge category-${expense.category.toLowerCase()}`}>
                  {expense.category}
                </span>

                {/* Amount in ₹ */}
                <span className="expense-amount">
                  ₹{expense.amount}
                </span>

                {/* Delete button on every row */}
                <button
                  type="button"
                  className="btn-delete"
                  onClick={() => onDeleteExpense && onDeleteExpense(expense.id)}
                  aria-label={`Delete ${expense.title}`}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Export ExpenseList so ExpensesPage can render it
export default ExpenseList;
