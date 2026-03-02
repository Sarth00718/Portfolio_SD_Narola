import { Helmet } from 'react-helmet-async';
import { PROFILE } from '@data/achievements';

export default function SEOMeta({
  title = `${PROFILE.name} | Full Stack Developer & AI Enthusiast`,
  description = `${PROFILE.name} — B.Tech CSE, Nirma University (CGPA ${PROFILE.cgpa}). Full Stack & AI Developer. MERN Stack, LangChain, RAG, FastAPI. Amazon ML Summer School 2025. Looking for SDE roles in 2026.`,
  url = 'https://sarthnarola.dev',
  image = '/og-image.png',
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={PROFILE.name} />
      <meta name="keywords" content="Sarth Narola, Full Stack Developer, AI Engineer, MERN Stack, LangChain, RAG, React, Node.js, MongoDB, FastAPI, Nirma University, Portfolio, Surat, Gujarat" />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="theme-color" content="#0f172a" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: PROFILE.name,
          jobTitle: PROFILE.title,
          url,
          email: PROFILE.email,
          sameAs: [PROFILE.github, PROFILE.linkedin],
          alumniOf: { '@type': 'CollegeOrUniversity', name: PROFILE.university },
          address: {
            '@type': 'PostalAddress',
            streetAddress: '104, New Shakti Vijay Society, Varachha Road',
            addressLocality: 'Surat',
            addressRegion: 'Gujarat',
            postalCode: '395006',
            addressCountry: 'IN',
          },
        })}
      </script>
    </Helmet>
  );
}
