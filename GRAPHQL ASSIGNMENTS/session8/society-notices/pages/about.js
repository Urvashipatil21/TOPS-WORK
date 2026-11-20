import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Sunshine Society</title>
        <meta
          name="description"
          content="Learn about Sunshine Society and its committee members."
        />
      </Head>

      <main>
        <h1>About Sunshine Society</h1>

        <h2>Our Address</h2>
        <p>
          Sunshine Society, 25 Green Park Road,
          Ahmedabad, Gujarat, India - 380015
        </p>

        <h2>Committee Members</h2>

        <ul>
          <li>Rahul Sharma - President</li>
          <li>Priya Patel - Secretary</li>
          <li>Amit Shah - Treasurer</li>
        </ul>
      </main>
    </>
  );
}
