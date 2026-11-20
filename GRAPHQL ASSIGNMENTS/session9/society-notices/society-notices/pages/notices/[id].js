
import Head from "next/head";
import Link from "next/link";
import { runQuery } from "../../lib/notice_schema";

export async function getStaticPaths() {
  const result = await runQuery(`
    {
      notices {
        id
      }
    }
  `);

  const paths = result.data.notices.map((notice) => ({
    params: { id: String(notice.id) }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const result = await runQuery(`
    {
      notice(id: ${Number(params.id)}) {
        id
        title
        category
        date
        body
        urgent
      }
    }
  `);

  const notice = result.data.notice;

  if (!notice) {
    return { notFound: true };
  }

  return {
    props: {
      notice: JSON.parse(JSON.stringify(notice))
    }
  };
}

export default function NoticeDetails({ notice }) {
  return (
    <>
      <Head>
        <title>{notice.title} - Sunshine Society</title>
      </Head>

      <main>
        <h1>{notice.title}</h1>
        <p>Category: {notice.category}</p>
        <p>Date: {notice.date}</p>
        <p>{notice.body}</p>

        <div className="notice-navigation">
          {notice.id > 1 && (
            <Link href={`/notices/${notice.id - 1}`}>
              Previous notice
            </Link>
          )}

          {notice.id < 6 && (
            <Link href={`/notices/${notice.id + 1}`}>
              Next notice
            </Link>
          )}
        </div>

        <p><Link href="/">Back to Home</Link></p>
      </main>
    </>
  );
}
