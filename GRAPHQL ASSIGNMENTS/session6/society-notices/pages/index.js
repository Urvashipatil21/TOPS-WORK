import Head from "next/head";
import notices from "../data/notices";
import NoticeCard from "../components/NoticeCard";

export default function Home() {
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
          <NoticeCard key={notice.id} notice={notice} />
        ))}
      </main>
    </>
  );
}