import Link from 'next/link';
import Image from 'next/image';
import ImageWithFallback from '@/components/ui/ImageWithFallback';
import type { Product } from '@/lib/types';
import { cn } from '@/lib/utils';

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block overflow-hidden rounded-[2rem] bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-72 overflow-hidden bg-slate-100">
        <ImageWithFallback src={product.images[0]} alt={product.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="space-y-3 p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-slate-950">{product.name}</p>
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">{product.category}</span>
        </div>
        <p className="text-sm text-slate-500">Mã: {product.code}</p>
        <div className="flex items-center justify-between gap-3 text-sm text-slate-800">
          <span className="font-semibold">{product.priceLabel}</span>
          <span className={cn('inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700')}>
            Xem chi tiết
          </span>
        </div>
      </div>
    </Link>
  );
}
