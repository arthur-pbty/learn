import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import sujets from "@/data/sujets.json";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <Script id="matomo" strategy="afterInteractive">
          {`
            var _paq = window._paq = window._paq || [];

            _paq.push(['setCustomUrl', window.location.href]);
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);

            (function() {
              var u="https://analytics.arthurp.fr/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '5']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();
          `}
        </Script>
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50`}>
        <header className="w-full bg-white shadow mb-8">
          <nav className="max-w-5xl mx-auto flex flex-wrap items-center justify-between py-4 px-6">
            <Link href="/" className="text-2xl font-bold text-blue-700">
              Sujets Populaires
            </Link>

            <ul className="flex flex-wrap gap-4">
              {sujets.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="text-zinc-700 hover:underline"
                  >
                    {s.title.split(":")[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main className="max-w-5xl mx-auto w-full min-h-[70vh] px-4">
          {children}
        </main>

        <footer className="w-full bg-zinc-100 py-6 mt-12 border-t border-zinc-200">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-2">
            <div className="text-zinc-600 text-sm">
              © {new Date().getFullYear()} Sujets Populaires. Tous droits réservés.
            </div>

            <div className="flex gap-4 text-sm">
              <Link href="/contact" className="hover:underline text-zinc-700">
                Contact
              </Link>
              <Link
                href="/politique-confidentialite"
                className="hover:underline text-zinc-700"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}