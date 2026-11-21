"use client";

import { useEffect } from "react";

export default function ErrorPage({
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
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Something went wrong</h1>
      <p className="mt-4">
        The page could not load properly. Please try again or contact Savvy Prime Ltd
        through WhatsApp.
      </p>
      <button type="button" onClick={() => unstable_retry()} className="mt-6 border px-4 py-2">
        Try again
      </button>
    </div>
  );
}
