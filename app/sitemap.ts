import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const base = "https://www.astershore.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/journal", "/the-edit", "/the-current", "/projects", "/about", "/contact", "/meals", "/meals/ingredients", "/vote/"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: path === "" ? 1 : 0.7
    })
  );
}
