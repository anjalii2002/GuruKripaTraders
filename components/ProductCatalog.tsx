'use client';

import React, { useState } from 'react';
import { PRODUCTS } from '@/lib/data';
import ProductCard from './ProductCard';
import { Search, Sparkles, ShieldCheck } from 'lucide-react';

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Vardaan Oil Series',
    'Kesari Deep Dravya',
    'Curated Ritual Boxes',
    'Hawan Samagri',
    'Purity Guarantee Essentials',
  ];

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.hindiTitle && product.hindiTitle.includes(searchQuery));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="catalog" className="w-full py-16 sm:py-24 bg-[#FAF6EE] border-b border-[#E8DDCB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          
          <h2 className="font-anton text-4xl sm:text-6xl text-[#2C1A14] leading-tight uppercase tracking-wider">
            Curated Poojan Oils & Samagri
          </h2>
          <p className="text-[#3D2319] text-base sm:text-lg font-medium">
            Browse our lab-verified ingredients, consecrated poojan oils, and festival ritual trunks prepared according to sacred canons.
          </p>
        </div>

        {/* Category Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-3xl border border-[#E8DDCB] shadow-xs">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 scrollbar-none max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#C85A17] text-white shadow-xs'
                    : 'bg-[#F3ECE0] text-[#2C1A14] hover:bg-[#EFE6D5] border border-[#E8DDCB]'
                }`}
              >
                {cat === 'All' ? '✨ All Products' : cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search poojan oils, ghee, saffron..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F3ECE0] border border-[#E8DDCB] text-xs font-semibold text-[#2C1A14] focus:outline-none focus:ring-2 focus:ring-[#C85A17]"
            />
            <Search className="w-4 h-4 text-[#3D2319] absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#E8DDCB] space-y-3">
            <p className="text-lg font-serif text-[#2C1A14] font-bold">No items match your criteria.</p>
            <p className="text-xs text-[#3D2319]">Try searching for &quot;Vardaan&quot;, &quot;Kesari&quot;, or &quot;Saffron&quot;</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-2 text-xs font-extrabold text-[#C85A17] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Assurance Banner */}
        <div className="bg-[#2C1A14] text-white rounded-3xl p-6 sm:p-8 border border-[#DAA520]/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-[#C85A17] text-white shrink-0 shadow-xs">
              <ShieldCheck className="w-6 h-6 text-[#DAA520]" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-white text-base sm:text-lg">Bulk Temple Consignments & Corporate Gifting</h4>
              <p className="text-xs text-[#FAF6EE]/80 font-medium">Custom branding, Gotra Sankalp slips, and bulk discounts available for temple trusts and celebrations.</p>
            </div>
          </div>
          <a
            href="https://wa.me/919876543210?text=Hello%20Gurukripa%20Traders,%20I%20am%20interested%20in%20bulk%20temple%20consignments."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-2xl bg-[#C85A17] hover:bg-[#B44E11] text-white text-xs font-extrabold transition-all shadow-md shrink-0"
          >
            Inquire Bulk Rates
          </a>
        </div>

      </div>
    </section>
  );
}
