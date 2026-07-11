export default function sitemap() {
  const base = "https://lanzhipipes.com";
  const routes = [
    "", "/about", "/products", "/products/ppr-pipe", "/products/hdpe-pipe",
    "/products/ppr-fittings", "/products/hdpe-fittings", "/factory",
    "/oem-service", "/contact"
  ];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
