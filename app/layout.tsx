import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/lib/cart-context';
import Navbar from '@/components/Navbar';
import CartDrawer from '@/components/CartDrawer';
import QuickViewModal from '@/components/QuickViewModal';
import SankalpModal from '@/components/SankalpModal';
import ImageUploader from '@/components/ImageUploader';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Gurukripa Traders | Vardaan & Shri Kesari Poojan Oils',
  description: 'Elevate your daily worship and milestone ceremonies with hand-curated samagri, Vardaan Til Tail Deepak Oil, Shri Kesari Vandana Deep Liquid, A2 bilona ghee, and lab-tested Kashmiri saffron.',
  keywords: ['Vardaan Til Tail', 'Shri Kesari Deep Liquid', 'Poojan Oil', 'Deepak Oil', 'Puja Samagri', 'A2 Bilona Ghee', 'Kashmiri Saffron', 'Gurukripa Traders'],
  openGraph: {
    title: 'Gurukripa Traders | Vardaan & Shri Kesari Poojan Oils',
    description: 'Sacred Scriptural Purity, Visualized in Motion. Lab-tested poojan oils and festival samagri.',
    images: ['/images/hero-showcase.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-terracotta-600 selection:text-white">
        <CartProvider>
          {/* <Navbar /> */}
          <main className="min-h-screen">
            {children}
          </main>
          <CartDrawer />
          <QuickViewModal />
          {/* <SankalpModal /> */}
          {/* <ImageUploader /> */}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
