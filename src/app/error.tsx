"use client";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 px-4">
      <h1 className="text-5xl font-bold text-black mb-4">Erreur</h1>
      <h2 className="text-2xl text-zinc-700 mb-2">Une erreur est survenue</h2>
      <p className="text-zinc-700 mb-6">{error.message}</p>
      <button onClick={reset} className="text-blue-700 underline">Réessayer</button>
    </main>
  );
}
