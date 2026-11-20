export default function NoticeCard({ notice }) {
  return (
    <div className="notice-card">
      <h2>{notice.title}</h2>

      <p>Category: {notice.category}</p>
      <p>Date: {notice.date}</p>
      <p>{notice.body}</p>

      {notice.urgent && (
        <span className="urgent">URGENT</span>
      )}
    </div>
  );
}