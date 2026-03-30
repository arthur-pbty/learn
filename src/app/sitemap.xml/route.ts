import { NextResponse } from 'next/server';
import sujets from '@/data/sujets.json';

export async function GET() {
  const baseUrl = 'https://learn.arthurp.fr'; // À personnaliser
  const staticPages = [
    '',
    '/contact',
    '/politique-confidentialite',
  ];
  const sujetPages = sujets.map((s) => `/${s.slug}`);
  const allPages = [...staticPages, ...sujetPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map(
      (url) => `
    <url>
      <loc>${baseUrl}${url}</loc>
    </url>`
    )
    .join('')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
