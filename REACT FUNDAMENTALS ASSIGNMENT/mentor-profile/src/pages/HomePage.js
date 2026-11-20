// Step 1: Import reusable components
import ProfileHeader from '../components/ProfileHeader';
import SectionTitle from '../components/SectionTitle';
import SkillTag from '../components/SkillTag';

// Step 2: Import Link from react-router-dom
import { Link } from 'react-router-dom';

// Step 3: Import mentor data
import mentorData from '../data/mentor';

// HomePage Component: Renders mentor profile and skills dynamically
function HomePage() {
  return (
    <div className="home-page">
      {/* Reusable ProfileHeader component */}
      <ProfileHeader
        name={mentorData.name}
        city={mentorData.city}
        bio={mentorData.bio}
      />

      {/* Skills Section with SectionTitle */}
      <section className="skills-section">
        <SectionTitle
          title="Core Skills & Expertise"
          subtitle="Technologies and tools I mentor developers in"
        />

        {/* Dynamically render 6 skills using .map() */}
        <div className="skills-grid">
          {mentorData.skills.map((skill, index) => (
            <SkillTag key={index} skill={skill} />
          ))}
        </div>
      </section>

      {/* Quick Call to Action */}
      <section className="cta-section">
        <SectionTitle
          title="Ready to Level Up?"
          subtitle="Explore tailored mentorship sessions or book a free 1-on-1 kickstart call."
        />
        <div className="cta-buttons">
          <Link to="/sessions" className="btn-primary">
            View Mentorship Sessions
          </Link>
          <Link to="/book" className="btn-secondary">
            Book a Slot
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
