import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-medium text-gray-200 mb-4">404</h1>
      <p className="text-muted mb-8">This page doesn&apos;t exist.</p>
      <Link
        href="/"
        className="underline decoration-gray-300 hover:decoration-gray-900 transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
