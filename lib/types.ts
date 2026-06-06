export type Category = {
  title: string;
  slug: string;
  description: string;
  image: string;
};

export type Product = {
  id: number;
  slug: string;
  name: string;
  code: string;
  category: string;
  price: number;
  priceLabel: string;
  colors: string[];
  sizes: string[];
  images: string[];
  description: string;
  keywords: string[];
  featured: boolean;
};

export type SiteInfo = {
  phone: string;
  zaloLink: string;
  fbLink: string;
  address: string;
  mapLink: string;
  baseUrl: string;
};
