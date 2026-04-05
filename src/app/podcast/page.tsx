import Link from "next/link";

export const metadata = {
  title: "Podcast — Portfolio",
  description: "Browse this portfolio as podcast episodes.",
};

export default function PodcastPage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-gray-950 px-4">
      <div className="text-center">
        <div className="mb-4 text-5xl">🎙️</div>
        <h1 className="mb-2 text-2xl font-bold text-white">
          Podcast Mode — Coming Soon
        </h1>
        <p className="mb-6 text-white/50">
          This theme is under construction. Check back later!
        </p>
        <Link
          href="/"
          className="text-sm text-indigo-400 transition-colors hover:text-indigo-300"
        >
          &larr; Back to Hub
        </Link>
      </div>
    </div>
  );
}
