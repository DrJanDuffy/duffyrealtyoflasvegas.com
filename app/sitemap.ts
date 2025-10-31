import { MetadataRoute } from 'next'
import { communities } from '@/lib/data/communities'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.duffyrealtyoflasvegas.com'
  const lastModified = new Date()

  const communityPages: MetadataRoute.Sitemap = communities.map((community) => ({
    url: `${baseUrl}/communities/${community.slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/communities`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...communityPages,
  ]
}

