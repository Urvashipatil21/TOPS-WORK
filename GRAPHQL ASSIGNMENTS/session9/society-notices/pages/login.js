
import Head from "next/head";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login - Sunshine Society</title>
      </Head>

      <main>
        <h1>Firebase Login</h1>
        <p>
          Project ID: {process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}
        </p>
      </main>
    </>
  );
}
