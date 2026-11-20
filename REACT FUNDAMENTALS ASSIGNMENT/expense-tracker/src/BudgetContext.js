// Step 1: Import createContext and useState hooks from React
import { createContext, useState } from 'react';

// Step 2: Create the BudgetContext
// This context manages the user's monthly budget so it can be accessed anywhere in the app.
export const BudgetContext = createContext();

// Step 3: Create the BudgetProvider component
// This provider holds the monthly budget state (defaulting to 15000) and provides setBudget to update it.
export function BudgetProvider({ children }) {
  // Monthly budget state defaulting to ₹15000
  const [budget, setBudget] = useState(15000);

  // Provide budget and setBudget to all child components
  return (
    <BudgetContext.Provider value={{ budget, setBudget }}>
      {children}
    </BudgetContext.Provider>
  );
}

// Default export for convenience
export default BudgetContext;
