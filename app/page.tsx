import Hero from '@/components/Hero';
import CategoryShowcase from '@/components/CategoryShowcase';
import ProductCatalog from '@/components/ProductCatalog';
import BundleBuilder from '@/components/BundleBuilder';
import VedicRitualGuide from '@/components/VedicRitualGuide';
import PurityGuarantee from '@/components/PurityGuarantee';
import Testimonials from '@/components/Testimonials';
import FaqAccordion from '@/components/FaqAccordion';

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryShowcase />
      <ProductCatalog />
      <BundleBuilder />
      <VedicRitualGuide />
      <PurityGuarantee />
      <Testimonials />
      <FaqAccordion />
    </>
  );
}
