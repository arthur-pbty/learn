import { notFound } from 'next/navigation';
import SEO from '@/components/SEO';
import sujets from '@/data/sujets.json';
import Image from 'next/image';
import React from 'react';
import ReactMarkdown from 'react-markdown';

export const dynamicParams = false; // SSG only

export async function generateStaticParams() {
  return sujets.map((sujet) => ({ slug: sujet.slug }));
}


// Correction Next.js 14+ : params peut être une Promise
export async function generateMetadata({ params }: { params: { slug: string } } | { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sujet = sujets.find((s) => s.slug === slug);
  if (!sujet) return {};
  return {
    title: sujet.title,
    description: sujet.description,
    openGraph: {
      title: sujet.title,
      description: sujet.description,
      images: [sujet.image1.src],
      url: `/${sujet.slug}`,
      type: 'article',
    },
  };
}

  // Next.js 14+ : params peut être un Promise
export default async function SujetPage({ params }: { params: { slug: string } } | { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sujet = sujets.find((s) => s.slug === slug);
  if (!sujet) return notFound();
  type Section = {
    h2: string;
    content: string;
    h3?: string;
  };
  const sections: Section[] = Array.isArray(sujet.sections) ? sujet.sections : [];

  return (
    <>
      <SEO
        title={sujet.title}
        description={sujet.description}
        image={sujet.image1.src}
        url={`/${sujet.slug}`}
      />
      <main className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-4 text-black">{sujet.title}</h1>
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <Image src={sujet.image1.src} alt={sujet.image1.alt} width={500} height={300} className="rounded w-full md:w-1/2 object-cover" />
          {sujet.image2 && (
            <Image src={sujet.image2.src} alt={sujet.image2.alt} width={500} height={300} className="rounded w-full md:w-1/2 object-cover" />
          )}
        </div>
        {sections.map((section, idx) => (
          <React.Fragment key={idx}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-2 text-black">{section.h2}</h2>
              {section.h3 && <h3 className="text-xl font-medium mb-1 text-zinc-700">{section.h3}</h3>}
              <div className="text-zinc-700 leading-7">
                <ReactMarkdown>{section.content}</ReactMarkdown>
              </div>
            </section>
            {/* Emplacement pub entre sections (après la première section) */}
            {idx === 0 && (
              <div className="ad-inpage my-8 flex justify-center">
                <div className="bg-zinc-100 rounded p-2 text-xs text-zinc-500">[Publicité In-Page 336x280]</div>
              </div>
            )}
          </React.Fragment>
        ))}
      </main>
    </>
  );
}