import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1
        className="text-6xl font-medium mb-4"
        style={{ color: "var(--text-muted)" }}
      >
        404
      </h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="underline transition-colors hover:opacity-80"
        style={{
          color: "var(--text)",
          textDecorationColor: "var(--text-muted)",
        }}
      >
        Back to home
      </Link>
    </main>
  );
}
