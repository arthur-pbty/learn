import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import sujets from '@/data/sujets.json';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sujets Populaires",
  description: "Articles originaux sur des sujets populaires.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50`}>
        <header className="w-full bg-white shadow mb-8 relative">
          {/* Emplacement pub header */}
          <div className="w-full flex justify-center bg-zinc-100 py-2">
            {/* AdSense : remplacer par le script réel */}
            <div className="ad-header text-xs text-zinc-500">[Publicité Header 728x90]</div>
          </div>
          <nav className="max-w-5xl mx-auto flex flex-wrap items-center justify-between py-4 px-6">
            <Link href="/" className="text-2xl font-bold text-blue-700">Sujets Populaires</Link>
            <ul className="flex flex-wrap gap-4">
              {sujets.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className="text-zinc-700 hover:underline">
                    {s.title.split(':')[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <div className="flex max-w-5xl mx-auto w-full">
          {/* Sidebar pub desktop */}
          <aside className="hidden lg:block w-56 shrink-0 mt-4">
            <div className="sticky top-24">
              <div className="ad-sidebar bg-zinc-100 rounded p-2 text-xs text-zinc-500 mb-4">[Publicité Sidebar 300x600]</div>
            </div>
          </aside>
          <main className="min-h-[70vh] flex-1">{children}</main>
        </div>
        <footer className="w-full bg-zinc-100 py-6 mt-12 border-t border-zinc-200">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-2">
            <div className="text-zinc-600 text-sm">© {new Date().getFullYear()} Sujets Populaires. Tous droits réservés.</div>
            <div className="flex gap-4 text-sm">
              <Link href="/contact" className="hover:underline text-zinc-700">Contact</Link>
              <Link href="/politique-confidentialite" className="hover:underline text-zinc-700">Politique de confidentialité</Link>
            </div>
            {/* Emplacement pub footer */}
            <div className="ad-footer text-xs text-zinc-500 mt-4">[Publicité Footer 728x90]</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
