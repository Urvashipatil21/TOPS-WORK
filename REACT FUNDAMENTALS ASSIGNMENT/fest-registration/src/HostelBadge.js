// HostelBadge Component: Displays a 'Hostel' badge when accommodation is needed
function HostelBadge({ needsHostel }) {
  // If hostel is not needed, return null so React renders nothing
  if (!needsHostel) {
    return null;
  }

  // Otherwise, return the Hostel badge span
  return <span className="badge hostel-badge">Hostel</span>;
}

// Export HostelBadge as default
export default HostelBadge;
