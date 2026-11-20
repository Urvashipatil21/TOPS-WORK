// Step 1: Import the useState hook from React
import { useState } from 'react';

// Import the HostelBadge component
import HostelBadge from './HostelBadge';

// Initial list of 6 fictional registrations:
// - At least 2 'Rangoli' records (Aarav, Rohan, Ananya)
// - Exactly 0 'Dance' records (to test empty filtered results)
// - Remaining records are 'Quiz' (Priya, Kabir, Diya)
const initialRegistrations = [
  { id: 1, name: 'Aarav Patel', city: 'Ahmedabad', eventName: 'Rangoli', needsHostel: false },
  { id: 2, name: 'Priya Sharma', city: 'Jaipur', eventName: 'Quiz', needsHostel: true },
  { id: 3, name: 'Rohan Verma', city: 'Delhi', eventName: 'Rangoli', needsHostel: true },
  { id: 4, name: 'Ananya Iyer', city: 'Chennai', eventName: 'Rangoli', needsHostel: false },
  { id: 5, name: 'Kabir Mehta', city: 'Mumbai', eventName: 'Quiz', needsHostel: false },
  { id: 6, name: 'Diya Sen', city: 'Kolkata', eventName: 'Quiz', needsHostel: true },
];

// RegistrationForm Component: Manages participant registrations, filtering, removal, and stats
function RegistrationForm() {
  // --- Form Input States ---
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [event, setEvent] = useState('Rangoli');
  const [needHostel, setNeedHostel] = useState(false);

  // --- Registration List State ---
  const [registrations, setRegistrations] = useState(initialRegistrations);

  // --- Filter State ('All', 'Rangoli', 'Quiz', 'Dance') ---
  const [filterEvent, setFilterEvent] = useState('All');

  // Status states
  const [isOpen, setIsOpen] = useState(true);
  const [message, setMessage] = useState('');

  // Calculate fees using normal local variables
  const baseFee = 200;
  const hostelFee = needHostel ? 150 : 0;
  const totalFee = baseFee + hostelFee;

  // Step 2: Filter registrations according to the chosen dropdown filter
  const filteredRegistrations = registrations.filter((reg) => {
    if (filterEvent === 'All') {
      return true;
    }
    return reg.eventName === filterEvent;
  });

  // Step 3: Dynamically calculate total hostel rooms needed among current/visible registrations
  const hostelRoomsNeeded = filteredRegistrations.filter((reg) => reg.needsHostel).length;

  // --- Input Change Handlers ---
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleCityChange(e) {
    setCity(e.target.value);
  }

  function handleEventChange(e) {
    setEvent(e.target.value);
  }

  function handleHostelChange(e) {
    setNeedHostel(e.target.checked);
  }

  function handleFilterChange(e) {
    setFilterEvent(e.target.value);
  }

  // Toggle open/closed state
  function handleToggleRegistration() {
    setIsOpen((prevIsOpen) => {
      const nextIsOpen = !prevIsOpen;
      if (nextIsOpen) {
        setMessage('Registration is now OPEN.');
      } else {
        setMessage('Registration is now CLOSED.');
      }
      return nextIsOpen;
    });
  }

  // Step 4: Remove handler using .filter() to delete a record by its id
  function handleRemove(idToRemove) {
    setRegistrations((prevRegistrations) =>
      prevRegistrations.filter((reg) => reg.id !== idToRemove)
    );
  }

  // --- Form Submit Handler ---
  function handleSubmit(e) {
    e.preventDefault();

    // Check if registration is open
    if (!isOpen) {
      setMessage('Registration is closed.');
      return;
    }

    // Validation 1: Name must have at least 3 characters
    if (name.trim().length < 3) {
      setMessage('Error: Name must be at least 3 characters long.');
      return;
    }

    // Validation 2: City cannot be empty
    if (city.trim() === '') {
      setMessage('Error: City is required and cannot be empty.');
      return;
    }

    // Create a new registration object using Date.now() for unique id
    const newReg = {
      id: Date.now(),
      name: name.trim(),
      city: city.trim(),
      eventName: event,
      needsHostel: needHostel,
    };

    // Add new registration using the spread operator
    setRegistrations((prevRegistrations) => [...prevRegistrations, newReg]);

    // Set feedback message
    setMessage(`Registration done for ${newReg.name}!`);

    // Clear all form input fields upon successful submission
    setName('');
    setCity('');
    setEvent('Rangoli');
    setNeedHostel(false);
  }

  return (
    <div className="registration-card">
      <h2>Fest Event Registration</h2>

      {/* Toggle button */}
      <div className="toggle-container">
        <button
          type="button"
          onClick={handleToggleRegistration}
          className="btn-toggle"
        >
          Toggle Registration
        </button>
      </div>

      {/* Registration form */}
      <form onSubmit={handleSubmit} className="form-container">
        {/* Name input */}
        <div className="form-group">
          <label htmlFor="participant-name">Full Name:</label>
          <input
            id="participant-name"
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter at least 3 characters"
          />
        </div>

        {/* City input */}
        <div className="form-group">
          <label htmlFor="participant-city">City:</label>
          <input
            id="participant-city"
            type="text"
            value={city}
            onChange={handleCityChange}
            placeholder="Enter your city"
          />
        </div>

        {/* Event dropdown */}
        <div className="form-group">
          <label htmlFor="fest-event">Select Event:</label>
          <select
            id="fest-event"
            value={event}
            onChange={handleEventChange}
          >
            <option value="Rangoli">Rangoli</option>
            <option value="Quiz">Quiz</option>
            <option value="Dance">Dance</option>
          </select>
        </div>

        {/* Hostel accommodation checkbox */}
        <div className="checkbox-group">
          <label htmlFor="hostel-checkbox" className="checkbox-label">
            <input
              id="hostel-checkbox"
              type="checkbox"
              checked={needHostel}
              onChange={handleHostelChange}
            />
            I need hostel stay (+₹150)
          </label>
        </div>

        {/* Submit button */}
        <button type="submit" className="btn-submit">
          Register
        </button>
      </form>

      {/* Status message */}
      <p className="status-message">{message}</p>

      {/* Live preview and fee section */}
      <div className="preview-box">
        <h3>Live Registration Summary:</h3>
        <p className="preview-text">
          Registering: {name} from {city} for {event}
        </p>
        <p className="fee-text">
          Total Fee: ₹{totalFee}
        </p>
      </div>

      {/* Registered Participants Section */}
      <div className="registered-list-section">
        <div className="list-header">
          <div>
            <h3>Registered Participants ({filteredRegistrations.length})</h3>
            {/* Step 5: Dynamically display total count of hostel rooms needed */}
            <p className="hostel-rooms-count">
              Hostel rooms needed: {hostelRoomsNeeded}
            </p>
          </div>

          {/* Event Filter Dropdown */}
          <div className="filter-group">
            <label htmlFor="filter-event-select">Filter by Event:</label>
            <select
              id="filter-event-select"
              value={filterEvent}
              onChange={handleFilterChange}
            >
              <option value="All">All</option>
              <option value="Rangoli">Rangoli</option>
              <option value="Quiz">Quiz</option>
              <option value="Dance">Dance</option>
            </select>
          </div>
        </div>

        {/* Conditional ternary for filtered list */}
        {filteredRegistrations.length === 0 ? (
          <p className="empty-message">No registrations for {filterEvent}</p>
        ) : (
          <ul className="registrations-list">
            {filteredRegistrations.map((reg) => (
              <li key={reg.id} className="registration-item">
                <div className="participant-info">
                  <strong>{reg.name}</strong>
                  <HostelBadge needsHostel={reg.needsHostel} />
                  <span>({reg.city}) &bull; {reg.eventName}</span>
                </div>

                {/* Step 6: Remove button with arrow function onClick={() => handleRemove(reg.id)} */}
                <button
                  type="button"
                  onClick={() => handleRemove(reg.id)}
                  className="btn-remove"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// Export the component so App.js can render it
export default RegistrationForm;
