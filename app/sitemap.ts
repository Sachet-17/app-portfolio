import type { MetadataRoute } from "next";
import { siteConfig } from "../data/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/skills`, lastModified: new Date() },
    { url: `${base}/education`, lastModified: new Date() },
    { url: `${base}/experience`, lastModified: new Date() },
    { url: `${base}/projects`, lastModified: new Date() },
    { url: `${base}/resume`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
  ];
}