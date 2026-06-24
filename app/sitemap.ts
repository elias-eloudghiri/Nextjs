import type { MetadataRoute } from "next";
import { createClient } from "@/prismicio";

const BASE_URL = process.env.NEXT_PUBLIC_URL!;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const client = createClient();
  const websites = await client.getAllByType("website");

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/websites`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/mentions`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/pins`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: `${BASE_URL}/search`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
  ];

  const websitePages: MetadataRoute.Sitemap = websites.map((website) => ({
    url: `${BASE_URL}/websites/${website.uid}`,
    lastModified: new Date(website.last_publication_date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...websitePages];
}
