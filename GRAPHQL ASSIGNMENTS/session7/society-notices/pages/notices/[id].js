import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import notices from "../../data/notices";

export default function NoticeDetails() {
  const router = useRouter();

  if (!router.isReady) {
    return <p>Loading notice...</p>;
  }

  const id = Number(router.query.id);

  const notice = notices.find((item) => item.id === id);

  if (!notice) {
    return (
      <main>
        <h1>Notice not found</h1>
        <Link href="/">Back to Home</Link>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>{notice.title} - Sunshine Society</title>
        <meta
          name="description"
          content={`Details of ${notice.title} notice.`}
        />
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
      </main>
    </>
  );
}