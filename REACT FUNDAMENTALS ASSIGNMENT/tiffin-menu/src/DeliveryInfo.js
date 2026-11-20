import React from 'react';

// DeliveryInfo: A class component that reads data using this.props
class DeliveryInfo extends React.Component {
  // render() method in class components accesses props via this.props
  render() {
    // Step 1: Read values passed via props from App.js using this.props
    const { name, city } = this.props;

    // Step 2: Return JSX using the dynamic props
    return (
      <div className="delivery-info">
        {/* Dynamic heading using props received in class component */}
        <h3>{name} Delivery Areas ({city})</h3>

        {/* 3 delivery areas with fixed charges: ₹0, ₹20, and ₹30 */}
        <ul>
          <li>Navrangpura: ₹0 (Free Delivery)</li>
          <li>Satellite: ₹20</li>
          <li>Bopal: ₹30</li>
        </ul>
      </div>
    );
  }
}

// Export the component so it can be imported in App.js
export default DeliveryInfo;
