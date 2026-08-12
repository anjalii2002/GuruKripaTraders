import Hero from '@/components/Hero';
import HeroTrustStrip from '@/components/HeroTrustStrip';
import CategoryShowcase from '@/components/CategoryShowcase';
import ProductCatalog from '@/components/ProductCatalog';
import PoojaOilComparison from '@/components/PoojaOilComparison';
import BundleBuilder from '@/components/BundleBuilder';
import PurityGuarantee from '@/components/PurityGuarantee';
import Testimonials from '@/components/Testimonials';
import FaqAccordion from '@/components/FaqAccordion';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF6F0]">
      <Hero />
      <HeroTrustStrip />
      <CategoryShowcase />
      <ProductCatalog />
      <PoojaOilComparison />
      <BundleBuilder />
      <PurityGuarantee />
      <Testimonials />
      <FaqAccordion />
    </main>
  );
}
