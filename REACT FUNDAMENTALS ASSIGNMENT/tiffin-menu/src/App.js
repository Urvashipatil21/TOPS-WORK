// Import CSS styles for our component
import './App.css';

// Import child components
import Header from './Header';
import MenuList from './MenuList';
import DeliveryInfo from './DeliveryInfo';
import SubscriptionPlan from './SubscriptionPlan';
import OrderNote from './OrderNote';

// Step 1: Define the tiffin object containing name, city, and since properties
const tiffin = {
  name: 'Shreeji Tiffin Services',
  city: 'Ahmedabad',
  since: 2020,
};

// App component: The main component of our React application
function App() {
  return (
    <div className="App">
      {/* Step 2: Pass tiffin object properties as props to Header */}
      <Header
        name={tiffin.name}
        city={tiffin.city}
        since={tiffin.since}
      />

      {/* MenuList component with today's thali items */}
      <MenuList />

      {/* Subscription Plans section */}
      <div className="subscription-section">
        <h3>Subscription Plans</h3>
        {/* Render three subscription plans with planName, days, and pricePerDay props */}
        <SubscriptionPlan planName="Weekly" days={6} pricePerDay={90} />
        <SubscriptionPlan planName="Fortnight" days={12} pricePerDay={88} />
        <SubscriptionPlan planName="Monthly" days={26} pricePerDay={85} />
      </div>

      {/* Pass tiffin object properties as props to DeliveryInfo */}
      <DeliveryInfo
        name={tiffin.name}
        city={tiffin.city}
        since={tiffin.since}
      />

      {/* OrderNote component with minimum order and delivery hours */}
      <OrderNote />
    </div>
  );
}

// Export the App component so index.js can import and display it
export default App;
