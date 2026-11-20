// Step 1: Import reusable components
import SectionTitle from '../components/SectionTitle';
import SessionPlan from '../components/SessionPlan';

// Step 2: Import mentor data
import mentorData from '../data/mentor';

// SessionsPage: Displays all available mentorship sessions using SessionPlan component
function SessionsPage() {
  return (
    <div className="sessions-page">
      <SectionTitle
        title="Mentorship Sessions"
        subtitle="Choose a session plan that best matches your learning goals"
      />

      {/* Render reusable SessionPlan component for each session from mentor data */}
      <div className="sessions-grid">
        {mentorData.sessions.map((session) => (
          <SessionPlan
            key={session.id}
            title={session.title}
            duration={session.duration}
            fee={session.fee}
            level={session.level}
          />
        ))}
      </div>
    </div>
  );
}

export default SessionsPage;
