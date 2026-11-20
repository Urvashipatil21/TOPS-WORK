// Step 1: Import useState and useEffect hooks from React
import { useState, useEffect } from 'react';

// LiveClock Component: Displays the current real-time clock updating every second
function LiveClock() {
  // Step 2: State to store the current formatted time string
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // Step 3: useEffect with empty dependency array [] runs once when the component mounts
  useEffect(() => {
    // Start an interval timer that updates the time every 1000ms (1 second)
    const timerId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Step 4: Cleanup function: React executes this function when the component unmounts
    // to prevent memory leaks and background interval executions
    return () => {
      clearInterval(timerId);
    };
  }, []); // Empty dependency array: setup on mount, cleanup on unmount

  return (
    <div className="live-clock-container">
      <p>
        Current Time: <span className="clock-time">{currentTime}</span>
      </p>
    </div>
  );
}

// Export LiveClock so it can be conditionally rendered in IssueRegister.js
export default LiveClock;
