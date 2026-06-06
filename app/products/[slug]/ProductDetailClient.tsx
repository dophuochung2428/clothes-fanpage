'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import ImageWithFallback from '@/components/ui/ImageWithFallback';
import { Copy, MessageCircle, Phone, Share2, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/lib/types';
import { siteInfo } from '@/lib/data';

export function ProductDetailClient({ product, relatedProducts }: { product: Product; relatedProducts: Product[] }) {
  const pathname = usePathname();
  const router = useRouter();
  const search = typeof window !== 'undefined' ? window.location.search : '';
  const [primaryImage, setPrimaryImage] = useState(product.images[0]);
  const [copied, setCopied] = useState(false);
  const related = relatedProducts;

  const shareUrl = `${siteInfo.baseUrl}${pathname ?? ''}`;

  async function handleCopyLink() {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="col-span-full mb-2 flex items-center gap-4">
        <button type="button" onClick={() => router.back()} className="rounded-full border p-2">
          ← Quay lại
        </button>
        <nav className="text-sm text-slate-600">
          <Link href={`/products${search ? `${search}` : ''}`} className="underline">Danh sách</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold text-slate-900">{product.name}</span>
        </nav>
      </div>
      <section className="space-y-6">
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
          <div className="grid gap-2 p-4 sm:grid-cols-[minmax(100px,120px)_1fr]">
            <div className="space-y-2">
              {product.images.map((image) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setPrimaryImage(image)}
                  className={`group block overflow-hidden rounded-3xl border ${primaryImage === image ? 'border-brand-500' : 'border-slate-200'} transition`}
                >
                  <div className="relative h-24 w-full overflow-hidden">
                    <ImageWithFallback src={image} alt={product.name} fill className="object-cover transition duration-300 group-hover:scale-105" />
                  </div>
                </button>
              ))}
            </div>
            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-slate-100">
              <ImageWithFallback src={primaryImage} alt={product.name} fill className="object-cover" />
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-8 shadow-soft">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">{product.category}</p>
              <h1 className="mt-3 text-3xl font-semibold text-slate-950">{product.name}</h1>
              <p className="mt-2 text-sm text-slate-500">Code: {product.code}</p>
            </div>
            <div className="rounded-3xl bg-brand-50 px-5 py-3 text-brand-700">{product.priceLabel}</div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-4 rounded-3xl bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Kích cỡ có sẵn</p>
              <div className="flex flex-wrap gap-2">{product.sizes.map((size) => (<Badge key={size}>{size}</Badge>))}</div>
            </div>
            <div className="space-y-4 rounded-3xl bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Màu sắc</p>
              <div className="flex flex-wrap gap-2">{product.colors.map((color) => (<Badge key={color}>{color}</Badge>))}</div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold text-slate-950">Mô tả</h2>
            <p className="text-slate-600">{product.description}</p>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-8 shadow-soft">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">Liên hệ thuê</p>
              <p className="mt-2 text-base text-slate-600">Kiểm tra tình trạng sẵn có và đặt giữ trang phục.</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <Button asChild>
              <Link href={siteInfo.zaloLink} target="_blank" className="w-full inline-flex items-center justify-center gap-2">
                <span>Zalo</span>
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href={siteInfo.fbLink} target="_blank" className="w-full inline-flex items-center justify-center gap-2 text-slate-950">
                <span>Messenger</span>
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={`tel:${siteInfo.phone}`} className="w-full inline-flex items-center justify-center gap-2 text-slate-950">
                <span>Gọi ngay</span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-8 shadow-soft">
          <div className="mb-6 flex items-center gap-3">
            <Share2 className="h-5 w-5 text-brand-600" />
            <h2 className="text-xl font-semibold text-slate-950">Chia sẻ bộ đồ này</h2>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button onClick={handleCopyLink}>{copied ? 'Đã sao chép liên kết' : 'Sao chép liên kết'}</Button>
            <Button asChild variant="secondary">
              <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer" className="w-full inline-flex items-center justify-center gap-2 text-slate-950">
                Chia sẻ trên Facebook
              </Link>
            </Button>
          </div>
          <p className="mt-3 text-sm text-slate-500">Dùng liên kết để gửi bộ đồ này cho bạn bè hoặc lưu lại để xem sau.</p>
        </div>

        <div className="rounded-[2rem] bg-white p-8 shadow-soft">
          <div className="mb-6 flex items-center gap-3">
            <Tag className="h-5 w-5 text-brand-600" />
            <h2 className="text-xl font-semibold text-slate-950">Kiểu tương tự</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {related.map((item) => (
              <Link key={item.slug} href={`/products/${item.slug}`} className="block overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 transition hover:shadow-soft">
                <div className="relative h-48 w-full">
                  <Image src={item.images[0]} alt={item.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-slate-950">{item.name}</p>
                  <p className="mt-2 text-sm text-slate-500">{item.priceLabel}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <aside className="space-y-6">
        <div className="rounded-[2rem] bg-brand-50 p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Thông tin nhanh</p>
          <div className="mt-6 space-y-3 text-slate-700">
            <p><span className="font-semibold">Danh mục:</span> {product.category}</p>
            <p><span className="font-semibold">Mã sản phẩm:</span> {product.code}</p>
            <p><span className="font-semibold">Kích cỡ:</span> {product.sizes.join(', ')}</p>
            <p><span className="font-semibold">Màu sắc:</span> {product.colors.join(', ')}</p>
          </div>
        </div>
        <div className="rounded-[2rem] bg-slate-50 p-8 shadow-soft">
          <h2 className="text-xl font-semibold text-slate-950">Cần tư vấn?</h2>
          <p className="mt-3 text-slate-600">Liên hệ cửa hàng để được tư vấn kích cỡ, phong cách và tình trạng trước khi thuê.</p>
          <div className="mt-6 flex flex-col gap-3">
            <Button asChild>
              <Link href={siteInfo.zaloLink} target="_blank" className="w-full inline-flex items-center justify-center gap-2">
                Liên hệ qua Zalo
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={siteInfo.fbLink} target="_blank" className="w-full inline-flex items-center justify-center gap-2 text-slate-950">
                Nhắn tin Facebook
              </Link>
            </Button>
          </div>
        </div>
      </aside>
    </div>
  );
}
