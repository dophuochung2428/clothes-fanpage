import { Facebook, MessageCircle, Phone } from 'lucide-react';
import { siteInfo } from '@/lib/data';

export function StickyActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-white/95 border-t border-slate-200 px-4 py-3 shadow-[0_-10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        <a href={`tel:${siteInfo.phone}`} className="flex-1 rounded-3xl bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-brand-700">
          <Phone className="mx-auto mb-1 h-5 w-5" />
          Gọi
        </a>
        <a href={siteInfo.zaloLink} target="_blank" rel="noreferrer" className="flex-1 rounded-3xl bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-800">
          <MessageCircle className="mx-auto mb-1 h-5 w-5" />
          Zalo
        </a>
        <a href={siteInfo.fbLink} target="_blank" rel="noreferrer" className="flex-1 rounded-3xl bg-slate-50 px-4 py-3 text-center text-sm font-semibold text-slate-950 shadow-sm hover:bg-slate-100">
          <Facebook className="mx-auto mb-1 h-5 w-5" />
          Tin nhắn
        </a>
      </div>
    </div>
  );
}
