import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 px-4">
      <h1 className="text-5xl font-bold text-black mb-4">404</h1>
      <h2 className="text-2xl text-zinc-700 mb-2">Page non trouvée</h2>
      <p className="text-zinc-700 mb-6">La page que vous cherchez n’existe pas ou a été déplacée.</p>
      <Link href="/" className="text-blue-700 underline">Retour à l’accueil</Link>
    </main>
  );
}
