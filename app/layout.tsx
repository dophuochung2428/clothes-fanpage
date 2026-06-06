import type { Metadata } from 'next';
import './globals.css';
import { StickyActions } from '@/components/sticky-actions';

export const metadata: Metadata = {
  title: 'Thuê trang phục | Thư viện cho thuê thời trang',
  description: 'Duyệt bộ sưu tập trang phục cho thuê: váy dạ hội, áo dài, vest, cosplay và phụ kiện. Liên hệ nhanh qua Zalo, Messenger hoặc gọi điện.',
  openGraph: {
    title: 'Thuê trang phục | Thư viện cho thuê thời trang',
    description: 'Duyệt bộ sưu tập váy, vest, áo dài và cosplay có sẵn để thuê. Liên hệ nhanh qua Zalo hoặc Facebook.',
    type: 'website',
    siteName: 'Thuê trang phục'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thuê trang phục | Thư viện cho thuê thời trang',
    description: 'Duyệt bộ sưu tập trang phục cho thuê và liên hệ nhanh để đặt giữ.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-page text-slate-950 antialiased">
        {children}
        <StickyActions />
      </body>
    </html>
  );
}
