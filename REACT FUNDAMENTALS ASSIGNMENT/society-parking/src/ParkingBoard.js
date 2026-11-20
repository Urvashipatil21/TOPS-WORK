// Step 1: Import the useState hook from React
import { useState } from 'react';

// Total parking capacities for cars and two-wheelers
const TOTAL_CAR_SLOTS = 20;
const TOTAL_BIKE_SLOTS = 30;

// ParkingBoard Component: Tracks parking slots, total daily entries, and fee collection
function ParkingBoard() {
  // --- State 1 & 2: Current parked counts ---
  const [parkedCars, setParkedCars] = useState(0);
  const [parkedBikes, setParkedBikes] = useState(0);

  // --- State 3 & 4: Total entries today (separate from current parked count) ---
  const [totalCarEntries, setTotalCarEntries] = useState(0);
  const [totalBikeEntries, setTotalBikeEntries] = useState(0);

  // Calculate remaining free slots
  const freeCarSlots = TOTAL_CAR_SLOTS - parkedCars;
  const freeBikeSlots = TOTAL_BIKE_SLOTS - parkedBikes;

  // Calculate total fees collected: ₹20 per car entry and ₹10 per bike entry
  const totalFee = totalCarEntries * 20 + totalBikeEntries * 10;

  // --- Car Event Handlers ---
  function handleCarIn() {
    if (parkedCars < TOTAL_CAR_SLOTS) {
      // Increase both current parked cars and today's total car entries
      setParkedCars((prevCars) => prevCars + 1);
      setTotalCarEntries((prevEntries) => prevEntries + 1);
    }
  }

  function handleCarOut() {
    if (parkedCars > 0) {
      // Decrease only current parked cars (entries remain recorded)
      setParkedCars((prevCars) => prevCars - 1);
    }
  }

  // --- Bike Event Handlers ---
  function handleBikeIn() {
    if (parkedBikes < TOTAL_BIKE_SLOTS) {
      // Increase both current parked bikes and today's total bike entries
      setParkedBikes((prevBikes) => prevBikes + 1);
      setTotalBikeEntries((prevEntries) => prevEntries + 1);
    }
  }

  function handleBikeOut() {
    if (parkedBikes > 0) {
      // Decrease only current parked bikes (entries remain recorded)
      setParkedBikes((prevBikes) => prevBikes - 1);
    }
  }

  // --- Reset Day Handler ---
  // Resets all four state values back to 0 at the end of the day
  function handleResetDay() {
    setParkedCars(0);
    setParkedBikes(0);
    setTotalCarEntries(0);
    setTotalBikeEntries(0);
  }

  return (
    <div className="parking-board">
      <h2>Society Parking Board</h2>

      {/* --- Section 1: Four-Wheeler (Car) Parking --- */}
      <div className="vehicle-section">
        <h3>Cars (4-Wheelers)</h3>
        <div className="parking-status">
          <p>
            <strong>Cars parked:</strong> {parkedCars} / {TOTAL_CAR_SLOTS}
          </p>
          <p>
            <strong>Free car slots:</strong> {freeCarSlots}
          </p>
          <p>
            <strong>Today's car entries:</strong> {totalCarEntries}
          </p>
        </div>

        <div className="button-group">
          <button
            onClick={handleCarIn}
            disabled={parkedCars >= TOTAL_CAR_SLOTS}
            className="btn btn-in"
          >
            Car In
          </button>
          <button
            onClick={handleCarOut}
            disabled={parkedCars <= 0}
            className="btn btn-out"
          >
            Car Out
          </button>
        </div>
      </div>

      {/* --- Section 2: Two-Wheeler (Bike) Parking --- */}
      <div className="vehicle-section">
        <h3>Bikes (2-Wheelers)</h3>
        <div className="parking-status">
          <p>
            <strong>Bikes parked:</strong> {parkedBikes} / {TOTAL_BIKE_SLOTS}
          </p>
          <p>
            <strong>Free bike slots:</strong> {freeBikeSlots}
          </p>
          <p>
            <strong>Today's bike entries:</strong> {totalBikeEntries}
          </p>
        </div>

        <div className="button-group">
          <button
            onClick={handleBikeIn}
            disabled={parkedBikes >= TOTAL_BIKE_SLOTS}
            className="btn btn-in"
          >
            Bike In
          </button>
          <button
            onClick={handleBikeOut}
            disabled={parkedBikes <= 0}
            className="btn btn-out"
          >
            Bike Out
          </button>
        </div>
      </div>

      {/* --- Section 3: Daily Summary & Fee Collection --- */}
      <div className="summary-section">
        <h3>Daily Summary</h3>
        <p className="fee-collected">
          <strong>Total Fee Collected:</strong> ₹{totalFee}
        </p>
        <p className="fee-breakdown">
          (₹20 per car entry + ₹10 per bike entry)
        </p>

        {/* Reset Day button to reset all 4 state values */}
        <button onClick={handleResetDay} className="btn btn-reset">
          Reset Day
        </button>
      </div>
    </div>
  );
}

// Export ParkingBoard as default so App.js can import and display it
export default ParkingBoard;
