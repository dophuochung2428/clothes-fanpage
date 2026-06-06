import { products, siteInfo } from '@/lib/data';

export default function sitemap() {
  const baseUrl = siteInfo.baseUrl;

  const staticPages = ['', 'products', 'rental-guide', 'contact'].map((path) => ({
    loc: `${baseUrl}/${path}`,
    lastModified: new Date().toISOString()
  }));

  const productPages = products.map((product) => ({
    loc: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date().toISOString()
  }));

  return [...staticPages, ...productPages];
}
