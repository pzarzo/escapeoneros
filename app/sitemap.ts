import { MetadataRoute } from 'next';
import { reseñas } from '@/data/reseñas';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://escaperoneros.vercel.app';

  const paginasFijas = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/resenas`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ranking`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ];

  const paginasReseñas = reseñas.map((reseña) => ({
    url: `${baseUrl}/resenas/${reseña.slug}`,
    lastModified: new Date(reseña.fecha),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...paginasFijas, ...paginasReseñas];
}