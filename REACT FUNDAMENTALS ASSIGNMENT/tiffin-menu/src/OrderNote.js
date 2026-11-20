// OrderNote Component: Displays ordering instructions and delivery details
function OrderNote() {
  return (
    <div className="order-note">
      {/* Information about minimum order and delivery hours */}
      <p>
        <strong>Minimum Order:</strong> ₹180
      </p>
      <p>
        <strong>Delivery Window:</strong> 11:30 AM to 1:30 PM
      </p>
    </div>
  );
}

// Export OrderNote as default so it can be imported into App.js
export default OrderNote;
