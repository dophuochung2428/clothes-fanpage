import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, Sparkles, ShieldCheck, Users, Zap } from 'lucide-react';
import { CategoryCard } from '@/components/category-card';
import { ProductCard } from '@/components/product-card';
import { SectionHeading } from '@/components/section-heading';
import { CallBanner } from '@/components/call-banner';
import { products, categories, siteInfo } from '@/lib/data';

export default function HomePage() {
  const featuredProducts = products.slice(0, 8);
  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-[2rem] bg-white shadow-soft">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8 p-8 md:p-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-700">
              <Zap className="h-4 w-4" />
              Thư viện cho thuê · Liên hệ nhanh
            </div>
            <div className="space-y-6">
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Tìm trang phục hoàn hảo cho mọi dịp
              </h1>
              <p className="max-w-xl text-base leading-8 text-slate-600">
                Hàng trăm trang phục cho thuê sẵn có. Dễ duyệt, liên hệ nhanh. Khám phá váy, vest, áo dài, cosplay và phụ kiện với trải nghiệm trưng bày cao cấp.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/products" className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-700">
                Xem bộ sưu tập
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href={siteInfo.zaloLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-slate-50"
              >
                Liên hệ qua Zalo
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-500">Liên hệ nhanh</p>
                <p className="mt-3 text-lg font-semibold text-slate-950">Zalo, Messenger, Điện thoại</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-500">Duyệt dễ dàng</p>
                <p className="mt-3 text-lg font-semibold text-slate-950">Bộ lọc hiện đại và liên kết chia sẻ</p>
              </div>
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1520974725107-3548dc9617f2?auto=format&fit=crop&w=1200&q=80"
              alt="Fashion rental catalog"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading title="Danh mục nổi bật" description="Khám phá các phong cách và bộ sưu tập cho thuê." />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {categories.slice(0, 6).map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <section className="mt-20">
        <SectionHeading title="Sản phẩm tuyển chọn" description="Các món phổ biến từ danh mục, do khách và stylist lựa chọn." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-[2rem] bg-white p-8 shadow-soft sm:p-12">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <SectionHeading title="Cách thuê đồ" description="Quy trình thuê đơn giản, dễ tìm kiếm và liên hệ nhanh." />
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">Duyệt sản phẩm</h3>
                <p className="mt-2 text-sm text-slate-600">Khám phá trang phục theo phong cách, danh mục và dịp.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">Liên hệ cửa hàng</h3>
                <p className="mt-2 text-sm text-slate-600">Liên hệ qua Zalo, Facebook hoặc gọi trực tiếp.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">Nhận trang phục</h3>
                <p className="mt-2 text-sm text-slate-600">Nhận hoặc nhận hàng đúng thời gian đã hẹn.</p>
              </div>
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-brand-600 px-8 py-10 text-white shadow-soft">
            <h2 className="text-3xl font-semibold">Trải nghiệm thuê tin cậy</h2>
            <p className="mt-4 text-base leading-7 text-brand-100">Phong cách cao cấp và thông tin thuê rõ ràng tạo cảm giác chuyên nghiệp và đáng tin cậy.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-4xl font-semibold">320+</p>
                <p className="text-sm text-brand-100">Trang phục có sẵn</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-4xl font-semibold">12 năm</p>
                <p className="text-sm text-brand-100">kinh nghiệm tư vấn & cho thuê</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 rounded-[2rem] bg-slate-950 px-8 py-12 text-white shadow-soft sm:px-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-brand-300">Được tin tưởng bởi khách hàng</p>
            <h2 className="mt-3 text-3xl font-semibold">Thư viện thuê trang phục sang trọng ngay từ cái nhìn đầu tiên.</h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
              Dành cho việc duyệt, chia sẻ và liên hệ cửa hàng nhanh chóng mà không có chức năng thanh toán.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-900/80 p-6">
              <p className="text-sm text-brand-300">Liên hệ nhanh</p>
              <p className="mt-3 text-2xl font-semibold">Zalo, Messenger, Điện thoại</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-6">
              <p className="text-sm text-brand-300">Phong cách</p>
              <p className="mt-3 text-2xl font-semibold">Dạ hội, truyền thống, cosplay, tốt nghiệp</p>
            </div>
          </div>
        </div>
      </section>

      <CallBanner />
    </main>
  );
}
