import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="mt-4">
        The page you opened is not available. You can return to the homepage or contact
        Savvy Prime Ltd directly.
      </p>
      <Link href="/" className="mt-6 inline-block border px-4 py-2">
        Go home
      </Link>
    </div>
  );
}
