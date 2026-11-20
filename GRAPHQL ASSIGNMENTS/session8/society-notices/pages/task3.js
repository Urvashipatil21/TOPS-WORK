
import Head from "next/head";
import Link from "next/link";
import { runQuery } from "../lib/notice_schema";

export async function getServerSideProps() {
  const today = new Date().toLocaleDateString("en-CA", {
    timeZone: "Asia/Kolkata"
  });

  const renderedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata"
  });

  const result = await runQuery(`
    {
      notices {
        id
        title
        category
        date
        body
        urgent
      }
    }
  `);

  const upcoming = result.data.notices.filter(
    (notice) => notice.date >= today
  );

  return {
    props: {
      notices: JSON.parse(JSON.stringify(upcoming)),
      renderedAt
    }
  };
}

export default function Upcoming({ notices, renderedAt }) {
  return (
    <>
      <Head>
        <title>Upcoming Notices</title>
      </Head>

      <main>
        <h1>Upcoming Notices</h1>

        <p>Rendered on the server at: {renderedAt}</p>

        {notices.map((notice) => (
          <div className="notice-card" key={notice.id}>
            <h2>
              <Link href={`/notices/${notice.id}`}>
                {notice.title}
              </Link>
            </h2>
            <p>Category: {notice.category}</p>
            <p>Date: {notice.date}</p>
          </div>
        ))}

        <Link href="/">Back to Home</Link>
      </main>
    </>
  );
}
