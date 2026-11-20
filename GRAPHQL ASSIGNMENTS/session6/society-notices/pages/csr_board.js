import Head from "next/head";
import { useState, useEffect } from "react";
import noticesData from "../data/notices";
import NoticeCard from "../components/NoticeCard";

export default function CSRBoard() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotices(noticesData);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Sunshine Society - CSR Board</title>
        <meta
          name="description"
          content="View the latest community notices on the Sunshine Society CSR Board."
        />
      </Head>

      <main>
        <h1>Sunshine Society CSR Board</h1>

        {notices.length === 0 ? (
          <p>Loading notices...</p>
        ) : (
          notices.map((notice) => (
            <NoticeCard key={notice.id} notice={notice} />
          ))
        )}
      </main>
    </>
  );
}