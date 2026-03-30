import Link from 'next/link';
import Image from 'next/image';
import SEO from '@/components/SEO';
import sujetsData from '@/data/sujets.json';

type Sujet = {
  slug: string;
  title: string;
  description: string;
  image1: {
    src: string;
    alt: string;
  };
};

const sujets = sujetsData as Sujet[];

export default function Home() {
  return (
    <>
      <SEO
        title="Accueil - Sujets Populaires"
        description="Découvrez nos articles sur des sujets populaires : IA, voyage, énergie, alimentation, code et plus encore."
        url="/"
      />
      <main className="min-h-screen bg-zinc-50 py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-black">Sujets Populaires</h1>
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sujets.map((sujet) => (
            <li key={sujet.slug} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <Link href={`/${sujet.slug}`} className="w-full">
                <Image
                  src={sujet.image1.src}
                  alt={sujet.image1.alt}
                  className="rounded w-full h-40 object-cover mb-4"
                  width={400}
                  height={160}
                />
                <h2 className="text-2xl font-semibold mb-2 text-black">{sujet.title}</h2>
                <p className="text-zinc-700">{sujet.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
