
import Head from "next/head";
import Link from "next/link";
import NoticeCard from "../components/NoticeCard";
import { runQuery } from "../lib/notice_schema";

export async function getStaticProps() {
  const result = await runQuery(`
    {
      notices {
        id
        title
        category
        date
        urgent
      }
    }
  `);

  return {
    props: {
      data: JSON.parse(JSON.stringify(result.data))
    }
  };
}

export default function Home({ data }) {
  const notices = data.notices;

  return (
    <>
      <Head>
        <title>Sunshine Society - Notices</title>
        <meta
          name="description"
          content="Latest announcements and notices for Sunshine Society residents."
        />
      </Head>

      <main>
        <h1>Sunshine Society Notices</h1>

        {notices.map((notice) => (
          <Link
            key={notice.id}
            href={`/notices/${notice.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <NoticeCard notice={notice} />
          </Link>
        ))}
      </main>
    </>
  );
}
