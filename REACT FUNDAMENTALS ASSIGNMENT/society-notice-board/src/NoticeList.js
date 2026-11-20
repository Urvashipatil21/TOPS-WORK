// NoticeList Component: Receives notices array via props and renders titles & bodies
function NoticeList({ notices = [] }) {
  return (
    <div className="notice-list-container">
      {/* If notices list is empty */}
      {notices.length === 0 ? (
        <p className="no-notices">No notices available for this block.</p>
      ) : (
        <div className="notices-grid">
          {/* Map through each notice in the array */}
          {notices.map((notice) => (
            <article key={notice.id} className="notice-card">
              <div className="notice-badge">Notice #{notice.id}</div>
              <h3 className="notice-title">{notice.title}</h3>
              <p className="notice-body">{notice.body}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

// Export NoticeList so App.js can render it
export default NoticeList;
