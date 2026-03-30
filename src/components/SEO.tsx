import Head from 'next/head';

export type SEOProps = {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
  publishedTime?: string;
  updatedTime?: string;
  author?: string;
};

export default function SEO({
  title,
  description,
  image = '',
  url = '',
  type = 'article',
  publishedTime,
  updatedTime,
  author,
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content={type} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {updatedTime && <meta property="article:modified_time" content={updatedTime} />}
      {author && <meta property="article:author" content={author} />}
      <meta name="twitter:card" content="summary_large_image" />
      {image && <meta name="twitter:image" content={image} />}
    </Head>
  );
}
