// ProfileHeader Component: Reusable header rendering mentor name, city, and 2-line bio
function ProfileHeader({ name, city, bio }) {
  return (
    <header className="profile-header-card">
      <div className="avatar-placeholder">
        {name ? name.charAt(0) : 'M'}
      </div>
      <h1 className="profile-name">{name}</h1>
      <p className="profile-city">📍 {city}</p>
      <div className="profile-bio">
        {bio.split('\n').map((line, index) => (
          <p key={index} className="bio-line">{line}</p>
        ))}
      </div>
    </header>
  );
}

export default ProfileHeader;
