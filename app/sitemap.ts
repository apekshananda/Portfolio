import { MetadataRoute } from 'next'

export const baseUrl = 'https://apeksha-portfolio.vercel.app' // You can replace this with your actual URL later!

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/experience', '/projects', '/skills'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  )

  return [...routes]
}