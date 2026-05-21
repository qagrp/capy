import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.yourbrand.com/',
      lastModified: new Date('2026-05-21'),
      changeFrequency: 'weekly',
      priority: 1
    }
  ];
}
