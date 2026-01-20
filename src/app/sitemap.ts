import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://validtot.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // Add other routes here as the app grows, e.g. /about, /features, /pricing
  ]
}
