import Link from 'next/link';
import Image from 'next/image';
import type { Category } from '@/lib/types';
import { Button } from '@/components/ui/button';

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={`/products?category=${category.slug}`} className="group block overflow-hidden rounded-[2rem] bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden bg-slate-100">
        <Image src={category.image} alt={category.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="space-y-3 p-6">
        <p className="text-sm uppercase tracking-[0.24em] text-brand-600">{category.title}</p>
        <h3 className="text-xl font-semibold text-slate-950">{category.description}</h3>
        <Button variant="ghost" className="mt-3 text-sm text-brand-700 hover:text-brand-900">
          Xem {category.title}
        </Button>
      </div>
    </Link>
  );
}
