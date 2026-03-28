import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jraviodetailing.ro';
  
  // Blog posts from noutati
  const blogPosts = [
    '3dview-ai-vizualizari-3d',
    'adbanner-productie-publicitara',
    'bazadate-cea-mai-mare-baza-de-date-romania',
    'chatbill-platforma-billing-suport',
    'euprint-identitate-vizuala-fonduri-europene',
    'prynt-servicii-print-profesionale',
    'shopprint-productie-publicitara',
    'tablou-net-tablouri-canvas'
  ];

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/noutati/${post}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Main pages
  const routes = [
    '',
    '/servicii',
    '/pricing',
    '/gallery',
    '/contact',
    '/avantaje-detailing',
    '/ce-este-ppf',
    '/ce-este-protectia-ceramica',
    '/noutati',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? ('daily' as const) : ('weekly' as const),
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes, ...blogUrls];
}
