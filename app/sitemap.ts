import { createClient } from "@/prismicio";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const client = createClient();
  

    return [
    {
      url: "http://localhost:3000",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
