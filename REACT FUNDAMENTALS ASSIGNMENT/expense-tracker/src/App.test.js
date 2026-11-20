import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('Expense Tracker with Context API', () => {
  test('initial render shows 4 fictional expenses, correct budget left indicator, and routes', () => {
    render(
      <MemoryRouter
        initialEntries={['/']}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <App />
      </MemoryRouter>
    );

    // Initial total spending: 50 + 200 + 650 + 350 = 1250
    // Default budget: 15000 => Left: 15000 - 1250 = 13750
    const indicator = screen.getByText(/Left: ₹13750/i);
    expect(indicator).toBeInTheDocument();
    expect(indicator).not.toHaveClass('over-budget');

    // Check nav links
    const addLink = screen.getByRole('link', { name: /^Add$/i });
    const expensesLink = screen.getByRole('link', { name: /^Expenses$/i });
    const summaryLink = screen.getByRole('link', { name: /^Summary$/i });

    expect(addLink).toHaveClass('active');

    // Navigate to Expenses page
    fireEvent.click(expensesLink);
    expect(expensesLink).toHaveClass('active');

    // 4 initial expenses must be present
    expect(screen.getByText(/Morning Chai & Samosa/i)).toBeInTheDocument();
    expect(screen.getByText(/Metro Smart Card Recharge/i)).toBeInTheDocument();
    expect(screen.getByText(/Electricity Bill/i)).toBeInTheDocument();
    expect(screen.getByText(/Weekend Movie Ticket/i)).toBeInTheDocument();

    // Each row must have a Delete button
    const deleteButtons = screen.getAllByRole('button', { name: /delete/i });
    expect(deleteButtons).toHaveLength(4);

    // Navigate to Summary page
    fireEvent.click(summaryLink);
    expect(summaryLink).toHaveClass('active');
    expect(screen.getByText(/₹1250/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue('15000')).toBeInTheDocument();
  });

  test('expense added on / immediately reflects on /expenses and updates totals on /summary', () => {
    render(
      <MemoryRouter
        initialEntries={['/']}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <App />
      </MemoryRouter>
    );

    // Fill form to add a new expense
    const titleInput = screen.getByPlaceholderText(/Chai, Bus ticket/i);
    const amountInput = screen.getByPlaceholderText(/20/i);
    const submitBtn = screen.getByRole('button', { name: /Add Expense/i });

    fireEvent.change(titleInput, { target: { value: 'Grocery Shopping' } });
    fireEvent.change(amountInput, { target: { value: '750' } });
    fireEvent.click(submitBtn);

    // Left indicator should update: 13750 - 750 = 13000
    expect(screen.getByText(/Left: ₹13000/i)).toBeInTheDocument();

    // Navigate to /expenses and verify new expense is listed
    const expensesLink = screen.getByRole('link', { name: /^Expenses$/i });
    fireEvent.click(expensesLink);
    expect(screen.getByText(/Grocery Shopping/i)).toBeInTheDocument();
    expect(screen.getByText(/₹750/i)).toBeInTheDocument();

    // Navigate to /summary and verify totals updated (1250 + 750 = 2000)
    const summaryLink = screen.getByRole('link', { name: /^Summary$/i });
    fireEvent.click(summaryLink);
    expect(screen.getByText(/₹2000/i)).toBeInTheDocument();
  });

  test('budget of ₹5000 and expenses totaling ₹5200 turns indicator red; deleting expense restores it', () => {
    render(
      <MemoryRouter
        initialEntries={['/']}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <App />
      </MemoryRouter>
    );

    // Initial expenses = 1250.
    // Let's add an expense of ₹3950 so total spending becomes 1250 + 3950 = 5200.
    const titleInput = screen.getByPlaceholderText(/Chai, Bus ticket/i);
    const amountInput = screen.getByPlaceholderText(/20/i);
    const submitBtn = screen.getByRole('button', { name: /Add Expense/i });

    fireEvent.change(titleInput, { target: { value: 'New Laptop Bag' } });
    fireEvent.change(amountInput, { target: { value: '3950' } });
    fireEvent.click(submitBtn);

    // Now navigate to /summary to set monthly budget to 5000
    const summaryLink = screen.getByRole('link', { name: /^Summary$/i });
    fireEvent.click(summaryLink);

    // Total spent is now 5200
    expect(screen.getByText(/₹5200/i)).toBeInTheDocument();

    // Change monthly budget to 5000
    const budgetInput = screen.getByLabelText(/Monthly Budget/i);
    fireEvent.change(budgetInput, { target: { value: '5000' } });

    // Navbar indicator shows 'Left: ₹-200' and has class 'over-budget' (styled red)
    const indicator = screen.getByText(/Left: ₹-200/i);
    expect(indicator).toBeInTheDocument();
    expect(indicator).toHaveClass('over-budget');

    // Check indicator persists red across pages: navigate to /expenses
    const expensesLink = screen.getByRole('link', { name: /^Expenses$/i });
    fireEvent.click(expensesLink);
    expect(screen.getByText(/Left: ₹-200/i)).toHaveClass('over-budget');

    // Delete an expense (e.g., delete 'New Laptop Bag' of 3950)
    // Deleting 3950 brings total spending down to 1250, well within budget 5000
    const deleteLaptopBagBtn = screen.getByRole('button', { name: /Delete New Laptop Bag/i });
    fireEvent.click(deleteLaptopBagBtn);

    // The expense is removed from UI
    expect(screen.queryByText(/New Laptop Bag/i)).not.toBeInTheDocument();

    // The indicator turns back from red to normal across all pages: Left: 5000 - 1250 = 3750
    const restoredIndicator = screen.getByText(/Left: ₹3750/i);
    expect(restoredIndicator).toBeInTheDocument();
    expect(restoredIndicator).not.toHaveClass('over-budget');

    // Navigate back to Add page and ensure normal indicator is preserved
    const addLink = screen.getByRole('link', { name: /^Add$/i });
    fireEvent.click(addLink);
    expect(screen.getByText(/Left: ₹3750/i)).not.toHaveClass('over-budget');
  });

  test('renders NotFound page for unknown route with Link back to /', () => {
    render(
      <MemoryRouter
        initialEntries={['/some-invalid-route']}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
    const backHomeLink = screen.getByRole('link', { name: /Back to Add Expense/i });
    expect(backHomeLink).toBeInTheDocument();
    expect(backHomeLink).toHaveAttribute('href', '/');
  });
});
