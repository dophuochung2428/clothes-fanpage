import Link from 'next/link';
import { MessageCircle, Phone, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteInfo } from '@/lib/data';

export function CallBanner() {
  return (
    <section className="mt-20 rounded-[2rem] bg-brand-600 px-8 py-10 text-white shadow-soft sm:px-12 sm:py-14">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-brand-200">Cần hỗ trợ thuê?</p>
          <h2 className="mt-3 text-3xl font-semibold">Liên hệ cửa hàng và đặt giữ trang phục ngay.</h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-brand-100">Phản hồi nhanh qua Zalo và Messenger, có hỗ trợ gọi điện cho yêu cầu gấp.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Button asChild>
            <Link href={siteInfo.zaloLink} target="_blank" className="inline-flex items-center justify-center gap-2">
              <Zap className="h-4 w-4" />
              Liên hệ qua Zalo
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href={siteInfo.fbLink} target="_blank" className="inline-flex items-center justify-center gap-2 text-slate-950">
              <MessageCircle className="h-4 w-4" />
              Nhắn Messenger
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={`tel:${siteInfo.phone}`} className="inline-flex items-center justify-center gap-2 text-slate-950">
              <Phone className="h-4 w-4" />
              Gọi ngay
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
