import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products } from '@/lib/data';
import { ProductDetailClient } from './ProductDetailClient';

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const product = products.find((item) => item.slug === resolvedParams.slug);
  if (!product) {
    return { title: 'Không tìm thấy sản phẩm' };
  }

  return {
    title: `${product.name} | Thuê trang phục`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      type: 'article',
      images: [{ url: product.images[0], alt: product.name }]
    }
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = products.find((item) => item.slug === resolvedParams.slug);
  if (!product) notFound();

  const relatedProducts = products.filter((item) => item.slug !== product.slug && item.category === product.category).slice(0, 4);

  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
}
