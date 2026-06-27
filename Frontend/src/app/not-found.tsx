import Link from "next/link";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center max-w-md px-6">
        <div className="size-20 rounded-full bg-[var(--grey-light)] flex items-center justify-center mx-auto">
          <FileQuestion className="size-10 text-cyan" />
        </div>
        <h1 className="text-4xl font-bold text-navy mt-6">Page Not Found</h1>
        <p className="text-grey-dark mt-3">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-cyan text-white rounded-md min-h-12 px-8 py-3 font-semibold text-sm mt-8 hover:opacity-90 transition-opacity"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
