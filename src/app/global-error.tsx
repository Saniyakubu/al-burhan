"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <main style={{ maxWidth: "48rem", margin: "4rem auto", padding: "0 1rem" }}>
          <h1>Something went wrong</h1>
          <p>Savvy Prime Ltd could not load this page. Please try again.</p>
          <button type="button" onClick={() => unstable_retry()}>
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
