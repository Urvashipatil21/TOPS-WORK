// Step 1: Import useState, useRef, and useContext hooks from React
import { useState, useRef, useContext } from 'react';

// Import ExpenseContext in case the component is used without props
import { ExpenseContext } from './ExpenseContext';

// Initial empty form state constant
const initialForm = {
  title: '',
  amount: '',
  category: 'Food',
  date: '',
};

// ExpenseForm Component: Handles controlled inputs, dual-ref focus management, and validation
function ExpenseForm({ onAddExpense }) {
  // Read addExpense from context if available as a fallback
  const context = useContext(ExpenseContext);
  const handleAdd = onAddExpense || (context && context.addExpense);

  // Form input state
  const [form, setForm] = useState(initialForm);

  // Error message state
  const [errorMessage, setErrorMessage] = useState('');

  // Dual refs for DOM focus management
  const titleRef = useRef(null);
  const amountRef = useRef(null);

  // Single handleChange function for controlled inputs
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  // Form submission handler with validation and targeted ref focus
  function handleSubmit(e) {
    e.preventDefault();

    // Validation 1: Check if title is empty
    if (!form.title.trim()) {
      setErrorMessage('Enter a title');
      if (titleRef.current) {
        titleRef.current.focus();
      }
      return;
    }

    // Validation 2: Check if amount is strictly greater than 0
    const parsedAmount = Number(form.amount);
    if (!form.amount || isNaN(parsedAmount) || parsedAmount <= 0) {
      setErrorMessage('Amount must be above 0');
      if (amountRef.current) {
        amountRef.current.focus();
      }
      return;
    }

    // Clear error message if validation passes
    setErrorMessage('');

    // Create the new expense object with parsed numeric amount
    const newExpense = {
      id: Date.now(),
      title: form.title.trim(),
      amount: parsedAmount,
      category: form.category,
      date: form.date || new Date().toISOString().split('T')[0],
    };

    // Add new expense via handler or context
    if (handleAdd) {
      handleAdd(newExpense);
    }

    // Reset the form back to initial empty state constant
    setForm(initialForm);

    // Return focus to Title input field for the next rapid entry
    if (titleRef.current) {
      titleRef.current.focus();
    }
  }

  return (
    <div className="expense-form-card">
      <h2>Add New Expense</h2>

      {/* Controlled form */}
      <form onSubmit={handleSubmit} className="form-container">
        {/* Title input attached with titleRef */}
        <div className="form-group">
          <label htmlFor="expense-title">Expense Title:</label>
          <input
            ref={titleRef}
            id="expense-title"
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            placeholder="e.g., Chai, Bus ticket"
          />
        </div>

        {/* Amount input attached with amountRef */}
        <div className="form-group">
          <label htmlFor="expense-amount">Amount (in ₹):</label>
          <input
            ref={amountRef}
            id="expense-amount"
            name="amount"
            type="number"
            value={form.amount}
            onChange={handleChange}
            placeholder="e.g., 20"
          />
        </div>

        {/* Category dropdown */}
        <div className="form-group">
          <label htmlFor="expense-category">Category:</label>
          <select
            id="expense-category"
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Bills">Bills</option>
            <option value="Fun">Fun</option>
          </select>
        </div>

        {/* Date input */}
        <div className="form-group">
          <label htmlFor="expense-date">Date:</label>
          <input
            id="expense-date"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="btn-submit">
          Add Expense
        </button>
      </form>

      {/* Validation error message display */}
      <p className="error-message">{errorMessage}</p>

      {/* Live preview line */}
      <div className="preview-box">
        <h3>Live Preview:</h3>
        <p className="preview-text">
          {form.title} - ₹{form.amount} - {form.category}
        </p>
      </div>
    </div>
  );
}

// Export ExpenseForm
export default ExpenseForm;
