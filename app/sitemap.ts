import { MetadataRoute } from 'next'
import { communities } from '@/lib/data/communities'
import { locations } from '@/lib/data/locations'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.duffyrealtyoflasvegas.com'
  const lastModified = new Date()

  const communityPages: MetadataRoute.Sitemap = communities.map((community) => ({
    url: `${baseUrl}/communities/${community.slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const locationPages: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${baseUrl}/areas/${location.slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.7,
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
    {
      url: `${baseUrl}/how-i-help`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/buyers-guide`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/first-time-buyers`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/new-construction-process`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tips-buying-new-construction`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...locationPages,
    ...communityPages,
  ]
}

