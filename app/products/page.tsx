'use client';

import { useMemo, useState, useEffect } from 'react';
import { Filter, Search, SortAsc, SortDesc } from 'lucide-react';
import { products, categories } from '@/lib/data';
import { ProductCard } from '@/components/product-card';
import { SkeletonCard } from '@/components/skeleton-card';
import { EmptyState } from '@/components/empty-state';
import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { usePathname, useRouter } from 'next/navigation';

const sortOptions = [
  { value: 'newest', label: 'Mới nhất' },
  { value: 'featured', label: 'Nổi bật' },
  { value: 'low', label: 'Giá: tăng dần' },
  { value: 'high', label: 'Giá: giảm dần' }
];

const colors = Array.from(new Set(products.flatMap((product) => product.colors)));
const sizes = Array.from(new Set(products.flatMap((product) => product.sizes)));

export default function ProductsPage() {
  const router = useRouter();
  const pathname = usePathname();

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [color, setColor] = useState('All');
  const [size, setSize] = useState('All');
  const [sort, setSort] = useState('featured');
  const [isSearching, setIsSearching] = useState(false);

  // Initialize state from URL params on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q') ?? '';
    const cat = params.get('category') ?? 'All';
    const col = params.get('color') ?? 'All';
    const sz = params.get('size') ?? 'All';
    const s = params.get('sort') ?? 'featured';

    setQuery(q);
    setCategory(cat);
    setColor(col);
    setSize(sz);
    setSort(s);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Persist filters to the URL (replace to avoid history spam)
  useEffect(() => {
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (category && category !== 'All') params.set('category', category);
    if (color && color !== 'All') params.set('color', color);
    if (size && size !== 'All') params.set('size', size);
    if (sort && sort !== 'featured') params.set('sort', sort);

    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname);
  }, [query, category, color, size, sort, pathname, router]);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const search = query.toLowerCase();
        const matchesText = [product.name, product.code, product.keywords.join(' ')].some((value) => value.toLowerCase().includes(search));
        const matchesCategory = category === 'All' || product.category === category;
        const matchesColor = color === 'All' || product.colors.includes(color);
        const matchesSize = size === 'All' || product.sizes.includes(size);
        return matchesText && matchesCategory && matchesColor && matchesSize;
      })
      .sort((a, b) => {
        if (sort === 'low') return a.price - b.price;
        if (sort === 'high') return b.price - a.price;
        if (sort === 'newest') return b.id - a.id;
        return a.featured === b.featured ? 0 : b.featured ? 1 : -1;
      });
  }, [query, category, color, size, sort]);

  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">
      <div className="mb-10 rounded-[2rem] bg-white p-8 shadow-soft">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Thư viện cho thuê</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-950 sm:text-4xl">Duyệt toàn bộ bộ sưu tập</h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Sử dụng tìm kiếm và bộ lọc để tìm trang phục phù hợp. Mỗi sản phẩm có thông tin thuê và các hành động liên hệ nhanh.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700">
              <Filter className="h-4 w-4" />
              {filteredProducts.length} sản phẩm
            </div>
            <div className="rounded-full bg-brand-600 px-5 py-3 text-white">Tinh chỉnh tìm kiếm</div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[280px_1fr]">
          <aside className="space-y-6 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
            <div>
              <p className="text-sm font-semibold text-slate-900">Tìm kiếm</p>
              <div className="mt-3 flex items-center gap-2 rounded-3xl border border-slate-200 bg-white px-4 py-3">
                <Search className="h-4 w-4 text-slate-400" />
                <input
                  className="w-full border-none bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                  placeholder="Tìm theo tên, mã, từ khóa"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-semibold text-slate-900">Danh mục</p>
              <div className="grid gap-2">
                <Button variant={category === 'All' ? 'secondary' : 'ghost'} onClick={() => setCategory('All')}>
                  Tất cả danh mục
                </Button>
                {categories.map((item) => (
                  <Button key={item.slug} variant={category === item.title ? 'secondary' : 'ghost'} onClick={() => setCategory(item.title)}>
                    {item.title}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-semibold text-slate-900">Màu</p>
              <div className="flex flex-wrap gap-2">
                <Button variant={color === 'All' ? 'secondary' : 'ghost'} size="sm" onClick={() => setColor('All')}>
                  Tất cả
                </Button>
                {colors.map((value) => (
                  <Badge key={value} variant={color === value ? 'secondary' : 'outline'} onClick={() => setColor(value)} className="cursor-pointer">
                    {value}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-semibold text-slate-900">Kích cỡ</p>
              <div className="flex flex-wrap gap-2">
                <Button variant={size === 'All' ? 'secondary' : 'ghost'} size="sm" onClick={() => setSize('All')}>
                  Tất cả
                </Button>
                {sizes.map((value) => (
                  <Badge key={value} variant={size === value ? 'secondary' : 'outline'} onClick={() => setSize(value)} className="cursor-pointer">
                    {value}
                  </Badge>
                ))}
              </div>
            </div>
          </aside>

          <section>
            <div className="mb-6 flex flex-col gap-3 rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-600">Hiển thị {filteredProducts.length} kết quả</p>
              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-600">Sắp xếp theo</span>
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {filteredProducts.length === 0 ? (
                <EmptyState title="Không tìm thấy kết quả" description="Thử thay đổi bộ lọc hoặc từ khóa khác." />
              ) : (
                filteredProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
