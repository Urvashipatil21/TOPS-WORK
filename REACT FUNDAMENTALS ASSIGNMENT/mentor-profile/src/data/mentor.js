// Fictional mentor profile data file
export const mentorData = {
  name: 'Aarav Sharma',
  city: 'Bengaluru, India',
  bio: 'Senior Frontend Engineer & Open-Source Enthusiast with 8+ years building web applications.\nPassionate about mentoring aspiring developers in modern React architecture and career growth.',
  skills: [
    'React',
    'JavaScript',
    'TypeScript',
    'Next.js',
    'Redux Toolkit',
    'Node.js',
  ],
  sessions: [
    {
      id: 1,
      title: '1-on-1 Career Kickstart & Mentorship Q&A',
      duration: '30 mins',
      fee: 0, // Free session to trigger 'Fee waived'
      level: 'Beginner',
    },
    {
      id: 2,
      title: 'Deep-Dive Code Review & Component Architecture',
      duration: '60 mins',
      fee: 1200,
      level: 'Intermediate',
    },
    {
      id: 3,
      title: 'Mock Technical Interview & Live Problem Solving',
      duration: '45 mins',
      fee: 1800,
      level: 'Advanced',
    },
  ],
};

export default mentorData;
