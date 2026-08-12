import Hero from '@/components/Hero';
import ScriptureQuoteBanner from '@/components/ScriptureQuoteBanner';
import ProductCatalog from '@/components/ProductCatalog';
import BundleBuilder from '@/components/BundleBuilder';
import Testimonials from '@/components/Testimonials';
import FaqAccordion from '@/components/FaqAccordion';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF6F0]">
      <Hero />
      <ScriptureQuoteBanner />
      <ProductCatalog />
      <BundleBuilder />
      <Testimonials />
      <FaqAccordion />
    </main>
  );
}
