// Step 1: Import createContext and useState hooks from React
import { createContext, useState } from 'react';

// Step 2: Create the ExpenseContext
// This context object will allow any child component to access expense data without prop drilling.
export const ExpenseContext = createContext();

// Initial list of 4 fictional expenses
const initialExpenses = [
  { id: 1, title: 'Morning Chai & Samosa', amount: 50, category: 'Food', date: '2026-11-15' },
  { id: 2, title: 'Metro Smart Card Recharge', amount: 200, category: 'Travel', date: '2026-11-16' },
  { id: 3, title: 'Electricity Bill', amount: 650, category: 'Bills', date: '2026-11-17' },
  { id: 4, title: 'Weekend Movie Ticket', amount: 350, category: 'Fun', date: '2026-11-18' },
];

// Step 3: Create the ExpenseProvider component
// This provider holds the expenses state and functions to modify it, passing them to children via value.
export function ExpenseProvider({ children }) {
  // State holding the list of expenses (initialized with 4 fictional expenses)
  const [expenses, setExpenses] = useState(initialExpenses);

  // Function to add a new expense immutably
  function addExpense(newExpense) {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  }

  // Function to delete an expense by its unique id
  function deleteExpense(id) {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  }

  // Provide expenses, addExpense, and deleteExpense to all child components
  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
}

// Default export for convenience
export default ExpenseContext;
