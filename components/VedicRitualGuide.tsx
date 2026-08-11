'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PRODUCTS } from '@/lib/data';
import { useCart } from '@/lib/cart-context';
import { Sparkles, ShoppingBag } from 'lucide-react';

export default function VedicRitualGuide() {
  const { addToCart, setQuickViewProduct } = useCart();
  const [selectedRitual, setSelectedRitual] = useState<'daily' | 'festival' | 'akhand' | 'gift'>('daily');

  const getRecommendedProducts = () => {
    switch (selectedRitual) {
      case 'daily':
        return PRODUCTS.filter((p) => p.id === 'gk-01' || p.id === 'gk-02');
      case 'festival':
        return PRODUCTS.filter((p) => p.id === 'gk-03' || p.id === 'item-01');
      case 'akhand':
        return PRODUCTS.filter((p) => p.id === 'gk-01' || p.id === 'item-02');
      case 'gift':
        return PRODUCTS.filter((p) => p.id === 'gk-03' || p.id === 'box-01');
      default:
        return PRODUCTS.slice(0, 2);
    }
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-white border-b border-[#E8DDCB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C85A17]/15 border border-[#C85A17]/30 text-[#C85A17] text-xs font-extrabold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-[#C85A17]" />
            <span>Shopping Assistant</span>
          </div>
          <h2 className="font-anton text-4xl sm:text-5xl text-[#2C1A14] uppercase tracking-wider leading-tight">
            Find the Perfect Product for Your Ritual
          </h2>
          <p className="text-[#3D2319] text-base sm:text-lg font-medium">
            Select your worship occasion below to get instant product recommendations with optimal litrage and consecrated purity.
          </p>
        </div>

        {/* Ritual Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setSelectedRitual('daily')}
            className={`px-5 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all ${
              selectedRitual === 'daily'
                ? 'bg-[#C85A17] text-white shadow-md scale-105'
                : 'bg-[#F3ECE0] text-[#2C1A14] border border-[#E8DDCB] hover:bg-[#EFE6D5]'
            }`}
          >
            🪔 Daily Aarti & Sandhya Diya
          </button>

          <button
            onClick={() => setSelectedRitual('festival')}
            className={`px-5 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all ${
              selectedRitual === 'festival'
                ? 'bg-[#C85A17] text-white shadow-md scale-105'
                : 'bg-[#F3ECE0] text-[#2C1A14] border border-[#E8DDCB] hover:bg-[#EFE6D5]'
            }`}
          >
            🪔 Deepavali & Festival Pujan
          </button>

          <button
            onClick={() => setSelectedRitual('akhand')}
            className={`px-5 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all ${
              selectedRitual === 'akhand'
                ? 'bg-[#C85A17] text-white shadow-md scale-105'
                : 'bg-[#F3ECE0] text-[#2C1A14] border border-[#E8DDCB] hover:bg-[#EFE6D5]'
            }`}
          >
            🔥 Akhand Jyoti & Navratri
          </button>

          <button
            onClick={() => setSelectedRitual('gift')}
            className={`px-5 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all ${
              selectedRitual === 'gift'
                ? 'bg-[#C85A17] text-white shadow-md scale-105'
                : 'bg-[#F3ECE0] text-[#2C1A14] border border-[#E8DDCB] hover:bg-[#EFE6D5]'
            }`}
          >
            🎁 Corporate & Temple Gift Sets
          </button>
        </div>

        {/* Products Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {getRecommendedProducts().map((product) => (
            <div
              key={product.id}
              className="bg-[#FAF6EE] rounded-3xl p-6 border border-[#E8DDCB] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center"
            >
              <div
                className="relative w-full sm:w-44 h-48 sm:h-44 rounded-2xl overflow-hidden bg-white border border-[#E8DDCB] shrink-0 cursor-pointer"
                onClick={() => setQuickViewProduct(product)}
              >
                <Image src={product.image} alt={product.name} fill className="object-cover hover:scale-105 transition-transform" />
              </div>

              <div className="flex-1 space-y-3">
                <span className="text-[11px] font-extrabold text-[#C85A17] uppercase tracking-widest block">
                  {product.category}
                </span>
                <h3
                  onClick={() => setQuickViewProduct(product)}
                  className="font-serif font-bold text-lg text-[#2C1A14] leading-snug hover:text-[#C85A17] cursor-pointer"
                >
                  {product.name}
                </h3>
                <p className="text-xs text-[#3D2319] line-clamp-2 font-normal">
                  {product.description}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-[#E8DDCB]">
                  <span className="font-anton text-xl text-[#2C1A14]">₹{product.price}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="px-4 py-2.5 rounded-full bg-[#C85A17] hover:bg-[#B44E11] text-white font-extrabold text-xs shadow-xs transition-all flex items-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#DAA520]" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
