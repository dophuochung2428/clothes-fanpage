import { CheckCircle, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import { CallBanner } from '@/components/call-banner';
import { SectionHeading } from '@/components/section-heading';

export default function RentalGuidePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] bg-white p-10 shadow-soft sm:p-14">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">Hướng dẫn thuê</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Các bước đơn giản để thuê trang phục</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">Tìm hiểu cách duyệt danh mục, liên hệ cửa hàng và đặt giữ trang phục một cách tự tin.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-100 text-brand-700">
              <Sparkles className="h-6 w-6" />
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-slate-950">Chọn phong cách</h2>
            <p className="mt-4 text-slate-600">Duyệt danh mục như Váy dạ hội, Áo dài, Vest nam và Cosplay để tìm bộ trang phục phù hợp.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-100 text-brand-700">
              <Phone className="h-6 w-6" />
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-slate-950">Xác nhận tình trạng</h2>
            <p className="mt-4 text-slate-600">Nhắn Zalo hoặc Messenger để xác nhận trang phục có sẵn cho ngày bạn cần.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-100 text-brand-700">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-slate-950">Đặt giữ & nhận</h2>
            <p className="mt-4 text-slate-600">Chọn nhận tại cửa hàng hoặc giao hàng, sau đó xác nhận để hoàn tất đặt giữ.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-100 text-brand-700">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-slate-950">Thuê yên tâm</h2>
            <p className="mt-4 text-slate-600">Điều khoản thuê rõ ràng và đơn giản để bạn sử dụng trang phục mà không lo lắng.</p>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div className="space-y-8 rounded-[2rem] bg-white p-10 shadow-soft">
          <SectionHeading title="Những điều cần biết" description="Những thông tin cần biết trước khi thuê từ danh mục của chúng tôi." />
          <div className="space-y-6 text-slate-600">
            <div>
              <h3 className="text-xl font-semibold text-slate-950">Ưu tiên hình ảnh</h3>
              <p className="mt-3">Hình ảnh sản phẩm lớn và danh mục được tuyển chọn giúp bạn duyệt mà không bị phân tâm. Dùng bộ lọc và tìm kiếm để thu hẹp kết quả nhanh chóng.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-950">Liên hệ trước khi quyết định</h3>
              <p className="mt-3">Vì đây là thư viện cho thuê, bước tiếp theo là nhắn cửa hàng để hỏi tình trạng và giá. Không có giỏ hàng, không thanh toán trực tuyến, không cần tài khoản.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-950">Liên kết chia sẻ tiện lập kế hoạch</h3>
              <p className="mt-3">Sao chép và chia sẻ liên kết sản phẩm với bạn bè hoặc ekip để mọi người cùng xem và thảo luận.</p>
            </div>
          </div>
        </div>

        <aside className="rounded-[2rem] bg-brand-600 p-10 text-white shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-200">Cần hỗ trợ thuê?</p>
          <h2 className="mt-4 text-3xl font-semibold">Liên hệ cửa hàng bất cứ lúc nào</h2>
          <p className="mt-4 text-base leading-8 text-brand-100">Dùng Zalo hoặc Messenger để hỏi nhanh, và gọi điện cho các yêu cầu gấp.</p>
          <div className="mt-8 space-y-4 rounded-3xl bg-white/10 p-6">
            <p className="text-sm text-brand-100">Phone</p>
            <p className="text-xl font-semibold text-white">+84 912 345 678</p>
          </div>
          <div className="mt-5 space-y-4 rounded-3xl bg-white/10 p-6">
            <p className="text-sm text-brand-100">Zalo</p>
            <p className="text-xl font-semibold text-white">Nhấn để nhắn tin ngay</p>
          </div>
        </aside>
      </section>

      <CallBanner />
    </main>
  );
}
