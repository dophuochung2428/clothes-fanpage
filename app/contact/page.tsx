import Image from 'next/image';
import { ArrowRight, MapPin, MessageCircle, Phone } from 'lucide-react';
import { siteInfo } from '@/lib/data';
import { CallBanner } from '@/components/call-banner';
import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="space-y-6 rounded-[2rem] bg-white p-10 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">Liên hệ</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Liên hệ cửa hàng ngay</h1>
          <p className="max-w-2xl text-base leading-8 text-slate-600">Nhắn tin qua Zalo hoặc Facebook, gọi trực tiếp, hoặc đến cửa hàng để xem thêm các bộ sưu tập cho thuê.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Điện thoại</p>
              <p className="mt-4 text-xl font-semibold text-slate-950">{siteInfo.phone}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Địa chỉ</p>
              <p className="mt-4 text-xl font-semibold text-slate-950">{siteInfo.address}</p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] bg-slate-100 shadow-soft">
          <Image src="https://images.unsplash.com/photo-1495121605193-b116b5b9c5d5?auto=format&fit=crop&w=1000&q=80" alt="Contact rental shop" width={960} height={720} className="object-cover" />
        </div>
      </section>

      <section className="mt-14 grid gap-6 sm:grid-cols-3">
        <div className="rounded-[2rem] bg-white p-8 shadow-soft">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-600">Zalo</p>
          <p className="mt-4 text-base text-slate-600">Nhắn tin nhanh để hỏi tình trạng và thông tin thuê.</p>
          <Button asChild className="mt-6">
              <a href={siteInfo.zaloLink} target="_blank" rel="noreferrer" className="w-full inline-flex items-center justify-center gap-2">
              Nhắn Zalo <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
        <div className="rounded-[2rem] bg-white p-8 shadow-soft">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-600">Facebook</p>
          <p className="mt-4 text-base text-slate-600">Gửi tin nhắn để được gợi ý phong cách và đặt giữ.</p>
          <Button asChild variant="secondary" className="mt-6">
              <a href={siteInfo.fbLink} target="_blank" rel="noreferrer" className="w-full inline-flex items-center justify-center gap-2">
              Nhắn Messenger <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
        <div className="rounded-[2rem] bg-white p-8 shadow-soft">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-600">Đến cửa hàng</p>
          <p className="mt-4 text-base text-slate-600">Cửa hàng dễ đến và sẵn sàng cho buổi thử đồ.</p>
          <Button asChild variant="outline" className="mt-6">
              <a href={siteInfo.mapLink} target="_blank" rel="noreferrer" className="w-full inline-flex items-center justify-center gap-2">
              Mở bản đồ <MapPin className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      <section className="mt-14 rounded-[2rem] bg-brand-600 p-10 text-white shadow-soft sm:p-14">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-brand-200">Cần trả lời nhanh?</p>
              <h2 className="mt-3 text-3xl font-semibold">Chúng tôi trả lời các yêu cầu thuê nhanh chóng.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl bg-white/10 p-5">
              <p className="text-sm text-brand-100">Điện thoại</p>
              <p className="mt-2 text-lg font-semibold">{siteInfo.phone}</p>
            </div>
            <div className="rounded-3xl bg-white/10 p-5">
              <p className="text-sm text-brand-100">Liên kết Zalo</p>
              <p className="mt-2 text-lg font-semibold">Nhấn để nhắn</p>
            </div>
          </div>
        </div>
      </section>

      <CallBanner />
    </main>
  );
}
