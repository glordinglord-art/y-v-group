import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [`${siteConfig.url}${siteConfig.ogImage}`],
    },
    {
      url: `${siteConfig.url}/nosotros`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${siteConfig.url}${siteConfig.ogImage}`],
    },
    {
      url: `${siteConfig.url}/servicios`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${siteConfig.url}${siteConfig.ogImage}`],
    },
    {
      url: `${siteConfig.url}/experiencia`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${siteConfig.url}${siteConfig.ogImage}`],
    },
    {
      url: `${siteConfig.url}/insights`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      images: [`${siteConfig.url}${siteConfig.ogImage}`],
    },
    {
      url: `${siteConfig.url}/casos-de-exito`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      images: [`${siteConfig.url}${siteConfig.ogImage}`],
    },
    {
      url: `${siteConfig.url}/contacto`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${siteConfig.url}${siteConfig.ogImage}`],
    },
  ];
}
