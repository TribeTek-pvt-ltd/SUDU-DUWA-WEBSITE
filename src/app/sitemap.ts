import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sududuwa.com';
  
  // Use a fixed build / content release date rather than dynamic new Date() on every request
  const lastUpdated = new Date('2026-11-01T00:00:00.000Z');

  const routes: {
    path: string;
    priority: number;
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly';
  }[] = [
    { path: '', priority: 1.0, changeFrequency: 'daily' },
    { path: '/products', priority: 0.95, changeFrequency: 'daily' },
    { path: '/about', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/farming-practices', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/faq', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/gallery', priority: 0.75, changeFrequency: 'monthly' },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: lastUpdated,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
