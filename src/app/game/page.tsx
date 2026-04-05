export const metadata = {
  title: "Learn Spanish — Portfolio",
  description:
    "A 3D Spanish vocabulary game where you match words, practice pronunciation, and build a forest village.",
};

export default function GamePage() {
  return (
    <div className="relative h-dvh w-full bg-[#09090b]">
      {/* Back button overlay */}
      <a
        href="/"
        className="absolute left-4 top-4 z-10 rounded-lg bg-black/60 px-3 py-1.5 text-xs text-white/50 backdrop-blur-sm transition-colors hover:text-white"
      >
        &larr; Back
      </a>

      {/* Spanish learning game */}
      <iframe
        src="/spanish-game/index.html"
        className="h-full w-full border-0"
        allow="autoplay; fullscreen; microphone"
        title="Learn Spanish — Bosque de Palabras"
      />
    </div>
  );
}
